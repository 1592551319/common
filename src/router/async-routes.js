const modulesContext = require.context('./modules', true, /.js$/)
const modulesRouters = modulesContext.keys().reduce((modules, key) => {
  const context = modulesContext(key).default
  return [...modules, ...context]
}, [])
export default [...modulesRouters]
