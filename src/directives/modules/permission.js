import store from "../../store";
const permission = {
    inserted: function (el, binding) {
        let permission = binding.value
        const accessList = store.state.accessList || []
        if (permission) {
            let hasPermission = accessList.includes(permission)
            if (!hasPermission) {
                el.parentNode && el.parentNode.removeChild(el)
            }
        }
    },
}
export default permission