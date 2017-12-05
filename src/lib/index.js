import vuePayKeyboard from './vue-pay-keyboard.vue' // 导入组件
export default vuePayKeyboard  //导出
//global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vuePayKeyboard', vuePayKeyboard)
}