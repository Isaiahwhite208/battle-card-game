<template>
  <div class="game">
    <div class="opponent">
      <div class="opponentCards card" v-for="(opponentCard, index) in activeGame.players[1].hand" :key="index" @click='opponentCardId = opponentCard.id'>
        <div v-bind:class="{'card-hide': !opponentCard.visible}">
          <div class="card-info">
            <div class="card-stats">
              <p>
                Attack: {{opponentCard.attack}}
              </p>
            </div>
            <div class="card-stats">
              <p>
                Defence: {{opponentCard.defense}}
              </p>
            </div>
            <div class="card-stats">
              <p>
                Current HP: {{opponentCard.health}}
              </p>
            </div>
          </div>
          <div>
            <img :src=opponentCard.img alt="">
          </div>
        </div>
      </div>
    </div>
    <div>
      <button @click="fight()">Fight</button>
    </div>
    <div class="player">
      <div class="playerCards card" v-for="(playerCard, index) in activeGame.players[0].hand" :key="index" @click='playerCardId = playerCard.id'>
        <div class="card-info">
          <div class="card-stats">
            <p>
              Attack: {{playerCard.attack}}
            </p>
          </div>
          <div class="card-stats">
            <p>
              Defence: {{playerCard.defense}}
            </p>
          </div>
          <div class="card-stats">
            <p>
              Current HP: {{playerCard.health}}
            </p>
          </div>
        </div>
        <div>
          <img :src=playerCard.img alt="">
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Game',
    data() {
      return {
        "playerId": this.$store.state.game.players[0].id,
        "playerCardId": "",
        "opponentId": this.$store.state.game.players[1].id,
        "opponentCardId": ""
      }
    },
    mounted() {
      let id = this.$route.params.id;
      if (!this.activeGame.id) {
        this.$store.dispatch("getGame", id);
      }
    },
    computed: {
      activeGame() {
        return this.$store.state.game;
      }
    },
    methods: {
      fight() {
        let fightObj = {
          "playerId": this.$store.state.game.players[0].id,
          "playerCardId": this.playerCardId,
          "opponentId": this.$store.state.game.players[1].id,
          "opponentCardId": this.opponentCardId,
        }
        console.log(fightObj)
        this.$store.dispatch("fight", fightObj)
      }
    }
  };
</script>

<style>
  .player {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1%;
  }

  .opponent {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 1%;
  }

  .card {
    flex-direction: column;
    justify-content: space-between;
    margin: 1%;
    border: 2px solid gray;
    color: black
  }

  .card-stats {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10%;
  }

  img {
    display: flex;
    justify-content: center;
    max-width: 70%;
    height: auto;
  }

  .card-hide {
    visibility: hidden;
  }

  .card-show {
    visibility: visible;
  }

  .game {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>