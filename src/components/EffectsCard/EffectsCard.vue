<template>
    <div class="container">
        <div class="nameContainer">
        <p class="name">{{info.Name}}</p>
        <p class="category">{{category}}</p>
        </div>
        <p v-if="info.Damage" class="damage">{{info.Damage}}</p>
        <p v-if="info.Effect" class="effect">{{info.Effect}}</p>
        <p v-else-if="info.CritEffect" class="effect">{{info.CritEffect}}</p>
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
        background: rgb(236, 219, 197);
        /* width: 100%; */
        font-family: 'Oswald', sans-serif;
        /* margin-left: 10%; */
        width: 300px;
        /* min-width: 350px; */
        border-radius: 10px;
        margin-top: 10px;
        text-align: left
    }

    .nameContainer {
        margin-left: 2%;
        width: 88%;
        /* margin-right */
        margin-bottom: 0px;
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
        margin-top: 2%;
        font-size: 16px;
        font-weight: 200;
    }

    .damage {
        margin-top: 0px;
        font-size: 16px;
        margin-left: 2%;
        font-weight: 200;
        margin-bottom: 0px
    }

    .effect {
        margin-top: 0px;
        font-size: 18px;
        margin-left: 2%;
        font-weight: 400;
        padding-bottom: 10px;
        padding-right: 30px
    }

    @media (max-width: 800px) {
    /* .container {
        margin-left: 0px;
        width: 300px;
        min-width: 295px
    }

    .nameContainer {
        width: 100%
    } */
}
</style>