<template>
    <div class="container">
        <EffectsCard :info="card.Melee" :category="'Melee'"/>
        <EffectsCard :info="card.Ranged" :category="'Ranged'"/>
        <EffectsCard :info="card.Unarmed" :category="'Unarmed'"/>
        <EffectsCard :info="card.Spell" :category="'Spell'"/>
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
    /* width: 80% */

    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: space-evenly; */
}

</style>