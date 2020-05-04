<template>
  <div id="app" >
    <div v-bind:style="[(windowWidth < 800) ? critContainerMobile : critHitContainer]">
      <p class="hitTitle">Critical Hit</p>
      <div class="leftButtonContainer">
      <p v-on:click="drawCriticalHitCard" class="draw">Draw Card</p>
      <p class="cardCount">Cards Left: {{currentHitDeck().length}}</p>
      <p v-on:click="setCritHitDeck" class="shuffle">Shuffle Deck</p>
      </div>
      <div class="cardContainer" ref="cardRef">
      <Critical-Hit-Card :card="topCritHitCard" />
      </div>
    </div>
    
    
      <div v-bind:style="[(windowWidth < 800) ? critContainerMobile : critFumbleContainer]">
              <p class="FumbleTitle">Critical Fumble</p>

        <div class="rightButtonContainer">
          <p v-on:click="drawCriticalFumbleCard" class="draw">Draw Card</p>
      <p class="cardCount">Cards Left: {{currentFumbleDeck().length}}</p>
      <p v-on:click="setCritFumbleDeck" class="shuffle">Shuffle Deck</p>
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
    currentCritFumbleCard: {},
    windowWidth: 0
    }
  },
  computed: {
    topCritHitCard() {
      return this.currentCritHitCard
    },
    topCritFumbleCard() {
      return this.currentCritFumbleCard
    },
    appStyle() {
      const width = window.innerWidt/30
      return {
        "margin-left": width.toString() + "px"
      }
    },
    critContainerMobile() {
      const margin2 = ((this.windowWidth - this.cardWidth)/100)
      // const margin = (this.windowWidth/100).toString() + "px"


      return {
  "width": "fit-content",
  "margin-left": margin2.toString() + "px",
  "display": "flex",
  "flex-direction": "column"
}
    },
    cardContainerMobile() {
      return {
  "height": "600px",
  "margin-top": "2%",
  "margin-left": "5%"
}
    }
  },
  mounted() {
    this.setData()
    this.drawCriticalHitCard()
    this.drawCriticalFumbleCard()

    window.addEventListener("resize", this.onResize)

  },
  methods: {
    onResize() {
      this.windowWidth = window.screen.availWidth
      this.cardWidth = this.$refs.cardRef.offsetWidth
    },
    setData() {
      this.windowWidth = window.screen.availWidth
      this.cardWidth = this.$refs.cardRef.offsetWidth

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
  justify-content: space-evenly;
  width: 100%;
  padding: 0
}

.hitTitle {
  font-size: 36px;
  font-family: 'Oswald', sans-serif;
  width: 100%;
}

.FumbleTitle {
  font-size: 36px;
  font-family: 'Oswald', sans-serif;
  width: 100%;
}

.critHitContainer {
  width: 50%;
  display: flex;
  flex-direction: column;
}

.critFumbleContainer {
  width: 50%;
  display: flex;
  flex-direction: column;
}

.draw {
  width: 100px;
  height: 25px;
  cursor: pointer;
  background: darkkhaki;
  border-radius: 5px;
  padding-top: 5px;
  font-size: 14px
}

.shuffle {
  width: 100px;
  height: 25px;
  cursor: pointer;
  background: darkkhaki;
  border-radius: 5px;
    padding-top: 5px;
  font-size: 14px;
  margin-left: 5px
}

.alert {
  width: 20%;
}

.cardCount {
  margin-left: 5px;
  padding-top: 6px;
  width: 90px;
  height: 25px;
  font-size: 12px

}

.cardContainer {
  height: 600px;
  margin-top: 2%;
  width: fit-content;
  margin-left: 2%;
  background: rgb(172, 170, 199);
  border-radius: 10px;
}

.leftButtonContainer {
  width: 90%;
  margin-left: 3%;
  margin-top: 2%;
  display: flex;
  justify-content: space-between;
  padding: 5px
}

.rightButtonContainer {
  width: 90%;
  margin-left: 4%;
  margin-top: 2%;
  display: flex;
  justify-content: space-between;
  padding: 5px
}


/* @media (max-width: 1124px) {
  #app {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .critHitContainer {
    width: 100%;
    margin-left: 12%
  }

 

  .critFumbleContainer {
    width: 100%;
    margin-left: 12%

  }
  
  .leftButtonContainer {
    font-size: 11px;
  }
  .rightButtonContainer {
    font-size: 11px;
  }

  .shuffle {
    margin-left: 10px;
    padding-top: 10px
  }

  .draw {
    margin-left: 10px
  }

  .cardCount {
    margin-left: 10px
  }

  .critFumbleContainer {
    margin-left: 15%
  }
} */

@media (max-width: 800px) {
  #app {
    display: flex;
    flex-direction: column;
    align-items: center
  }
}
</style>
