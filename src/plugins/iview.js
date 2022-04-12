import Vue from "vue";
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
} from "view-design";
const components = [
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
];
const iview = {
  install: function () {
    components.forEach((component) => {
      Vue.component(component.name, component);
    });
    Vue.component("Form", Form);
    Vue.component("FormItem", Form.Item);
    Vue.prototype.$Message = Message;
  },
};
export default iview;
