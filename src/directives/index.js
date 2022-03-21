import permission from "./modules/permission";
import copy from "./modules/copy";
import debounce from "./modules/debounce";
const directives = {
    permission,
    copy,
    debounce
}
export default {
    install(Vue) {
        Object.keys(directives).forEach((key) => {
            Vue.directive(key, directives[key])
        })
    },
}