<template>
  <div class="background">
    <div>
      <app-header></app-header>
      <router-view class="view" />
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/layout/AppHeader";
import AppFooter from "./components/layout/AppFooter";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style scoped>
@import "./styles/App.css";

</style>