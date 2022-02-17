<template>
    <div>
        <features />
        <div class="ps-container" style="background: #fafafa">
            <pricing />
            <contact-us />
            <faqs />
        </div>
    </div>
</template>

<script>
import Features from "~/components/partials/biotime-cloud/Features";
import Pricing from "~/components/partials/biotime-cloud/Pricing";
import ContactUs from "~/components/partials/biotime-cloud/ContactUs";
import Faqs from "~/components/partials/biotime-cloud/Faqs";

export default {
    name: 'index.vue',
    layout: 'layout-biotime',
    components: {
        Features,
        Pricing,
        ContactUs,
        Faqs
    }
};
</script>

<style lang="scss" scoped>

</style>
