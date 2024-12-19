<template>
  <div>
    <hero-section id="HOME"></hero-section>
    <info-section id="INFO"></info-section>
    <about-section id="ABOUT"></about-section>
    <services-section id="SERVICES"></services-section>
    <become-partner id="PARTNERS" ></become-partner>
    <products-section id="OUR-PRODUCT"></products-section>
  </div>
</template>

<script>
import HeroSection from "./new-components/HeroSection";
import InfoSection from "./new-components/InfoSection";
import AboutSection from "./new-components/AboutSection";
import ProductsSection from "./new-components/ProductsSection";
import BecomePartner from "./new-components/BecomePartner";
import ServicesSection from "./new-components/ServicesSection";
export default {
  components: {
    HeroSection,
    InfoSection,
    AboutSection,
    ProductsSection,
    BecomePartner,
    ServicesSection,
  },
};
</script>

<style></style>
