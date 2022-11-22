<template>
    <section>
        <div class="jumbo container text-center">
            <p class="paragraf">"I fear not the man who has practiced 10,000 kicks once, but i fear the man who has practiced one kick 10,000 times"</p>
            <p class="text-uppercase fw-bold p-2">Bruce Lee quote of the day</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'SixthComponent'
        
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
@use '../assets/style/partials/mixins' as *;

section {
    min-height: 450px;
    max-width: 100%;
    position: relative;
    background-image: url('../assets/images/home-testimonial-bg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    div.jumbo{
        height: 450px;
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p.paragraf {
                font-size: $fs-l;
            }
    }
    
}
</style>