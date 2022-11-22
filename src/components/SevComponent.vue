<template>
    <section>
        <div class="container">
            <h2 class="text-uppercase text-center">MEET OUR TRAINERS</h2>
            <div class="text-center">
                <img class="p-5" src="../assets/images/divider-xx-red.png" alt="divider">
            </div>
            <div class="row g-0">
                <div class="my-cards col-lg-4 col-md-6 col-sm-12" v-for="(item, index) in store.trainers" :key="index">
                    <img class="img-fluid image-shadow" :src="getImagePath(`../assets/images/${item.photo}.jpg`)"
                        :alt="item.name">
                    <h5 class="pt-4 px-4">{{item.name}}</h5>
                    <h5 class="pb-4 px-4">{{item.job}}</h5>
                    <p class="px-4">{{item.text}}</p>
                    <div class="p-4">
                        <span><i class="icon mx-1 fa-brands fa-facebook-f"></i></span>
                        <span><i class="icon mx-1 fa-brands fa-twitter"></i></span>
                        <span><i class="icon mx-1 fa-brands fa-instagram"></i></span>
                    </div>
                </div>
            </div>
            <div class="my-btn text-uppercase p-2">view all trainers</div>
        </div>
    </section>
    <div class="position-relative">
        <div class="divider-candy-wood"></div>
    </div>
</template>

<script>
import {store} from '../store'
    export default {
        name: 'SevComponent',
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
    background-color: $woodsmoke;
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
    div.my-cards{
        width: calc((100% / 3) - 2rem);
        background-color: $shark;
        margin: 1rem;
        img {
                &.image-shadow {
                    transition: 1s;
                    cursor: pointer;
        
                    &:hover {
                        scale: 1.1;
                        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
                    }
                }
            }
        
            p {
                color: $dove-gray;
                line-height: 2rem;
            }
            div{
                .icon {
                        width: 50px;
                        height: 50px;
                        text-align: center;
                        line-height: 50px;
                        background-color: $woodsmoke;
                        &:hover {
                                cursor: pointer;
                            }
                    }
            }
    }
    
    
}
</style>