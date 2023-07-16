import { Editor, addBaseCommands } from '@prosekit/core'
import { PredictionRule, addSuggestion } from '@prosekit/extensions/suggestion'
import { ReactiveController, ReactiveControllerHost } from 'lit'

import { QueryBuilder } from './query-builder'

export class CommandPopoverController implements ReactiveController {
  public reference: Element | null = null
  private editor: Editor | null = null
  private rules: PredictionRule[] = []
  private cleanup: VoidFunction | null = null
  private queryBuilder: QueryBuilder | null = null
  public handleDismiss: VoidFunction | null = null
  public handleSubmit: VoidFunction | null = null

  constructor(
    private host: ReactiveControllerHost,
    private onChange: (query: string, active: boolean) => void,
  ) {
    this.host.addController(this)
  }

  setEditor(editor: Editor) {
    if (this.editor !== editor) {
      this.editor = editor
      this.host.requestUpdate()
      this.addExtension()
    }
  }

  setRules(rules: PredictionRule[]) {
    if (
      this.rules.length !== rules.length ||
      this.rules.some((r, i) => r !== rules[i])
    ) {
      this.rules = rules
      this.host.requestUpdate()
      this.addExtension()
    }
  }

  setQueryBuilder(queryBuilder: QueryBuilder) {
    if (this.queryBuilder !== queryBuilder) {
      this.queryBuilder = queryBuilder
      this.host.requestUpdate()
      this.addExtension()
    }
  }

  hostDisconnected() {
    this.cleanup?.()
    this.cleanup = null
  }

  private addExtension() {
    this.cleanup?.()
    this.cleanup = null

    if (!this.editor || !this.rules || this.rules.length === 0) {
      return
    }

    type BaseCommandsExtension = ReturnType<typeof addBaseCommands>
    const editor = this.editor as Editor<BaseCommandsExtension>

    const extension = addSuggestion({
      rules: this.rules,
      onMatch: ({ dismiss, deleteMatch, match, matchAfter }) => {
        const span = editor.view.dom.querySelector(
          '.prosemirror-prediction-match',
        )

        if (span) {
          this.reference = span
        }

        const query = this.queryBuilder?.(match, matchAfter)
        this.onChange(query ?? '', !!this.reference)

        this.handleDismiss = dismiss
        this.handleSubmit = deleteMatch

        setTimeout(() => {
          this.host.requestUpdate()
        }, 0)
      },
      onDeactivate: () => {
        this.reference = null
        this.host.requestUpdate()

        this.onChange('', false)
        this.handleDismiss = null
        this.handleSubmit = null
      },
    })

    this.cleanup = editor.use(extension)
  }
}