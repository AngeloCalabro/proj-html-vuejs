<template>
    <section class="container">
        <h2 class="text-uppercase text-center">Real World Results</h2>
        <div class="p-2 text-center">
            <img src="../assets/images/divider-xx-red.png" alt="divider">
        </div>
        <div class="row">
            <div class="col-lg-6 col-sm-12" v-for="(person, index) in store.people" :key="index">
                <div class="my-card d-flex" >
                    <img class="img-fluid" :src="getImagePath(`../assets/images/${person.photo}.jpg`)" :alt="person.name">
                    <div class="ps-4">
                        <p><em>{{person.text}}</em></p>
                        <span class="fw-bold">- {{person.name}}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../store'
export default {
    name: 'FourthSection',
    data() {
        return {
            store,
        }
    },
    methods: {
        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
@use '../assets/style/partials/mixins' as *;
section{
    padding: 100px 0;
    div.my-card{
        margin: 1rem;
        padding: 2rem;
        background-color: $woodsmoke;
    }
}
</style>