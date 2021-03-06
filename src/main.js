import { createApp } from 'vue'
import App from './App.vue'
import Element_Plus from 'element-plus' //引入elment-UI
import 'element-plus/dist/index.css'
import './assets/iconfont/iconfont' //引入iconfont字体图标库
import './assets/iconfont/iconfont.css'
import store from './store' //引入vuex

const app = createApp(App);
app.use(Element_Plus);
app.use(store);
app.mount('#app');
