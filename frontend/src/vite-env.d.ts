/// <reference types="vite/client" />

interface ImportMetaEnv {
    LANG_SMITH_URL: string,
    GOOGLE_SHEETS_URL: string,
    DIGEST_TEMPLATE_EDIT_URL: string,
}
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
