import { defineClientConfig } from '@vuepress/client'
import { Mermaid } from './mermaid'

export default defineClientConfig(({ app }) => {
  app.component('Mermaid', Mermaid);
});
