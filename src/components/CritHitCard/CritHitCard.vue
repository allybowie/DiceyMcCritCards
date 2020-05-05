<template>
    <div v-if="card.Shuffled" class="topDeck">
        <p>THE CRITICAL HIT DECK HAS BEEN SHUFFLED</p>
        <p>CLICK 'DRAW CARD' TO BEGIN</p>
        <p>CLICK 'SHUFFLE DECK' TO RESET</p>
        <p>THE DECK WILL AUTOMATICALLY SHUFFLE ONCE YOU HAVE USED ALL OF THE CARDS</p>
        <p>YOU CAN SWITCH BETWEEN DECKS USING THE BUTTONS ABOVE</p>

    </div>
    <div v-else class="container">
        <EffectsCard :info="card.Bludgeoning" :category="'Bludgeoning'"/>
        <EffectsCard :info="card.Piercing" :category="'Piercing'"/>
        <EffectsCard :info="card.Slashing" :category="'Slashing'"/>
        <EffectsCard :info="card.BombOrSpell" :category="'Bomb Or Spell'"/>
        </div>
</template>

<script>
import EffectsCard from "../EffectsCard/EffectsCard.vue"
export default {
    name: "EffectCard",
    Data() {
        return {}
    },
    components: {
        EffectsCard
    },
    props: {
        card: {
            type: Object,
            required: true
        }
    }
}
</script>


<style scoped>

* {
margin: 0;
padding: 0;
}

.topDeck {
    height: 625px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: white;
    padding: 10px;
    font-family: 'Oswald', sans-serif;
    font-weight: 400
}



.container {
    height: 615px;
    display: flex;
    flex-direction: column;
}

</style>