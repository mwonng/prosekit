import { createContext } from '@lit-labs/context'

export type CommandPopoverContext = {
  active: boolean
  query: string
  handleDismiss: VoidFunction
  handleSubmit: VoidFunction
}

export const commandPopoverContext = createContext<CommandPopoverContext>(
  'prosekit-command-popover-context',
)