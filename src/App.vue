<template>
  <HeaderComponent/>
  <main>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <FifthComponent/>
    <SixthComponent/>
    <SevComponent/>
  </main>
  <FooterComponent/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FirstSection from './components/FirstSection.vue';
import SecondSection from './components/SecondSection.vue';
import ThirdSection from './components/ThirdSection.vue';
import FooterComponent from './components/FooterComponent.vue';
import FourthSection from './components/FourthSection.vue';
import FifthComponent from './components/FifthComponent.vue';
import SixthComponent from './components/SixthComponent.vue';
import SevComponent from './components/SevComponent.vue';

  export default {
  components: { HeaderComponent, FirstSection, SecondSection, ThirdSection, FooterComponent, FourthSection, FifthComponent, SixthComponent, SevComponent }
}
</script>

<style lang="scss" scoped>

</style>