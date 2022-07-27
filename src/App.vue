<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
.ellipseText {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
