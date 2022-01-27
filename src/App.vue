<template>
  <div>
    <div class="center">
      <a href="/">Using Emit</a> |
      <a href="/refs">Using Refs</a>
    </div>
    <div id="app">
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.center {
  text-align: center;
}

.mb-3 {
  margin-bottom: 24px;
}

.pr-2 {
  padding-right: 16px;
}
</style>
