<template>
  <div id="app" >
    <div class="headerContainer">
      <p class="header">Dicey McCrit Cards</p>
    </div>
    <div class="content">
    <div v-bind:style="[(windowWidth < 800) ? critContainerMobile : critHitContainer]">
      <div class="titleContainer"><p class="hitTitle">Critical Hit</p></div>
      <div class="leftButtonContainer">
      <p v-on:click="drawCriticalHitCard" class="button">Draw Card</p>
      <p class="cardCount">Cards Left: {{currentHitDeck().length}}</p>
      <p v-on:click="setCritHitDeck" class="button">Shuffle Deck</p>
      </div>
      <div class="cardContainer" ref="cardRef">
      <Critical-Hit-Card :card="topCritHitCard" />
      </div>
    </div>
    
    
      <div v-bind:style="[(windowWidth < 800) ? critFumbleContainerMobile : critFumbleContainer]">
              <div class="titleContainer"><p class="FumbleTitle">Critical Fumble</p></div>

        <div class="rightButtonContainer">
          <p v-on:click="drawCriticalFumbleCard" class="button">Draw Card</p>
      <p class="cardCount">Cards Left: {{currentFumbleDeck().length}}</p>
      <p v-on:click="setCritFumbleDeck" class="button">Shuffle Deck</p>
        </div>
        <div class="cardContainer">
          <Critical-Fumble-Card :card="topCritFumbleCard"/>
        </div>
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
    critFumbleContainerMobile() {
      const margin2 = ((this.windowWidth - this.cardWidth)/100)


      return {
        "margin-top": "70px",
  "width": "fit-content",
  "margin-left": margin2.toString() + "px",
  "display": "flex",
  "flex-direction": "column",
  "padding-bottom": "30px",
  "scroll-snap-align": "start"
}
    },
    critContainerMobile() {
      const margin2 = ((this.windowWidth - this.cardWidth)/100)


      return {
  "width": "fit-content",
  "margin-left": margin2.toString() + "px",
  "display": "flex",
  "flex-direction": "column",
    "scroll-snap-align": "start"

}
    },
    cardContainerMobile() {
      return {
  "height": "600px",
  "margin-top": "2%",
  "margin-left": "5%",
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
                    // const number = Math.floor(Math.random() * this.critHitCards.length)

              // this.currentCritHitCard = this.critHitCards.splice(number, 1)[0]
              this.currentCritHitCard = this.critHitCards[11]
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
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  padding: 0
}

.content {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 0;
}

.headerContainer {
  width: 100%;
  font-family: 'Oswald', sans-serif;
  font-size: 56px;
  display: flex;
  justify-content: center;
}

.header {
  width: fit-content;
  border-bottom: 3px solid darkslategrey;
}

.hitTitle {
  font-size: 36px;
  font-family: 'Oswald', sans-serif;
  width: fit-content;
  border-bottom: 3px solid darkslategrey;
}

.FumbleTitle {
  font-size: 36px;
  font-family: 'Oswald', sans-serif;
  width: fit-content;
  border-bottom: 3px solid darkslategrey;
}

.titleContainer {
  width: 100%;
  display: flex;
  justify-content: center;
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

.button {
  width: 100px;
  height: 25px;
  cursor: pointer;
  color: white;
  background: url(http://api.thumbr.it/whitenoise-100x25.png?background=828a54ff&noise=d6d6d6&density=13&opacity=71);
  border-radius: 5px;
    padding-top: 5px;
  font-size: 14px;
  /* margin-left: 5px */
}

.alert {
  width: 20%;
}

.cardCount {
  /* margin-left: 5px; */
  padding-top: 6px;
  width: 90px;
  height: 25px;
  font-size: 12px

}

.cardContainer {
  height: 615px;
  margin-top: 2%;
  width: 320px;
  /* margin-left: 2%; */
  background: url(http://api.thumbr.it/whitenoise-320x600.png?background=1d5c75ff&noise=d6d6d6&density=13&opacity=71);
  border-radius: 10px;
  display: flex;
  justify-content: center;
}

.leftButtonContainer {
  width: 320px;
  /* margin-left: 3%; */
  margin-top: 2%;
  display: flex;
  justify-content: space-evenly;
  padding-top: 5px;
  padding-bottom: 5px

}

.rightButtonContainer {
  width: 320px;
  margin-top: 2%;
  display: flex;
  justify-content: space-evenly;
  padding-top: 5px;
  padding-bottom: 5px
}




@media (max-width: 800px) {
  .content {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    overflow: scroll;
    scroll-snap-type: y mandatory;
  }

  .headerContainer {
    font-size: 48px;
  }

  .FumbleTitle {
      margin-top: 10px;
      border-top: 3px solid darkslategrey;
    }

  @media (max-width: 320px) {
    .headerContainer {
      font-size: 36px
    }

    .header {
      width: 100%
    }
  }
}
</style>
