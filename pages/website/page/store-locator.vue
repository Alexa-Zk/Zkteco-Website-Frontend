<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb" layout="fullwidth" />
        <div class="ps-section--custom">
            <div class="ps-container">
                <div class="ps-block--methods">
                                <v-tabs
                                    background-color="white"
                                    bg-color="black"
                                    color="success"
                                    class="ps-tab-list"
                                    grow
                                >
                                    <v-tab
                                        tag="li"
                                        class="tab-label"
                                        v-for="item in storeCategories"
                                        :key="item.id"
                                        @click="tabValue(item.value)"
                                    >
                                        <h4>{{ item.category }}</h4>
                                    </v-tab>
                                    <v-tab-item>
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
                                                                    placeholder="Find an authorised distribution partner"
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
                                                        <!-- <div v-if="storeLocator.length === 0">
                                                            <span>No Store in your location</span>
                                                        </div> -->
                                                    </div>
                                                </div>
                                                <div class="col-lg-5">
                                                    <div class="ps-form__right">
                                                        <img src="~/static/img/website/maps.png" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </v-tab-item>
                                    <v-tab-item v-if="isSearching">
                                        <div class="placeholder-image">
                                            <content-placeholders
                                                v-for="x in 6"
                                                :key="x"
                                            >
                                                <content-placeholders-heading
                                                    :img="true"
                                                />
                                                <content-placeholders-text
                                                    :lines="3"
                                                />
                                            </content-placeholders>
                                        </div>
                                    </v-tab-item>
                                    <v-tab-item>
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
                                                                    placeholder="Find a system integrator"
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
                                                        <!-- <div v-if="storeLocator.length === 0">
                                                            <span>No Store in your location</span>
                                                        </div> -->
                                                    </div>
                                                </div>
                                                <div class="col-lg-5">
                                                    <div class="ps-form__right">
                                                        <img src="~/static/img/website/maps.png" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </v-tab-item>
                                </v-tabs>
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
    head() {
        return {
            titleTemplate: 'Store Location',
        };
    },
    components: {
        BreadCrumb,
        StoreLocation
    },
    name: 'Store-Locator',
    layout: 'layout-default-website',
    transition: 'zoom',
    data: () => {
        return {
            storeCategories: [
                {
                    id: 1,
                    category: 'Authorized Distribution Partners',
                    value: 'distributor'
                },
                {
                    id: 2,
                    category: 'System Integrators',
                    value: 'integrator'
                }
            ],
            isSearching: false,
            currentCategory: 'distributor',
            location: '',
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Our Partners',
                    url: '/website/page/store-locator'
                },
                {
                    text: 'Find A Partner'
                }
            ]
        };
    },
    methods: {
        tabValue(event) {
            this.currentCategory = event;
            this.resetState()
            this.location = ''
           // this.getTotalProductFiles(); 
        },
        ...mapActions(['getStoreLocator']),

        async resetState(){
            const payload = {
                category: this.currentCategory,
            };

            const storeLocation = await this.$store.dispatch(
                'website/getStoreLocator',
                payload
            );
        }
    },
    computed: {
        ...mapState({
            storeLocator: state => state.website.storeLocator
        })
    },
    mounted(){
        this.resetState()
    },
    async created() {
        const payload = {
            query: ''
        };
        const storeLocation = await this.$store.dispatch(
            'website/getStoreLocator',
            payload
        );
    },
    watch: {
        async location() {
            const payload = {
                category: this.currentCategory,
                query: this.location 
            };
            const storeLocation = await this.$store.dispatch(
                'website/getStoreLocator',
                payload
            );
        },
    }
};
</script>

<style lang="scss" scoped>
img {
    width: 100%;
}
.ps-section__header {
    margin-top: 50px;
}
</style>
