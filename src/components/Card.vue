<template>
  <div :class="active()" class="card">
    <img :src="card.img" alt="">
    <div class="card-info" v-if="visible">
      <h4>Total HP:{{card.health}}</h4>
      <h4>Attack:{{card.attack}} Defence:{{card.defense}}</h4>
      <div></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    props: ["card", "visible"],

    methods: {
      active() {
        if (this.playerCardId == this.card.id || this.enemyCardId == this.card.id) {
          return "activecard"
        }
      }
    },
    computed: {
      playerCardId() {
        return this.$store.state.fightingCards.playerCardId
      },
      enemyCardId() {
        return this.$store.state.fightingCards.opponentCardId
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .activecard {
    background-color: gray;
    outline-color: white;
    color: white;
  }
</style>