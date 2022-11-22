<template>
    <section id="second-section">
        <div class="container">
            <div class="row g-0">
                <div class="col-lg-6 pe-2">
                    <img class="img-fluid" src="../assets/images/home_img-compressor.jpg" alt="">
                </div>
                <div class="col-lg-6 ps-2">
                    <h3 class="text-capitalize">Sign up for a free training session!</h3>
                    <form @click.prevent="">
                        <div class="my-4 input-group">
                            <input type="text" class="input w-100" required>
                            <label class="input-label">Name*</label>
                        </div>
                        <div class="my-4 input-group">
                            <input type="email" class="input w-100" required>
                            <label class="input-label">Email address</label>
                        </div>
                        <div class="my-btn text-uppercase text-center p-2">Start Now!</div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../store'
export default {
    name: 'SecondSection',
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

#second-section {
    background-color: $woodsmoke;

    div.container {
        padding: 100px 0;

        .input-group{
            position: relative;
            color: $dove-gray;
        }
        .input{
            padding: 10px;
            border: none;
            border-radius: 4px;
            font: inherit;
            color: $dove-gray;
            background-color: transparent;
            outline: 2px solid $dove-gray;

                &:focus+.input-label,
                &:valid+.input-label{
                    transform: translate(10px, -14px) scale(.8);
                    color: $vibrant;
                    padding-inline: 5px;
                    background-color: $woodsmoke;
                }
                &:is(:focus, :valid) {
                    outline-color: $vibrant;
                }
        }
        .input-label{
            position: absolute;
            top: 0;
            left: 0;
            transform: translate(10px, 10px);
            transform-origin: left;
            transition: transform .25s;
        }
        div.my-btn {
            color: $white;
            background-color: $chestnut-rose;
            border: 1px solid $chestnut-rose;
            transition: 1s;

            &:hover {
                color: $white;
                background-color: $chestnut-rose;
                border: 1px solid $chestnut-rose;
                cursor: pointer;
            }
        }
    }
}
</style>