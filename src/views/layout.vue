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
        <Sider hide-trigger :style="{ background: '#fff' }">
          <Menu
            active-name="1-2"
            theme="light"
            width="auto"
            :open-names="['1']"
          >
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                Item 1
              </template>
              <MenuItem name="1-1" @click="onccc">Option 1</MenuItem>
              <MenuItem name="1-2">Option 2</MenuItem>
              <MenuItem name="1-3">Option 3</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                Item 2
              </template>
              <MenuItem name="2-1">Option 1</MenuItem>
              <MenuItem name="2-2">Option 2</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                Item 3
              </template>
              <MenuItem name="3-1">Option 1</MenuItem>
              <MenuItem name="3-2">Option 2</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{ padding: '0 24px 24px' }">
          <Breadcrumb :style="{ margin: '24px 0' }">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Card
            :style="{
              padding: '24px',
              minHeight: '280px',
              background: '#fff',
              flex: 'auto',
            }"
          >
            <Content> <router-view></router-view></Content>
          </Card>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  name: "layout",
  data: () => ({}),
  methods: {
    onccc() {
      console.log(111);
      this.$router.push("../views/components/home.vue");
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
</style>