<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb" />
        <contact-form />
        <contact-info />
        <contact-map />
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import ContactMap from '~/components/partials/page/website/ContactMap';
import ContactInfo from '~/components/partials/page/website/ContactInfo';
import ContactForm from '~/components/partials/page/website/ContactForm';

export default {
    head() {
        return {
            titleTemplate: 'Contact Us',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Contact ZKTeco West Africa'
                }
            ]
        };
    },
    components: {
        ContactForm,
        ContactInfo,
        ContactMap,
        BreadCrumb
    },
    layout: 'layout-default',
    transition: 'zoom',
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Contact Us'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
