<template>
    <section id="first-section" class="container text-center">
        <h2><span class="text-uppercase">World class</span> Fitness</h2>
        <div class="p-5"><img src="../assets/images/divider-xx-red.png" alt="divider"></div>
        <p class="px-5">At Avada Gym, everything we do from to bottom is of the highest quality to ensure we're equipped to
            help you reach your goals of a healthy and fit lifestyle.</p>
    </section>
    <div class="position-relative">
        <div class="divider-candy-shark"></div>
    </div>
</template>

<script>
import { store } from '../store'
export default {
    name: 'FirstSection',
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

    #first-section {
        padding: 100px 0;
    }
</style>