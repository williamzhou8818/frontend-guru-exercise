/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// 声明 vue-quill 模块，让 TS 不报错
declare module 'vue-quill' {
  import { DefineComponent } from 'vue';
  const VueQuill: DefineComponent<any, any, any>;
  export { VueQuill };
}
