const context = require.context('./',true,/\.vue$/)
const install = function (Vue){
  context.keys().forEach(key =>{
    const component = context(key).default
    Vue.component(component.name,component)
  })
}
export default {
  install
}
