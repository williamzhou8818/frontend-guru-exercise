import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';

// 引入 Element Plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from '@/router';

// 导入 VueQuill
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const app = createApp(App);
app.use(createPinia());
app.use(router); // ✅ 挂载路由
app.use(ElementPlus);
// 全局注册 VueQuill
app.component('QuillEditor', QuillEditor);
app.mount('#app');
