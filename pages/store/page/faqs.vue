<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb" layout="fullwidth" />
        <div class="container">
            <div v-if="loading">
                <content-placeholders>
                    <content-placeholders-heading :img="true" />
                    <content-placeholders-text :lines="10" />
                </content-placeholders>
            </div>
            <faqs v-else :faqs="faqs"/>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import Faqs from '~/components/partials/page/Faqs';

import Repository from '~/repositories/Repository.js';
import { subBaseUrl } from '~/repositories/Repository';


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
    components: {
        Faqs,
        BreadCrumb
    },
    transition: 'zoom',
    layout: 'layout-default-website',
    data: () => {
        return {
            faqs: [],
            loading: false,
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
    
    mounted() {
        this.getFaqs()
    },
    methods: {
        async getFaqs () {
            this.loading = true
            const reponse = await Repository.get( `${subBaseUrl}/faqs`)
                .then(response => {
                    this.faqs = response.data
                    this.loading = false
                })
                .catch(error => ({ error: JSON.stringify(error) }));
            return reponse;
        }
    },
};
</script>

<style lang="scss" scoped></style>
