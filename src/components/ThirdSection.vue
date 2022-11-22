<template>
    <section id="third-section">
        <div class="container my-cards row m-auto">
            <div class="text-center my-card col-lg-3 col-md-6 col-sm-12" v-for="(item, index) in store.fitness" :key="index">
                <div class="circle">
                    <i class="fa-solid" :class="item.icon"></i>
                </div>
                <h5 class="pt-4 my-title">{{ item.title }}</h5>
                <img class="py-2" src="../assets/images/divider-x-red.png" alt="divider">
                <p class="p-2">{{ item.paragraf }}</p>
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
            cursor: pointer;;
            &:hover .my-title{
                color: $vibrant;
            }
            div.circle {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                border: 1px solid $vibrant;
                position: relative;
                display: flex;
                align-items: center;
                @include dflex('center');

                &:before,
                &:after{
                    content: '';
                    opacity: 0;
                    position: absolute;
                    border: 50%;
                    border: 10px solid rgba(211, 97, 94, 0.7);
                    left: -20px;
                    right: -20px;
                    top: -20px;
                    bottom: -20px;
                    border-radius: 50%;
                    animation: pulse 1.5s linear infinite;
                    @keyframes pulse {
                            0% {
                                transform: scale(0.9);
                                opacity: 0;
                            }
                    
                            50% {
                                opacity: 1;
                            }
                    
                            100% {
                                transform: scale(1.1);
                                opacity: 0;
                            }
                        }
                }

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