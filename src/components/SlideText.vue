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
  width: 30vw;
  text-align: center;
  word-wrap: break-word;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-shadow: 1px 1px 0 grey, 1px 2px 0 grey, 1px 3px 0 grey, 1px 4px 0 grey,
    1px 5px 0 grey, 1px 6px 0 grey, 1px 7px 0 grey, 1px 8px 0 grey,
    5px 13px 15px black;
    animation: showup 4s infinite;
  
}


</style>