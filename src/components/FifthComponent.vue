<template>
    <section class="container m-auto">
        <h2 class="text-uppercase text-center">HIGH PERFORMANCE FACILITIES</h2>
        <div class="text-center">
            <img class="p-5" src="../assets/images/divider-xx-red.png" alt="divider">
        </div>
        <div class="row g-0">
            <div class="col-lg-4 col-md-6 col-sm-12 p-3 m-auto d-flex" v-for="(item, index) in store.photoPerformance" :key="index">
                <img class="img-fluid image-shadow" :src="getImagePath(`../assets/images/${item.image}.jpg`)" :alt="item.name">
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../store'
export default {
    name: 'FifthSection',
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
    img.image-shadow{
        transition: 1s;
        &:hover{
            scale: 1.1;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        }
    }
}
</style>