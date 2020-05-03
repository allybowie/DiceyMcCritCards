<template>
  <div id="app">
    <div class="critHitContainer">
      <p class="hitTitle">Critical Hit</p>
      <div class="leftButtonContainer">
      <p v-on:click="drawCriticalHitCard" class="draw">Draw Card</p>
      <p v-on:click="setCritHitDeck" class="shuffle">Shuffle Deck</p>
      <p class="cardCount">Cards Left: {{currentHitDeck().length}}</p>
      </div>
      <div class="cardContainer">
      <Critical-Hit-Card :card="topCritHitCard" />
      </div>
    </div>
    
    
      <div class="critFumbleContainer">
              <p class="FumbleTitle">Critical Fumble</p>

        <div class="rightButtonContainer">
          <p v-on:click="drawCriticalFumbleCard" class="draw">Draw Card</p>
      <p v-on:click="setCritFumbleDeck" class="shuffle">Shuffle Deck</p>
      <p class="cardCount">Cards Left: {{currentFumbleDeck().length}}</p>
        </div>
        <div class="cardContainer">
          <Critical-Fumble-Card :card="topCritFumbleCard"/>
        </div>
      </div>
    
  </div>
</template>

<script>
import CriticalFumbleCard from "./components/CritFumbleCard/CritFumbleCard.vue"
import CriticalHitCard from "./components/CritHitCard/CritHitCard.vue"
import CriticalHitDeck from "./data/CriticalHitDeck.json"
import CriticalFumbleDeck from "./data/CriticalFumbleDeck.json"

export default {
  name: 'App',
  components: {
    CriticalFumbleCard,
    CriticalHitCard
  },
  data() {
    return {
    hitDeckShuffled: false,
    critHitCards: [],
    critFumbleCards: [],
    currentCritHitCard: {},
    currentCritFumbleCard: {}
    }
  },
  computed: {
    topCritHitCard() {
      return this.currentCritHitCard
    },
    topCritFumbleCard() {
      return this.currentCritFumbleCard
    }
  },
  mounted() {
    this.setData()
    this.drawCriticalHitCard()
    this.drawCriticalFumbleCard()

  },
  methods: {
    setData() {
      this.setCritHitDeck()
      this.setCritFumbleDeck()
    },
    setCritHitDeck() {
      const newHitCards = CriticalHitDeck.Cards
      
      this.critHitCards = [...newHitCards]
      this.hitDeckShuffled = true
    },
    setCritFumbleDeck() {
      const newFumbleCards = CriticalFumbleDeck.Cards

      this.critFumbleCards = [...newFumbleCards]
    },
    currentHitDeck() {
      return this.critHitCards
    },
    currentFumbleDeck() {
      return this.critFumbleCards
    },
    drawCriticalHitCard() {
            this.hitDeckShuffled = false



            if(this.currentHitDeck().length === 0) {
              this.setCritHitDeck()

              const number = Math.floor(Math.random() * this.critHitCards.length);
              this.currentCritHitCard = this.critHitCards.splice(number, 1)[0]

            } else {
                    const number = Math.floor(Math.random() * this.critHitCards.length)

              this.currentCritHitCard = this.critHitCards.splice(number, 1)[0]
            }


    },
    shuffleHitCards() {
      this.critHitCards = CriticalHitDeck.Cards
    },
    drawCriticalFumbleCard() {
            if(this.currentFumbleDeck().length === 0) {
              this.setCritFumbleDeck()

              const number = Math.floor(Math.random() * this.critFumbleCards.length);
              this.currentCritFumbleCard = this.critFumbleCards.splice(number, 1)[0]

            } else {
                    const number = Math.floor(Math.random() * this.critFumbleCards.length)

              this.currentCritFumbleCard = this.critFumbleCards.splice(number, 1)[0]
            }
    },
    shuffleFumbleCards() {
      this.critFumbleCards = CriticalFumbleDeck.Cards
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');

* {
margin: 0;
padding: 0;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  width: 100%;
  padding: 0
}

.hitTitle {
  font-size: 36px;
  font-family: 'Oswald', sans-serif;
  width: 50%;
  margin-left: 15%
}

.FumbleTitle {
  font-size: 36px;
  font-family: 'Oswald', sans-serif;
  width: 50%;
  margin-left: 15%;
}

.critHitContainer {
  width: 40%;
  margin-left: 15%;
  display: flex;
  flex-direction: column;
}

.critFumbleContainer {
  width: 40%;
  /* margin-right: 5%; */
  display: flex;
  flex-direction: column;
}

.draw {
  width: 20%;
  cursor: pointer;
  background: darkkhaki;
}

.shuffle {
  width: 20%;
  cursor: pointer;
  background: darkkhaki;
}

.alert {
  width: 20%;
}

.cardCount {
  width: 20%
}

.cardContainer {
  height: 600px;
  margin-top: 2%;
}

.leftButtonContainer {
  width: 60%;
  margin-left: 12%;
  margin-top: 2%;
  display: flex;
  justify-content: space-between;
}

.rightButtonContainer {
  width: 60%;
  margin-left: 12%;
  margin-top: 2%;
  display: flex;
  justify-content: space-between;
}
</style>
