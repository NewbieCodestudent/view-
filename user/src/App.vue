<template>
  <div>
    <Header id="header"></Header>
    <dvi id="body">
      <router-view/>
    </dvi>
    <Footer id="footer"></Footer>
  </div>
</template>
<script>
import Header from './layout/Header.vue'
import Footer from './layout/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
}
a {
    cursor: pointer;
    text-decoration: none;
    color: black;
}
#body {
    display: flex;
    justify-content: center;
    padding: 12px;
}
#body::-webkit-scrollbar {
    display: none;
}
/* footer */
#footer {
    background-color: rgba(0, 0, 0, 0.164);
    height: 200px;
}
</style>
