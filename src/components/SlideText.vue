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
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap');

.text {
  position: absolute;
  color: whitesmoke;
  font-size: 2.5vw;
  top: 3em; 
  width: 36vw;
  padding-left: 2em;
  text-align: center;
  word-wrap: break-word;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  animation: shadowMove 3s  infinite alternate;  
}

@keyframes shadowMove {
  from {
     text-shadow:  1px 1px 6px grey,
  }
  to {
     text-shadow: 2px 2px 6px grey;
  }

  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media screen and (max-width: 1020px) {
 .text {
   font-size: 3.5vw;
 }
}

@media screen and (max-width: 700px) {
 .text {
   font-size: 25px;
   width: 100%;
   padding: 10%;
 }
}


</style>