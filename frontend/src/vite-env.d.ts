/// <reference types="vite/client" />

interface ImportMetaEnv {
    RANKED_NEWS_TABLE_URL: string,
    DIGEST_TEMPLATE_EDIT_URL: string,
}
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
