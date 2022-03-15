<template>
    <div>
        <hero-section />
        <biotime-section />
        <features />
        <div class="ps-container" style="background: #fafafa">
            <Benefits />
            <!--pricing /-->
            <contact-us />
            <biotime-app />
            <faqs />
        </div>
        <!--contact-form /-->
    </div>
</template>

<script>
import HeroSection from '~/components/partials/biotime-ng/HeroSection';
import Features from '~/components/partials/biotime-ng/Features';
import Pricing from '~/components/partials/biotime-ng/Pricing';
import ContactUs from '~/components/partials/biotime-ng/ContactUs';
import Faqs from '~/components/partials/biotime-ng/Faqs';
import Benefits from '~/components/partials/biotime-ng/Benefits';
import ContactForm from '~/components/partials/biotime-ng/ContactForm';
import BiotimeSection from '~/components/partials/biotime-ng/BiotimeSection';

import BiotimeApp from '~/components/partials/biotime-ng/BiotimeApp';
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
        BiotimeApp,
        Benefits,
        BiotimeSection
    }
};
</script>

<style lang="scss" scoped></style>
