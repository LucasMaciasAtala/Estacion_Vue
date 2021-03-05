<template>
  <div>
    <p class="text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: ['text']
  
};
</script>
<style scoped>

/* .text {
    animation: uptodown duration timing-function delay iteration-count direction fill-mode;
}

@keyframes uptodown {
    from {
        margin-top: -800;
    }
    to {
        margin-top: 0;
    }
} */
</style>