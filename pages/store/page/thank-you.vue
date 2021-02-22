<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-section--custom ps-section--thank-you">
            <div class="container">
                <div class="ps-thank-you">
                    <i class="fa fa-check-circle"></i>
                    <h3>Orders created successfully</h3>
                    <p>You will be contacted shortly</p>
                    <a href="/store/shop">Go to product pages</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';

export default {
    components: {
        BreadCrumb
    },
    layout: 'layout-default',
    transition: 'zoom',
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/store'
                },
                {
                    text: 'Thank you page'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.ps-section--thank-you {
    .container {
        display: flex;
        justify-content: center;
        .ps-thank-you {
            text-align: center;
            i {
                font-size: 100px;
                color: limegreen;
            }
        }
    }
}
</style>
