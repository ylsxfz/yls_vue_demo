/**
 * 添加按钮，防止重复提交
 *
 * main.js引入：// import preventDuplicateClick from './utils/prevent-duplicate-clicks'
 * <v-button>: //<el-button v-preventDuplicateClick>  </el-button>
 */
// import Vue from 'vue'
// // 在vue上挂载一个指令 preventDuplicateClick
// const preventDuplicateClick = Vue.directive('preventDuplicateClick', {
//   inserted: function(el, binding) {
//     el.addEventListener('click', () => {
//       // if (!el.disabled) {
//       //   el.disabled = true
//       //   setTimeout(() => {
//       //     el.disabled = false
//       //   }, binding.value || 2000)
//       //   //binding.value可以自行设置。如果设置了则跟着设置的时间走
//       //   //例如：v-preventDuplicateClick='500'
//       // }

//     })
//   }
// });


// export {
//   preventDuplicateClick
// }
