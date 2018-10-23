<template>
  <div>
    Welcome to the Note Taking application. This "Home" page really just exists to demo vue routing capability! Go ahead and proceed to <router-link to="/take-notes">Take Notes</router-link> page. Thanks!
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>


<style scoped>
  div {
    margin: 15px auto;
    width: 500px;
    text-align: left;
  }
</style>