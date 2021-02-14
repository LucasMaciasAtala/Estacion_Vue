<template>
  <div>
    <app-header></app-header>
    <app-footer></app-footer>
  </div>

</template>

<script>
import AppHeader from "../components/layout/AppHeader.vue";
import AppFooter from "../components/layout/AppFooter.vue";

export default {
  name: "Home",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
