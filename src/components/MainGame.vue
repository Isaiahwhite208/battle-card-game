<template>
  <div>
    <h1>Welcome To Battle Cards</h1>
    <h2>Player's name</h2>
    <form @submit.prevent="startGame($event)">
      <input type="text" name="name" autocomplete="off" placeholder="Player"><br>
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
  input[type=text] {
    display: flex;
    background: transparent;
    border: none;
    border-bottom: 1px solid #5c5c5c;
    text-align: center;
    color: black;
    width: 25%;
    font-size: 2rem;
  }

  input:focus {
    display: flex;
    outline: #5684c0;
  }

  .new-game-button {
    display: flex;
    margin-top: 1rem;
    background-color: #424242;
    border-radius: 10px;
    border: 1px solid red;
    color: orangered;
    padding: 15px;
    text-align: center;
    display: inline-block;
    font-size: 15px;
  }
</style>