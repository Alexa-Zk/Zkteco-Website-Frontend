<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb" layout="fullwidth" />
        <div class="ps-container">
            <div class="guarantee-box">
                <h2>{{ warranties.name }}</h2>
                <p class="text" v-html="warranties.content"></p>
            </div>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import Faqs from '~/components/partials/page/Faqs';

// Queries
import WarrantyPolicies from '~/apollo/queries/warranty/warranties';

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
            warrantyPolicies: '',
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
    apollo: {
        warrantyPolicies: {
            prefetch: true,
            query: WarrantyPolicies
        }
    },
    computed: {
        warranties() {
            return this.warrantyPolicies ? this.warrantyPolicies[0] : {
                name:  "Warranty",
                content:  'No warranty'
            };
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-page--single {
    .guarantee-box {
        margin: 50px 0px;
    }
}
</style>
