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
    mounted() {
        console.log("NAME", this.info)
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

.container {
    min-height: 93px;
    height: fit-content;
    width: 80%
 

    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: space-evenly; */
}

</style>