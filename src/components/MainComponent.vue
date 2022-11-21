<template>
    <main>
        <section id="first-section" class="container text-center">
        <h2><span class="text-uppercase">World class</span> Fitness</h2>
        <div class="p-5"><img src="../assets/images/divider-xx-red.png" alt="divider"></div>
        <p class="px-5">At Avada Gym, everything we do from to bottom is of the highest quality to ensure we're equipped to help you reach your goals of a healthy and fit lifestyle.</p>
        </section>

        <section id="second-section">
            <div class="container">
                <div class="d-flex align-items-center">
                    <div class="p-2">
                        <img class="img-fluid" src="../assets/images/home_img-compressor.jpg" alt="">
                    </div>
                    <div>
                    <h3 class="text-capitalize">Sign up for a free training session!</h3>
                    <form @click.prevent="">
                        <div class="mb-3">
                            <label class="form-label">Name *</label>
                            <input type="text" class="form-control" required>
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
            <div class="container my-cards d-flex justify-contet-center align-items-center px-2">
                <div class="text-center" v-for="(item, index) in store.fitness" :key="index">
                    <div class="circle">
                        <i class="fa-solid" :class="item.icon"></i>
                    </div>
                    <h5 class="py-2">{{item.title}}</h5>
                    <img class="py-2" src="../assets/images/divider-x-red.png" alt="divider">
                    <p class="py-2">{{item.paragraf}}</p>
                </div>
            </div>
        </section>
        
        <section>
        sezione 4
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
    #first-section {
        padding: 100px 0;
    }
    #second-section{
        background-color: $woodsmoke;
        div.container{
            padding: 100px 0;
            input {
                    background-color: $woodsmoke;
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
    #third-section{
        position: relative;
        background-image: url('../assets/images/gym_bkgd_bw-compressor.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        div.my-cards{
            padding : 100px 0;
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