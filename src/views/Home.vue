<template>
  <div class="container-fluid pl-0 pr-0">
    <carousel
      :per-page="1"
      :mouse-drag="true"
      :autoplay="true"
      :autoplayTimeout="6000"
      :loop="true"
      :centerMode="true"
      :paginationEnabled="false"
      class="carouselBox"
    >
      <slide v-for="image in Images" :key="image.name">
        <img
          :src="image.src"
          style="height: 80vh; width: 100%"
          alt="Background Image"
        />
        <div style="display: absolute;">
          <p class="text"> <slide-text :text=image.text></slide-text>
</p>
          <!-- Q aparezca mas fachero el texto    -->
        </div>
      </slide>
    </carousel>
         
   

    <stock-table class="stockTable"></stock-table>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import StockTable from "../components/StockTable.vue";
import SlideText from "../components/SlideText.vue";

export default {
  name: "Home",
  components: {
    StockTable,
    Carousel,
    Slide,
    SlideText,
  },
  data() {
    return {
      Images: [
        {
          name: "image1",
          src: require("../../public/images/img1.png"),
          text:
            "Estación de Servicio Macias.\n Brindándole desde siempre la mejor atención",
        },
        {
          name: "image2",
          src: require("../../public/images/img2.png"),
          text: "Contamos con los certificados de Calidad X e Y",
        },
        {
          name: "image3",
          src: require("../../public/images/img3.jpg"),
          text:
            "Desde hace mas de 80 años sobreviviendo en este país de mierda",
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
  height: 80vh;
}

/* .stockTable {
    position: relative;
  } */

.text {
  position: absolute;
  font-size: 150%;
  padding: 8px 12px;
  bottom: 8px;
  width: 100%;
  text-align: center;
}
</style>


Todo: Ajustar fotos de carousel (Ver como se ajusta el tamaño)
      Agregar productos y stock sin columnas. buscar forma animada