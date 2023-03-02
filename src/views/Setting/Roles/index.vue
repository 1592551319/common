<template>
  <div class="roles">
    <Flexbox button>
      <!-- <Select :placeholder="'搜索角色名'" style="width: 150px">
        <Option
          v-for="roles in rolesList"
          :key="roles.id"
          :value="roles.id"
          :label="roles.name"
        />
      </Select> -->
      <Button slot="button" @click="handleCreateRoles">创建角色</Button>
    </Flexbox>
    <Table :columns="columns1" :data="rolesList"></Table>

    <Modal v-model="show" title="角色管理">
      <Form>
        <FormItem label="角色名称">
          <Input placeholder="请输入角色名称" />
        </FormItem>
        <FormItem label="角色名称">
          <Input placeholder="请输入角色名称" />
        </FormItem>
        <FormItem label="角色名称">
          <Input placeholder="请输入角色名称" />
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Flexbox from "@/components/FlexBox.vue";
export default {
  components: {
    Flexbox,
  },
  data() {
    return {
      show: false,
      columns1: [
        {
          title: "角色名称",
          key: "name",
        },
        {
          title: "状态",
          key: "status",
        },
        {
          title: "操作",
          key: "address",
        },
      ],
      data1: [
        {
          name: "测试专用角色（勿动）",
          status: 18,
        },
        {
          name: "开发专用角色（勿动）",
          status: 18,
        },
        {
          name: "产品专用角色（勿动）",
          status: 18,
        },
      ],
    };
  },
  mounted() {},
  computed: {
    ...mapGetters(["rolesList", "tagViews"]),
  },
  methods: {
    ...mapMutations(["ADD_ROLES_LIST"]),
    handleCreateRoles() {
      this.show = true;
      console.log(this.rolesList, "rolesList");
      this.ADD_ROLES_LIST({
        id: 1,
        name: "超级管理员",
        status: 1,
        tips: "超级管理员最屌哦",
      });
    },
  },
};
</script>

<style></style>
