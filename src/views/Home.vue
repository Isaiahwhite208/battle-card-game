<template>
  <div class="home">
    <MainGame msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
  import MainGame from '@/components/MainGame.vue'

  export default {
    name: 'home',
    components: {
      MainGame
    }
  }
</script>