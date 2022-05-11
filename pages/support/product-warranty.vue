<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb" layout="fullwidth" />
        <div class="ps-container">
            <div v-if="loading">
                <content-placeholders>
                    <content-placeholders-heading :img="true" />
                    <content-placeholders-text :lines="10" />
                </content-placeholders>
            </div>
            <div class="guarantee-box" v-if="warrantyPolicies">
                <h2>{{ warrantyPolicies.name }}</h2>
                <p class="text" v-html="warrantyPolicies.content"></p>
            </div>
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
            titleTemplate: 'Warranty - ZKTeco West Africa',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Warranty/Return Policy'
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
            loading: false,
            warrantyPolicies: null,
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
                    text: 'Product Warranty Policy'
                }
            ]
        };
    },
    mounted() {
        this.getWarranties()
    },
    methods: {
        async getWarranties () {
            this.loading = true
            const reponse = await Repository.get( `${subBaseUrl}/warranty-policies`)
                .then(response => {
                    this.warrantyPolicies = response.data[0]
                    this.loading = false
                })
                .catch(error => ({ error: JSON.stringify(error) }));
            return reponse;
        }
    },

};
</script>

<style lang="scss" scoped>
.ps-page--single {
    .guarantee-box {
        margin: 50px 0px;
    }
}
</style>
