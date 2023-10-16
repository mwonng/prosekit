import { defineBasicExtension } from 'prosekit/basic'
import { union } from 'prosekit/core'
import { defineMention } from 'prosekit/extensions/mention'
import { definePlaceholder } from 'prosekit/extensions/placeholder'

export function defineExampleExtension() {
  return union([
    defineBasicExtension(),
    definePlaceholder({ placeholder: 'Type @ to metion someone...' }),
    defineMention(),
  ])
}

export type ExampleExtension = ReturnType<typeof defineExampleExtension>
