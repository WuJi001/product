<template>
  <div class="login">
    <div>我是登录界面</div>
  </div>
</template>

<script>
export default {
  name: "login",
  data: () => ({
    num: 111,
  }),
  created() {
    console.log(this.$route.name);
  },
};
</script>

<style>
</style>