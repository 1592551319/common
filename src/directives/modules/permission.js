import store from '../../store'
const permission = {
  inserted: function(el, binding) {
    const permission = binding.value
    const accessList = store.state.accessList || []
    if (permission) {
      const hasPermission = accessList.includes(permission)
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  }
}
export default permission
