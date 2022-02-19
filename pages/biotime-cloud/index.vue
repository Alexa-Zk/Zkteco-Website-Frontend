<template>
    <div>
        <hero-section />
        <features />
        <div class="ps-container" style="background: #fafafa">
            <pricing />
            <contact-us />
            <biotime-app />
            <faqs />
        </div>
        <contact-form />
    </div>
</template>

<script>
import HeroSection from "~/components/partials/biotime-cloud/HeroSection";
import Features from "~/components/partials/biotime-cloud/Features";
import Pricing from "~/components/partials/biotime-cloud/Pricing";
import ContactUs from "~/components/partials/biotime-cloud/ContactUs";
import Faqs from "~/components/partials/biotime-cloud/Faqs";
import ContactForm from "~/components/partials/biotime-cloud/ContactForm";

import BiotimeApp from "~/components/partials/biotime-cloud/BiotimeApp";
export default {
    name: 'index.vue',
    layout: 'layout-biotime',
    components: {
        HeroSection,
        Features,
        Pricing,
        ContactUs,
        Faqs,
        ContactForm,
        BiotimeApp
    }
};
</script>

<style lang="scss" scoped>

</style>
