<template>
  <div class="container-fluid pl-0">
    <div class="footer">
      <p class="footerText">
        @ {{ new Date().getFullYear() }} {{ text }}
      </p>
    </div>
  </div>
</template>
\<script>
export default {
  data() {
    return {
      text: 'Estacion de Servicio Francisco Macias - Todos los derechos reservados'
    }
  }
}
</script>
<style scoped>
.footer {
  position: fixed;
  bottom: 0;  
  width: 100%;
  padding-left: 2vw;
  padding-top: 1vh;
  background-color: rgba(8, 61, 111, 0.994);
}

.footerText {
   animation: showup 8s ;
   color: white;
}

@keyframes showup {
  from{
    margin-left:-800px;
  }
  to {
    margin-left:0px;
  }
 
}

@media screen and (max-width: 1024px) {
  .footer {
    display: none;
  }
}
</style>