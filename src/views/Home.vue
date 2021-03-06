<template>
  <div class="container-fluid pl-0 pr-0">
    <carousel
      :per-page="1"
      :mouse-drag="false"
      :autoplay="true"
      :autoplayTimeout="5500"
      :loop="true"
      :centerMode="true"
      :paginationEnabled="true"
      class="carouselBox"
    >
      <slide v-for="image in Images" :key="image.name">
       <slide-text :text=image.text></slide-text>
        <img
          :src="image.src"
          style="height: 80vh; width: 100%"
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
          src: require("../../public/images/img1.png"),
          text:
            "Estación de Servicio Macias\n Brindándole desde siempre la mejor atención",
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

</style>

