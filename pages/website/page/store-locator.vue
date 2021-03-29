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
                                    v-for="store in formattedStores"
                                    :key="store.id"
                                >
                                    <store-location :store="store" />
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
// import { stores } from '~/static/data/store-locator';

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
                    url: '/contact-us'
                },
                {
                    text: 'Store Locator'
                }
            ],
            stores: [
                {
                    id: '1',
                    name: 'Dreamworks Integrated Systems Limited',
                    address:
                        'No. 83, Adeniyi Jones Avenue, Ikeja Lagos State Nigeria',
                    personel: [
                        {
                            id: 1,
                            name: 'Anthonia',
                            phone: ['07068223587']
                        }
                    ]
                },
                {
                    id: '2',
                    name: 'Westgate Technologies Limited (Ikeja)',
                    address:
                        'No. 32, Oba Akran Avenue Ikeja, Lagos State, Nigeria',
                    personel: [
                        {
                            id: 2,
                            name: 'Judith',
                            phone: ['08136939352', '07017149979']
                        }
                    ]
                },
                {
                    id: '3',
                    name: 'Westgate Technologies Limited (Computer Village)',
                    address:
                        'No. 17, Adepele Street, Ikeja, Lagos State, Nigeria',
                    personel: [
                        {
                            id: 3,
                            name: 'Samson',
                            phone: ['08188747679', '08147330201']
                        }
                    ]
                },
                {
                    id: '4',
                    name: 'Spar Market Nigeria',
                    address: '33 Town Planning Way, Ilupeju, Lagos',
                    personel: [
                        {
                            id: 4,
                            name: '',
                            phone: []
                        }
                    ]
                },
                {
                    id: '5',
                    name: 'Spar Market Nigeria',
                    address:
                        'SPAR Lekki, Palm Springs Rd, Lekki Penninsula II, Lekki, Behind Nicon Town & Total Filling Station, Ikate Elegushi Layout',
                    personel: [
                        {
                            id: 5,
                            name: '',
                            phone: []
                        }
                    ]
                }
            ]
        };
    },
    computed: {
        formattedStores() {
            return this.stores.filter(post => {
                return post.name.toLowerCase().includes(this.location.toLowerCase());
            });
        }
    }
};
</script>

<style lang="scss" scoped>
img {
    width: 100%;
}
</style>
