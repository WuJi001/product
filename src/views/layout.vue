<template>
  <div class="layout">
    <Layout style="width: 100vw; height: 100vh">
      <Header>
        <div class="layout-logo">
          <img src="../assets/images/logo.png" alt="" />
        </div>
        <div class="layout-nav">
          <div class="ellipseText">尊贵的VVIP</div>
          <span>退出</span>
        </div>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{ background: '#515a6e' }">
          <div
            style="
              margin: 0 auto;
              width: calc(100% - 50px);
              height: 60px;
              color: #fff;
              overflow: hidden;
              line-height: 60px;
              text-align: center;
              font-size: 20px;
            "
          >
            专业管理系统
          </div>
          <Menu
            active-name="1-2"
            accordion
            theme="dark"
            width="auto"
            :open-names="['1']"
          >
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                用户管理
              </template>
              <MenuItem name="1-1">Option 1</MenuItem>
              <MenuItem name="1-2">Option 2</MenuItem>
              <MenuItem name="1-3">Option 3</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                角色管理
              </template>
              <MenuItem name="2-1">Option 1</MenuItem>
              <MenuItem name="2-2">Option 2</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                岗位管理
              </template>
              <MenuItem name="3-1">Option 1</MenuItem>
              <MenuItem name="3-2">Option 2</MenuItem>
            </Submenu>
            <Submenu name="4">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                部门管理
              </template>
              <MenuItem name="4-1">Option 1</MenuItem>
              <MenuItem name="4-2">Option 2</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{ padding: '0 24px 24px' }">
          <Breadcrumb :style="{ margin: '24px 0' }">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>{{ route_text }}</BreadcrumbItem>
          </Breadcrumb>
          <Card
            :style="{
              padding: '24px',
              minHeight: '280px',
              background: '#fff',
              flex: 'auto',
            }"
          >
            <Content><router-view></router-view></Content>
          </Card>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  name: "layout",
  data: () => ({
    route_text: "",
  }),
  created() {},
  methods: {
    route_link() {
      this.tag.push({
        url: this.$route.path,
      });
    },
  },
};
</script>

<style scoped>
.ivu-layout-header {
  display: flex;
  justify-content: space-between;
}
.layout-logo {
  height: 100%;
  overflow: hidden;
}
.layout-logo > img {
  margin-top: 2px;
  width: 120px;
  height: 60px;
}
.layout-nav {
  width: 122px;
  color: #fff;
  line-height: 64px;
  display: flex;
}
.layout-nav > div {
  margin-right: 20px;
}
.ivu-layout-sider {
  border-top: 1px solid #ccc;
}
.ivu-layout-sider-children > ul {
  margin-top: 15px;
}
</style>