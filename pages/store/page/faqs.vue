<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb" layout="fullwidth" />
        <div class="container">
            <faqs :faqs="faqs"/>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import Faqs from '~/components/partials/page/Faqs';


// Queries
import faqs from '~/apollo/queries/faq/faqs';

export default {
    head() {
        return {
            titleTemplate: 'FAQ - ZKTeco West Africa',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Frequently asked questions'
                }
            ]
        };
    },
    layout: 'layout-default',
    components: {
        Faqs,
        BreadCrumb
    },
    transition: 'zoom',
    data: () => {
        return {
            faqs: [],
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'After Sales',
                    url: '/support/after-sale'
                },
                {
                    text: 'Frequently Asked Questions'
                }
            ]
        };
    },
    apollo: {
        faqs: {
            prefetch: true,
            query: faqs
        }
    },
};
</script>

<style lang="scss" scoped></style>
