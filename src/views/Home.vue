<template>
  <div class="container-fluid pl-0 pr-0">
    <carousel
      :per-page="1"
      :mouse-drag="true"
      :autoplay="false"
      :autoplayTimeout="5500"
      :loop="true"
      :paginationEnabled="true"
      class="carouselBox"
    >
      <slide v-for="image in Images" :key="image.name" >
        
       <slide-text :text=image.text></slide-text>
        <img
          :src="image.src"
          style="height: 85vh; width: 100%; max-height: 80vw;"
          alt="Background Image"
        />
      
      </slide>
    </carousel>

    <stock-table class="stockTable"></stock-table>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import StockTable from "../components/StockTable.vue";
import SlideText from "../components/SlideText.vue"

export default {
  name: "Home",
  components: {
    StockTable,
    Carousel,
    Slide,
    SlideText
  },
  data() {
    return {
      Images: [
        {
          name: "image1",
          src: require("../../public/images/img1c.png"),
          text:
            "Estación de Servicio Macias\n Brindándole desde siempre la mejor atención",
        },
        {
          name: "image2",
          src: require("../../public/images/img2b.jpg"),
          text: "Contamos con Certificados de Calidad e Hidrocarburos",
        },
        {
          name: "image3",
          src: require("../../public/images/img3_zeke.jpg"),
          text:
            "80 años y 3 generaciones garantizan el mejor servicio",
        },
      ],
    };
  },
};
</script>

<style scoped>

.carouselBox {
  max-width: 100%;
  min-height: 100%;
  height: 90vh;
}

</style>

