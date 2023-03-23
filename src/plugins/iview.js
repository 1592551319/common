import Vue from 'vue'
import {
  Button,
  Card,
  Form,
  Input,
  Icon,
  Message,
  Select,
  Option,
  Layout,
  Sider,
  Header,
  Content,
  Menu,
  Submenu,
  MenuItem,
  Tag,
  InputNumber,
  Table,
  Modal,
  Radio,
  RadioGroup,
  ColorPicker,
  Drawer,
  Switch,
  Collapse,
  Panel,
  Tooltip,
  Divider
} from 'view-design'
const components = [
  Divider,
  Tooltip,
  Panel,
  Collapse,
  Button,
  Card,
  Input,
  Icon,
  Select,
  Option,
  Layout,
  Sider,
  Header,
  Content,
  Menu,
  Submenu,
  MenuItem,
  Tag,
  InputNumber,
  Table,
  Modal,
  Radio,
  RadioGroup,
  ColorPicker,
  Drawer,
  Switch
]
const iview = {
  install: function() {
    components.forEach((component) => {
      Vue.component(component.name, component)
    })
    Vue.component('Form', Form)
    Vue.component('FormItem', Form.Item)
    Vue.component('Select', Select)
    Vue.component('Option', Option)
    Vue.prototype.$Message = Message
  }
}
export default iview
