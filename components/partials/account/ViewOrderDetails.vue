<template lang="html">
    <section class="ps-my-account ps-page--account">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="ps-section__left">
                        <aside class="ps-widget--account-dashboard">
                            <div class="ps-widget__header">
                                <figure>
                                    <figcaption>Hello</figcaption>
                                    <p>
                                        {{ single_user_information.email }}
                                    </p>
                                </figure>
                            </div>
                            <div class="ps-widget__content">
                                <AccountLinks :links="accountLinks" />
                            </div>
                        </aside>
                    </div>
                </div>
                <div class="col-lg-8">
                    <section class="ps-section--account-setting">
                        <div class="ps-section__content">
                            <h3>Order Details.</h3>

                            <div
                                class="ps-product ps-product--wide ps-product--search-result"
                                v-for="product in order_details"
                                :key="product.id"
                            >
                                <div class="ps-product__content">
                                    <nuxt-link
                                        :to="`#`"
                                        class="ps-product__title"
                                    >
                                        {{ product.name }}
                                    </nuxt-link>
                                    <div class="ps-product__rating">
                                        <span>
                                            Stock Status:
                                            {{ product.stock_status }}
                                        </span>
                                        <span>
                                            Categories:
                                            {{ product.categories[0].name }}
                                        </span>
                                    </div>

                                    <p class="ps-product__price sale">
                                        Price: {{ currency }}{{ product.price }}
                                    </p>
                                </div>
                                <nuxt-link
                                    :to="`/store/product/${product.id}`"
                                    class="ps-orders__more"
                                >
                                    See Product
                                </nuxt-link>
                            </div>

                            <p v-if="order_details.length < 0">
                                No product here.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
import { state } from '~/store/app';
import AccountLinks from './modules/AccountLinks';
export default {
    name: 'RecentViewedProducts',
    components: { AccountLinks },
    data() {
        return {
            accountLinks: [
                {
                    text: 'Account Information',
                    url: '/store/account/user-information',
                    icon: 'icon-user'
                },
                {
                    text: 'Address',
                    url: '/store/account/addresses',
                    icon: 'icon-map-marker'
                },
                {
                    text: 'My Orders',
                    url: '/store/account/recent-viewed-product',
                    icon: 'icon-store',
                    active: true
                },
            ]
        };
    },
    computed: {
        ...mapState({
            single_user_information: state => state.auth.singleUserInformation,
            currency: state => state.app.currency,
            order_details: state => state.product.singleUserOrders
        })
    }
};
</script>

<style lang="scss" scoped>
.ps-product--search-result {
    border: 1px solid #f0f0f0;
    padding: 20px 20px;
    margin-bottom: 0px;
    .ps-product__price {
        font-size: 18px;
    }
    .ps-product__content {
        padding-left: 0px;
    }
    .ps-orders__more {
        flex-basis: unset;
        width: 20%;
        text-transform: uppercase;
        color: green;
        transition: all 0.5s;
        border-radius: 4px;
        padding: 10px;
        font-weight: bold;
        &:hover {
            background: lighten($color: green, $amount: 30%);
        }
    }
}
</style>
