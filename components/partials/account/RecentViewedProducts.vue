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
                                        {{
                                            user_information.userInfo.payload
                                                .email
                                        }}
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
													<div class="ps-product ps-product--wide ps-product--search-result" v-for="order in user_orders.results" :key="order.id">
														<div class="ps-product__content">
																<nuxt-link :to="`#`" class="ps-product__title">
																		{{ order.payment_method_title }}
																</nuxt-link>
																<div class="ps-product__rating">
																		<span> Status: {{order.status}} </span>
																		<span> On: {{order.created_at}} </span>
																</div>
														
																<p class="ps-product__price sale">
																		Cost: {{ currency }}{{ order.product_cost + order.shipping_cost }}
																</p>
																
														</div>
														<nuxt-link :to="`/store/account/orders/${order.id}`" class="ps-orders__more">
																	See Details
														</nuxt-link>
													</div>

                          <p v-if="user_orders.length < 0">No product here.</p>
                            
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
                    text: 'Invoices',
                    url: '/store/account/invoices',
                    icon: 'icon-papers'
                    
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
                {
                    text: 'Wishlist',
                    url: '/store/account/wishlist',
                    icon: 'icon-heart'
                }
            ]
        };
    },
    computed: {
        ...mapState({
            user_information: state => state.auth.userInfo,
			user_orders: state => state.product.userOrders,
            currency: state => state.app.currency
        })
    },
    created() {
        const response = this.$store.dispatch('product/getAllUserOrders',true );
    },
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
		transition: all .5s;
		border-radius: 4px;
		padding: 10px;
		font-weight: bold;
		&:hover {
			background: lighten($color: green, $amount: 30%);
		}
	}
}

</style>
