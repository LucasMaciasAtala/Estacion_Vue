<template>
  <div>
    <b-navbar toggleable="lg" type="light" class="topbar" toggle-class="text-dark">
      <b-navbar-brand to="/">Inicio</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/News" >Noticias</b-nav-item>
          <b-nav-item to="/Contact">Contacto</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div id="weatherwidget-io">
      <link
        class="weatherwidget-io"
        href="https://forecast7.com/es/n32d76n64d34/alcira/"
        data-label_1="ALCIRA GIGENA"
        data-label_2="CLIMA"
        data-theme="marine"
        data-font="Roboto Slab"
        data-icons="Iconvault"
     />
    </div>
  </div>
</template>

<script>
export default {
   mounted() {
    let d = document;
    let s = "script";
    let id = "weatherwidget-io-js";
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
      js = d.createElement(s);
      js.id = id;
      js.src = "https://weatherwidget.io/js/widget.min.js";
      fjs.parentNode.insertBefore(js, fjs);
    }
  }
}
</script>

<style scoped>
.topbar {
  background-image: linear-gradient(to left, rgba(255,0,0,0), #1f567c);
}

#nav-collapse {

}
</style>