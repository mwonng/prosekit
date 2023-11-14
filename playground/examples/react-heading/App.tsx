import 'prosekit/core/style.css'

import { createEditor } from 'prosekit/core'
import { ProseKit } from 'prosekit/react'
import { useMemo } from 'react'

import Toolbar from './Toolbar'
import { defineExtension } from './extension'

export default function App() {
  const editor = useMemo(() => {
    return createEditor({ extension: defineExtension() })
  }, [])

  return (
    <ProseKit editor={editor}>
      <div className="EDITOR_VIEWPORT">
        <div className="EDITOR_DOCUMENT">
          <Toolbar />
          <div ref={editor.mount} className="EDITOR_CONTENT"></div>
        </div>
      </div>
    </ProseKit>
  )
}
