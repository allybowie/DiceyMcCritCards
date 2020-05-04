<template>
    <div class="container">
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
/* @media (max-width: 1124px) {

    * {
margin: 0;
padding: 0;
}

    .container {
        margin-left: 0px;
        max-width: 300px;

    }
} */
* {
margin: 0;
padding: 0;
}




.container {
    min-height: 80px;
    height: fit-content;
    width: 300px;
      /* border: 3px solid black; */


    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: space-evenly; */
}

</style>