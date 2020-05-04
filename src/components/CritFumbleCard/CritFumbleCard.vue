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
    min-height: 80px;
    height: fit-content;
    width: 300px

  
}

</style>