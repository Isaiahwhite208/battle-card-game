<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  #nav {
    padding: 20px;
    background-color: rgb(48, 48, 48);
  }

  #nav a {
    font-weight: bold;
    background-color: rgb(48, 48, 48);
    color: rgb(0, 140, 255);
  }

  #nav a.router-link-exact-active {
    background-color: rgb(48, 48, 48);
    color: #ffffff;
  }
</style>