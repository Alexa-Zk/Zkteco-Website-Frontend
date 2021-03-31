<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb" layout="fullwidth" />
        <div class="ps-section--custom">
            <div class="ps-container">
                <div class="ps-section__header">
                    <form
                        class="ps-form--newsletter"
                        action="do_action"
                        method="post"
                    >
                        <div class="row">
                            <div class="col-lg-7">
                                <div class="ps-form__right">
                                    <div class="form-group--nest">
                                        <input
                                            class="form-control"
                                            type="text"
                                            placeholder="Find a store"
                                            v-model="location"
                                        />
                                        <button
                                            class="ps-btn"
                                            @click.prevent="
                                                ProductAuthentication
                                            "
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="ps-section__content">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="ps-form__left">
                                <div
                                    class=""
                                    v-for="store in storeLocator"
                                    :key="store.id"
                                >
                                    <store-location :store="store" />
                                </div>
                                <div v-if="storeLocator.length === 0">
                                    <span>No Store in your location</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="ps-form__right">
                                <img src="~/static/img/website/maps.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import StoreLocation from '~/components/partials/store-location/StoreLocation';
import { mapActions, mapState } from 'vuex';

export default {
    components: {
        BreadCrumb,
        StoreLocation
    },
    name: 'Store-Locator',
    layout: 'layout-default-website',
    transition: 'zoom',
    data: () => {
        return {
            location: '',
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Contact Us',
                    url: '/contact'
                },
                {
                    text: 'Store Locator'
                }
            ]
        };
    },
    methods: {
        ...mapActions(['getStoreLocator'])
    },
    computed: {
        ...mapState({
            storeLocator: state => state.website.storeLocator
        })
    },
    async created() {
        const payload = {};
        const storeLocation = await this.$store.dispatch(
            'website/getStoreLocator',
            payload
        );
    },
    watch: {
        async location() {
            const payload = {
                query: this.location
            };
            const storeLocation = await this.$store.dispatch(
                'website/getStoreLocator',
                payload
            );
        }
    }
};
</script>

<style lang="scss" scoped>
img {
    width: 100%;
}
</style>
