import { useEditor } from 'prosekit/react'
import {
  AutocompleteEmpty,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopover,
} from 'prosekit/react/autocomplete'

import type { EditorExtension } from './extension'
import { users } from './user-data'

export default function UserMenu() {
  const editor = useEditor<EditorExtension>()

  const handleUserInsert = (id: number, username: string) => {
    editor.commands.insertMention({
      id: id.toString(),
      value: '@' + username,
      kind: 'user',
    })
    editor.commands.insertText({ text: ' ' })
  }

  return (
    <AutocompletePopover regex={/@\w*$/} className="AUTOCOMPLETE_MENU">
      <AutocompleteList>
        <AutocompleteEmpty className="AUTOCOMPLETE_MENU_ITEM">
          No User match
        </AutocompleteEmpty>

        {users.map((user) => (
          <AutocompleteItem
            key={user.id}
            className="AUTOCOMPLETE_MENU_ITEM"
            onSelect={() => handleUserInsert(user.id, user.name)}
          >
            {user.name}
          </AutocompleteItem>
        ))}
      </AutocompleteList>
    </AutocompletePopover>
  )
}
