<template>
  <div>
    <div v-if="!player"></div>
    <div class="player-hand" v-else>
      <h4>Player: {{player.name}}</h4>
      <div class="row content-center">
        <card class="card-size" v-for="hand in player.hand" :card="hand" :visible="true" @click.native="selectedCard(hand.id)" :key="hand.id"></card>
      </div>
    </div>
  </div>
</template>

<script>
  import card from './Card.vue'
  export default {
    name: "PlayersCards",
    data() {
      return {};
    },
    computed: {
      player() {
        if (this.$store.state.game)
          return this.$store.state.game.players[0]
      }
    },
    components: {
      card
    },
    methods: {
      selectedCard(cardId) {
        this.$store.dispatch('updatePlayerCard', { playerId: this.player.id, playerCardId: cardId })
        console.log(cardId)
      }
    }
  };
</script>

<style>
  .content-center {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .selectedCard {
    background-color: gray;
    margin: 1%;
    border: 2px solid blue;
    color: white;
  }
</style>