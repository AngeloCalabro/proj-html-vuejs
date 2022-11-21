<template>
    <main>
        <section class="container text-center p-5">
        <h2><span class="text-uppercase">World class</span> Fitness</h2>
        <div class="p-5"><img src="../assets/images/divider-xx-red.png" alt="divider"></div>
        <p class="px-5">At Avada Gym, everything we do from to bottom is of the highest quality to ensure we're equipped to help you reach your goals of a healthy and fit lifestyle.</p>
        </section>

        <section id="second-section">
            <div class="container py-5">
                <div class="d-flex align-items-center">
                    <div class="p-2">
                        <img class="img-fluid" src="../assets/images/home_img-compressor.jpg" alt="">
                    </div>
                    <div>
                    <h3 class="text-capitalize">Sign up for a free training session!</h3>
                    <form @click.prevent="">
                        <div class="mb-3">
                            <label class="form-label">Name *</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-control">
                        </div>
                        <div class="my-btn text-uppercase text-center p-2">Start Now!</div>
                    </form>
                    </div>
                </div>
            </div>
        </section>

        <section id="third-section">
        
        </section>
    </main>
</template>

<script>
import {store} from '../store'
    export default {
        name: 'MainComponent',
        data(){
            return{
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
@use '../assets/style/partials/mixins' as *;

main{
    #second-section{
        background-color: $woodsmoke;

        input{
            background-color: $woodsmoke;
        }
        div.my-btn {
                color: $white;
                background-color: $vibrant;
                border: 1px solid $vibrant;
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