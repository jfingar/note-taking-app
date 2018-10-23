<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/take-notes">Take Notes</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
  export default {
      mounted: function() {
          let persistedState = window.localStorage.getItem("state");
          if(persistedState) {
              this.$store.commit('loadState', JSON.parse(persistedState));
          }
      }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  background-color: #CCC;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
