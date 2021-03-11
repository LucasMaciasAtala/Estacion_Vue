<template>
  <div class="body-contact">
    <h4 class="text">
      {{ EmailText }}
      <a :href="`mailto:${Email}`">{{ Email }}</a>
    </h4>
    <h4 class="text">
      {{ PhoneText }}
      {{ Phone }}
    </h4>
    <h4 class="text">
      {{ OpenHourText }}
      {{ OpenHour }}
    </h4>
    <div class="container mapouter">
      <div class="gmap_canvas">
        <iframe
          width="100%"
          height="100%"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=YPF%20Service%20Station,%20Alcira,%20Cordoba&t=&z=17&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe
        ><a
          href="https://yt2.org/fr/youtube-to-mp3-ALeKk00qEW0sxByTDSpzaRvl8WxdMAeMytQ1611842368056QMMlSYKLwAsWUsAfLipqwCA2ahUKEwiikKDe5L7uAhVFCuwKHUuFBoYQ8tMDegUAQCSAQCYAQCqAQdnd3Mtd2l6"
        ></a
        ><br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      EmailText: "Envianos un mail a ",
      OpenHourText: "Horario de Atención: ",
      PhoneText: "LLamanos al Teléfono: ",
      Email: "marcelomaciasep@gmail.com",
      OpenHour: "8 a 23 hs",
      Phone: "(0358) 4960327",
    };
  },
};
</script>

<style scoped>

a:hover {
  text-shadow: 2px 2px 4px #FFFFFF !important;
}

.body-contact {
  padding-top: 0.5em;
}

.mapouter {
  position: relative;
  text-align: right;
  height: 45vh;
  width: 40vw;
}

.text {
  text-align: center;
  font-size: 2em;
  text-align: center;
  padding-bottom: 1em;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 100%;
  width: 100%;
}

@media screen and (max-width: 700px) {
  .mapouter {
    position: relative;
    text-align: right;
    height: 40vh;
    width: 100%;
  }

   a, .text {
  font-size: 2vh;  
  text-align: center;
   }
} 

@media screen and (max-width: 310px) {
   .mapouter {
    position: relative;
    text-align: right;
    height: 30vh;
    width: 100%;
  }

  a, .text {
  font-size: 2vh;
}
.gmap_canvas {
  height: 80%;
  
}
} 
</style>
