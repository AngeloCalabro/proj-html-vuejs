<template>
    <section id="footer-up">
        <div class="jumbo container d-flex justify-content-between align-items-center">
            <div>
                <h1>Achieve Your Fitness Goals</h1>
                <p>Flexible membership packages to suit all levels of athlete and achive your fitness goals</p>
            </div>
            <div class="my-btn text-uppercase py-3 px-4">join us</div>
        </div>
    </section>

    <section id="footer-center">
      <div class="container row g-0 py-5 m-auto ">
        <ul class="col-lg-3 pe-1"><div class="text-uppercase mb-3">come find us</div>
            <li>12345 North main Street</li>
            <li class="mb-3">New York, NY 555555</li>
            <li>Phone: <span class="my-link">1.800.555.6789</span></li>
            <li>Email: <span class="my-link">info@your-domain.com</span></li>
        </ul>
        <ul class="col-lg-3 px-3">
            <div class="text-uppercase mb-3">RECENT POSTS</div>
            <li  class="mb-3"><span class="my-link">&#62; Train with free weights or your body weight?</span></li>
            <li><span class="my-link">&#62; Nutritional advice that will keep you training</span></li>
        </ul>
        <ul class="col-lg-3 px-3">
            <div class="text-uppercase mb-3">OPENING TIMES</div>
            <li>Weekdays Monday – Friday</li>
            <li class="mb-3">09:00 – 19:00</li>
            <li>Weekends Saturday – Sunday</li>
            <li>09:00 – 21:00</li>
        </ul>
        <div class="col-lg-3">
            <img class="img-fluid image-shadow " src="../assets/images/gym_ad-compressor.jpg" alt="">
        </div>
      </div>
    </section>

    <section id="footer-down">
        <div class="container row g-0 py-3 m-auto align-items-center">
            <p class="col-lg-9">© Copyright 2015 | Avada Theme by <span class="my-link">ThemeFusion</span> | All Rights Reserved | Powered by WordPress</p>
            <div class="col-lg-3">
                <span><i class="icon mx-1 fa-brands fa-facebook-f"></i></span>
                <span><i class="icon mx-1 fa-brands fa-twitter"></i></span>
                <span><i class="icon mx-1 fa-brands fa-instagram"></i></span>
                <span><i class="icon mx-1 fa-brands fa-youtube"></i></span>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'FooterComponent'
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
@use '../assets/style/partials/mixins' as *;

#footer-up {
    min-height: 250px;
    max-width: 100%;
    background-image: url('../assets/images/home-parallax.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    div.jumbo {
        height: 250px;
        p {
            font-size: 1rem;
        }
        div.my-btn {
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
    }
                
}
#footer-center{
    color: $dove-gray;
    .my-link {
            color: $white;
            cursor: pointer;
            transition: 0.3s;
    
            &:hover {
                color: $vibrant;
            }
    }
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
}

#footer-down{
    background-color: $woodsmoke;
    p{
        font-size: $fs-s;
    }
    div {
        i.icon {
            font-size: $fs-m;
            width: 40px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            background-color: $vibrant;
            transition: 0.3s;

            &:hover {
                cursor: pointer;
                background-color: $woodsmoke;
            }
        }
        }

}
</style>