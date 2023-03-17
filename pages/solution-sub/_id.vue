<template lang="html">
    <div>
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-page--single ps-page--vendor">
            <div class="container">
                <div class="ps-layout--shop">
                    <div class="ps-layout__left">
                        <solution-widget />
                    </div>
                    <div class="ps-layout__right">
                        <solution-sub />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import SolutionSub from '~/components/partials/vendor/website/SolutionSub';
import SolutionWidget from '~/components/partials/shop/modules/website/SolutionWidget';

export default {
    head() {
        return {
            titleTemplate: 'Solution SubCatgory',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Solution SubCatgory'
                }
            ]
        };
    },
    components: {
        SolutionWidget,
        SolutionSub,
        BreadCrumb
    },
    layout: 'layout-default-website',
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Solution SubCategory'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
