<template>
    <div class="container">
        <div class="nameContainer">
        <p class="name">{{info.Name}}</p>
        <p class="category">{{category}}</p>
        </div>
        <p v-if="info.Damage" class="damage">{{info.Damage}}</p>
        <p v-if="info.Effect" class="effect">{{info.Effect}}</p>
        <p v-else-if="info.CritEffect" class="effect"><span class="critEffect">Crit-Effect: </span>{{info.CritEffect}}</p>
        </div>
</template>

<script>
export default {
    name: "EffectCard",
    Data() {
        return {}
    },
    props: {
        info: {
            type: Object,
            required: true
        },
        category: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');



    * {
margin: 0;
padding: 0;
}


    .container {
        background: url(http://api.thumbr.it/whitenoise-320x200.png?background=f7e497ff&noise=ffffff&density=88&opacity=71);
        font-family: 'Oswald', sans-serif;
        width: 300px;
        height: 146px;
        border-radius: 10px;
        margin-top: 10px;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .nameContainer {
        margin-left: 2%;
        width: 95%;
        display: flex;
        justify-content: space-between;
    }

    .nameContainer div:last-child {
       margin-right: auto;
}

    .name {
        font-size: 24px;
        font-weight: 700;
    }

    .category {
        margin-top: 3%;
        font-size: 16px;
        font-weight: 200;
    }

    .damage {
        margin-top: 0px;
        font-size: 16px;
        margin-left: 2%;
        font-weight: 200;
    }

    .effect {
        margin-top: 0px;
        font-size: 18px;
        margin-left: 2%;
        width: 95%;
        font-weight: 400;
        padding-bottom: 10px;
        padding-right: 30px
    }

    .critEffect {
        font-weight: 600
    }

    
</style>