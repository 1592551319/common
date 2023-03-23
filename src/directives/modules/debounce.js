import { debounce } from 'lodash'

export default {
  inserted: function(el, binding) {
    el.addEventListener(
      'click',
      debounce(() => {
        binding.value()
      }, 500)
    )
    //   },
  },
  // 当传进来的值更新的时候触发
  componentUpdated(el, { value }) {
    el.$value = value
  },
  // 指令与元素解绑的时候，移除事件绑定
  unbind(el) {
    el.removeEventListener('click', el.handler)
  }
}
