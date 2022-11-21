<template>
    <section id="third-section">
        <div class="container my-cards d-flex justify-contet-center align-items-center px-2">
            <div class="text-center my-card" v-for="(item, index) in store.fitness" :key="index">
                <div class="circle">
                    <i class="fa-solid" :class="item.icon"></i>
                </div>
                <h5 class="py-2">{{ item.title }}</h5>
                <img class="py-2" src="../assets/images/divider-x-red.png" alt="divider">
                <p class="py-2">{{ item.paragraf }}</p>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../store'
export default {
    name: 'ThirdSection',
    data() {
        return {
            store,
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
@use '../assets/style/partials/mixins' as *;

#third-section {
    position: relative;
    background-image: url('../assets/images/gym_bkgd_bw-compressor.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    div.my-cards {
        padding: 100px 0;
        div.my-card{
            width: calc(100% / 4);
            div.circle {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                border: 1px solid $vibrant;
                display: flex;
                align-items: center;
                @include dflex('center');
        
                i {
                    color: $vibrant;
                    font-size: 50px;
                    padding: 1rem;
                }
            }
        }
        
    }
}
</style>