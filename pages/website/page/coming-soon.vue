<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-section--custom">
            <div class="container">
                <div class="ps-section__content">
                    <figure>
                        <!-- <img src="~/static/img/404.jpg" alt="" /> -->
                        <h1>Coming Soon</h1>
                        <p>
                            The store section is still under construction.
                            Perhaps take a look at our list of
                            <nuxt-link to="/products">
                                Products
                            </nuxt-link>
                            or go back to our home page
                            <nuxt-link to="/">
                                Homepage
                            </nuxt-link>
                        </p>
                    </figure>
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
    layout: 'layout-default-website',
    transition: 'zoom',
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Coming Soon'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.ps-section__content {
    figure {
        text-align: center;
        h1 {
            color: $color-1st;
        }
        a {
            color: $color-1st;
        }
    }
}
</style>
