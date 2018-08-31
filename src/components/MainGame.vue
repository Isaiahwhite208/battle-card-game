<template>
  <div>
    <h1>Please input name</h1>
    <form @submit.prevent="startGame($event)">
      <input type="text" name="name" autocomplete="off" placeholder="Competitor"><br>
      <button class="new-game-button" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'MainGame',
    props: {
      msg: String
    },
    methods: {
      startGame(event) {
        this.$store.dispatch("startGame", event.target.name.value)
      }
    }
  }
</script>

<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }

  a {
    color: #51ff00;
  }

  input[type=text] {
    background: transparent;
    border: none;
    border-bottom: 1px solid #5c5c5c;
    text-align: center;
    color: white;
    width: 25%;
    font-size: 2rem;
  }

  input:focus {
    outline: #5684c0;
  }

  .new-game-button {
    margin-top: 1rem;
    background-color: #070a0e;
    border-radius: 12px;
    border: 2px solid #f6fa06;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
</style>