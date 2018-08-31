<template>
  <div class="home">
    <h2>Welcome to BATTLECARDS!</h2>
    <form @submit.prevent="startGame">
      Player:<input type="text" v-model="newGame.playerName"> Select Deck:<input type="number" min='1' max='4' v-model="newGame.set">
      <button class="begin-btn" type="submit">Good Luck!</button>
    </form>
    <h1 v-if="gameOver">{{game.winner.name ? game.winner.name + ' Wins!' : game.winner}}</h1>
    <enemy/>
    <div>
      <button type="button" class="fight-btn" @click="fight()">Fight</button>
    </div>
    <player/>
  </div>
</template>

<script>
  import Player from '@/components/Player.vue'
  import Enemy from '@/components/Opponent.vue'
  export default {
    name: 'home',
    data() {
      return {
        newGame: {
          playerName: '',
          set: 1
        }
      }
    },
    methods: {
      startGame() {
        this.$store.dispatch("startGame", this.newGame);
      },
      fight() {
        this.$store.dispatch("afterAttack", { fightingCards: this.$store.state.fightingCards, gameId: this.$store.state.game.id })
      }
    },
    components: {
      Player,
      Enemy,
    },
    computed: {
      game() {
        return this.$store.state.game
      },
      gameOver() {
        return this.game && this.game.over
      }
    }
  };
</script>
<style scoped>
  .home {
    background-color: lightgray;
  }

  .begin-btn {
    display: flex;
    margin-top: 1rem;
    background-color: #424242;
    border-radius: 10px;
    border: 1px solid red;
    color: orangered;
    text-align: center;
    display: inline-block;
    font-size: 15px;

  }

  .fight-btn {
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