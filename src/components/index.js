import Vue from 'vue'

// 注意 有些组件使用异步加载会有影响
Vue.component('sys-icon', () => import('./sys-icon'))
Vue.component('sys-icon-select', () => import('./sys-icon-select'))
Vue.component('sys-icon-svg-select', () => import('./sys-icon-svg-select'))
Vue.component('sys-qull', () => import('./sys-quill'))
Vue.component('sys-ueditor', () => import('./sys-ueditor'))
Vue.component('sys-highlight', () => import('./sys-highlight'))
