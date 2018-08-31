<template>
  <div class="home">
    <MainGame msg="Welcome to Battle Cards" />
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