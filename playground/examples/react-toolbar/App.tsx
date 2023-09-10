import 'prosekit/basic/style.css'
import 'prosekit/extensions/placeholder/style.css'

import { createEditor } from 'prosekit/core'
import { ProseKit } from 'prosekit/react'
import { useMemo } from 'react'

import Toolbar from './Toolbar'
import { addExampleExtension } from './extension'

export default function App() {
  const editor = useMemo(() => {
    const extension = addExampleExtension()
    return createEditor({ extension })
  }, [])

  return (
    <ProseKit editor={editor}>
      <div ref={editor.mount} className="EDITOR_CONTENT"></div>
      <Toolbar />
    </ProseKit>
  )
}