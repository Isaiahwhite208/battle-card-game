<template>
  <div>
    <div class="loading" v-if="!enemy"></div>
    <div class="enemy-hand" v-else>
      <div class="row content-center">
        <card class="card-size" v-for="hand in enemy.hand" :card="hand" :visible="hand.visible" @click.native="selectCard(hand.id)"
          :key="hand.id"></card>
        <h4>Enemy: {{enemy.name}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
  import card from "./Card.vue";

  export default {
    name: "OpponentsHand",
    data() {
      return {};
    },
    computed: {
      enemy() {
        if (this.$store.state.game) return this.$store.state.game.players[1];
      }
    },
    components: {
      card
    },
    methods: {
      selectCard(cardId) {
        this.$store.dispatch('updateEnemyCard', { opponentId: this.enemy.id, opponentCardId: cardId })
        console.log(cardId);
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

  .selectCard {
    background-color: gray;
    margin: 1%;
    border: 2px solid red;
    color: white;
  }
</style>