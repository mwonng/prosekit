import { CommandEmpty } from 'prosekit/react/components/command-empty'
import { CommandItem } from 'prosekit/react/components/command-item'
import { CommandList } from 'prosekit/react/components/command-list'
import { CommandPopover } from 'prosekit/react/components/command-popover'
import './slash-menu.css'

import { useNoteEditor } from './use-note-editor'

export default function SlashMenu() {
  const editor = useNoteEditor()

  const handleHeadingInsert = (level: number) => {
    const node = editor.schema.nodes.heading.create({ level })
    editor.commands.insertNode({ node })
  }

  const handleHeadingConvert = (level: number) => {
    const nodeType = editor.schema.nodes.heading
    const attrs = { level }
    editor.commands.setBlockType({ nodeType, attrs })
  }

  return (
    <CommandPopover editor={editor} regex={/\/.*$/iu} regexAfter={/^\S*/}>
      <CommandList editor={editor} className="my-slash-menu">
        <CommandEmpty className="my-slash-menu-item">
          No Command match
        </CommandEmpty>

        <CommandItem
          className="my-slash-menu-item"
          onSelect={() => handleHeadingInsert(1)}
        >
          Insert Heading 1
        </CommandItem>
        <CommandItem
          className="my-slash-menu-item"
          onSelect={() => handleHeadingInsert(2)}
        >
          Insert Heading 2
        </CommandItem>
        <CommandItem
          className="my-slash-menu-item"
          onSelect={() => handleHeadingConvert(1)}
        >
          Turn into Heading 1
        </CommandItem>
        <CommandItem
          className="my-slash-menu-item"
          onSelect={() => handleHeadingConvert(2)}
        >
          Turn into Heading 2
        </CommandItem>
      </CommandList>
    </CommandPopover>
  )
}