<template>
    <section>
        <div class="container">
            <h2 class="text-uppercase text-center">PERFORMANCE NEWS</h2>
            <div class="text-center">
                <img class="p-5" src="../assets/images/divider-xx-red.png" alt="divider">
            </div>
            <div class="my-cards">
                <div class="my-card" v-for="(item, index) in store.performanceNews" :key="index">
                    <div class="image-overlay">
                        <img class="img-fluid" :src="getImagePath(`../assets/images/${item.photo}.jpg`)" :alt="item.title">
                        <div class="overlay d-flex align-items-center justify-content-center"> 
                            <a href="#" class="d-block decoration-none text-white fs-2 m-0 px-3"><i class="fa-solid fa-link-slash"></i></a>
                            <a href="#" class="d-block decoration-none text-white fs-2 m-0 px-3"><i class="fa-solid fa-magnifying-glass"></i></a>
                        </div>
                    </div>
                    <h5 class="pt-4 px-4">{{ item.title }}</h5>
                    <p class="px-4 pb-4">{{ item.paragraf }}</p>
                </div>
            </div>
        </div>
        <div class="my-btn text-uppercase p-2">read all articles</div> 
    </section>
</template>

<script>
import { store } from '../store'
export default {
    name: 'OctaveSection',
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

section {
    padding: 100px 0;
    background-color: $shark;
    div.my-cards{
        display: flex;
        flex-wrap: wrap;
        div.my-card {
            width: calc((100% / 3) - 2rem);
            height: max-content;
            margin: 1rem;
            background-color: $woodsmoke;
            div.image-overlay{
                position: relative;
                cursor: pointer;
                div.overlay {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    width: 100%;
                    height: 100%;
                    background-color: $vibrant;
                    opacity: 0;
                    z-index: 1000;
                    transition: all .3s ease-in-out;
                    &:hover {
                        opacity: 0.7;
                    }

                }
            }
            h5{
                transition: 0.3s;
                cursor: pointer;
                &:hover {
                        color: $vibrant;
                }
            }
            p {
                color: $dove-gray;
            }
        }
    }
    div.my-btn {
        margin-top: 50px;
        width: max-content;
        color: $edward;
        border: 1px solid $edward;
        transition: 1s;

        &:hover {
            color: $white;
            border: 1px solid $white;
            cursor: pointer;
        }
    }
}
</style>