<template>
  <div class="container">
    <h4 class="title">Productos disponibles</h4>
    <div class="flexgrid">
      <div class="item" v-for="product in Products" :key="product.name">
        <div>
          <p>
            {{ product.name }}
            <img class="stock SVG" v-if="product.stock" :src="stock" alt="Stock"/>
            <img class="nostock SVG" v-else :src="nostock"  alt="No Stock"/>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stock: require("../../public/images/stock.svg"),
      nostock: require("../../public/images/nostock.svg"),
      Products: [
        {
          name: "Infinia",
          stock: true,
        },
        {
          name: "Super",
          stock: true,
        },
        {
          name: "Diesel",
          stock: true,
        },
        {
          name: "Euro Diesel",
          stock: true,
        },
        {
          name: "Claro",
          stock: true,
        },
        {
          name: "Hielo",
          stock: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  padding-bottom: 3em;
  padding-top: 3em;
}

.flexgrid {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}

.title {  
  font-size: 2em;
  text-align: center;
  padding-bottom: 1em;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}

.SVG {
  width: 1em;
  -webkit-filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
  filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
}

.item {
  font-size: 2em;
  flex-shrink: 2;
  padding-left: 1em;
}
</style>