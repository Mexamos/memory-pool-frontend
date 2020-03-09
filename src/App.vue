<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  font-size: 14px;
  font-family: 'Arial';
}
textarea, input {
  font-family: 'Arial';
}
textarea {
  resize: none;
}
a {
  text-decoration: none;
  color: black;
}
</style>
