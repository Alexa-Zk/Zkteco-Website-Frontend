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
                        <solution-category />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import SolutionCategory from '~/components/partials/vendor/website/SolutionCategory';
import SolutionWidget from '~/components/partials/shop/modules/website/SolutionWidget';

export default {
    head() {
        return {
            titleTemplate: 'Solution Catgory',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Solution Catgory'
                }
            ]
        };
    },
    components: {
        SolutionWidget,
        SolutionCategory,
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
                    text: 'Solution Category'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
