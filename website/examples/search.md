<!-- This file is generated by gen-example-previews.ts -->

<script setup>
import { ExamplePreview } from '@/.vitepress/components/example-preview'
import { FrameworkCodeBlock } from '@/.vitepress/components/framework-code-block'
import { useRoute } from 'vitepress'
const { path } = useRoute()
</script>

<ExamplePreview :defaultShowCode="path.startsWith('/examples/')" name="search" >

<template v-slot:react>

::: code-group

<<< @/../playground/examples/react/search/editor.tsx
<<< @/../playground/examples/react/search/extension.ts
<<< @/../playground/examples/react/search/search.tsx
<<< @/../playground/examples/react/search/button.tsx

:::

</template>

</ExamplePreview>
