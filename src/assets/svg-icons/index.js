import Vue from 'vue'

const requireAll = requireContext => requireContext.keys().map(requireContext)
console.log(requireAll)
const req = require.context('./icons', false, /\.svg$/)
console.log(req)
const iconMap = requireAll(req)
// Vue.prototype.$IconSvg = iconMap.map(e => e.default.id.slice(3))
 Vue.prototype.$IconSvg = iconMap
