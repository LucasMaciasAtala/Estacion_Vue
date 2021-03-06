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

.text {
  position: absolute;
  color: whitesmoke;
  font-size: 220%;
  top: 4em; 
  width: 35vw;
  padding-left: 2em;
  text-align: center;
  word-wrap: break-word;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  animation: shadowMove 3s  infinite alternate;  
}

@keyframes shadowMove {
  from {
     text-shadow:  1px 2px 0 grey,
  }
  to {
     text-shadow: 2px 2px grey;
  }

  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>