<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-section--custom">
            <div class="container">
                <div class="ps-section__header">
                    <h3>Data Protection Policy</h3>
                </div>
                <div v-html="message">
                    {{ message }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
const axios = require('axios');

export default {
    components: {
        BreadCrumb
    },
    transition: 'zoom',
    layout: 'layout-default-website',
    data: () => {
        return {
            message: '',
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Privacy Policy'
                }
            ]
        };
    },
    async mounted() {
        const response = await axios.get(
            'https://admin.zkteco-wa.com/data-protection-policy'
        );

        if (response) {
            const res = response.data.content;
            this.message = res;
        }
    }
};
</script>

<style lang="scss" scoped></style>
