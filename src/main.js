import Vue from "vue";
import antd from "ant-design-vue";  // 提供的组件和功能
import ref from "vue-ref"; //ref 是 Vue 中用于创建响应式数据的工具，通常用于声明一个可变的状态变量。
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;

Vue.use(antd);
Vue.use(ref, { name: "ant-ref" });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
