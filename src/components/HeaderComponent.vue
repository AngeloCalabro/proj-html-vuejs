<template>
    <header>
        <nav>
            <div class="navbar">
                <img class="mx-2" src="../assets/images/gym_logo_1x.png" alt="logo avada gym">
                <ul class="d-flex mx-2">
                    <li class="text-uppercase text-center p-2" v-for="(item, index) in store.linksNavTop" :key="index"><a href="#" :class="{'active': item.active}">{{ item.text }}</a></li>
                </ul>
            </div>
            <div class="jumbo container">
                <h1 class="text-uppercase">no pain no gain</h1>
                <p>Motivation is what gets you started. Habit is what keeps you going.</p>
                <div class="my-btn text-uppercase p-2">Join Us Today</div>
            </div>
        </nav>
    </header>
</template>

<script>
import {store} from '../store';
    export default {
        name: 'HeaderComponet',
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

header{
    width: 100%;
    nav{
        min-height: 650px;
        max-width: 100%;
        position: relative;
        background-image: url('../assets/images/home-banner.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        div.navbar{
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            @include dflex('around');
            img{
                height: 100px;
            }
            ul{
                li{
                    list-style: none;
                    a{
                        text-decoration: none;
                        color: $white;
                        transition: 0.5s;
                        &.active{
                            color: $chestnut-rose;
                        }
                        &:hover{
                            color: $chestnut-rose;
                        }
                    }
                }
            }
        }
        div.jumbo{
            position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                h1 {
                    color: $white;
                    font-size: $fs-xxl;
                    // white-space: nowrap
                }
                p{
                    color: $white;
                }
                div.my-btn{
                    width: max-content;
                    color: $edward;
                    border: 1px solid $edward;
                    transition: 1s;
                    &:hover{
                        color: $white;
                        border: 1px solid $white;
                        cursor: pointer;
                    }
                }

        }       
        
    }

}
</style>