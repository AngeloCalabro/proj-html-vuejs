<template>
    <section id="second-section">
        <div class="container">
            <div class="d-flex align-items-center">
                <div class="p-2">
                    <img class="img-fluid" src="../assets/images/home_img-compressor.jpg" alt="">
                </div>
                <div class="p-2">
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
</style>