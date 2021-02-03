<template lang="html">
    <div id="shop-widgets">
        <aside class="widget widget_shop">
            <h4 class="widget-title">
                {{ $t('shop.widget.categories') }}
            </h4>
            <ul
                v-if="categories !== undefined"
                class="ps-list--categories--website"
            >
                <!-- <li>
                    <nuxt-link
                        :to="`/website/shop/shop-sidebar-without-banner`"
                    >
                        All Categories
                    </nuxt-link>
                </li> -->
                <li v-for="category in productCategories" :key="category.id">
                    <v-list class="sidebar-border">
                        <v-list-group>
                            <template v-slot:activator>
                                <nuxt-link
                                    :to="
                                        `/website/shop/catgories-product/${category.id}`
                                    "
                                >
                                    <v-list-item-title>{{
                                        category.name
                                    }}</v-list-item-title>
                                </nuxt-link>
                            </template>

                            <v-list-group
                                style="color: #78bc27!important;"
                                sub-group
                                v-for="product in category.product_sub_categories"
                                :key="product.id"
                            >
                                <template v-slot:activator>
                                    <v-list-item-content>
                                        <nuxt-link
                                            :to="
                                                `/website/shop/sub-catgories-product/${product.id}`
                                            "
                                            ><v-list-item-title
                                                >{{ product.name }}
                                            </v-list-item-title></nuxt-link
                                        >
                                    </v-list-item-content>
                                </template>
                            </v-list-group>
                        </v-list-group>
                    </v-list>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import MenuMegaSubCategories from '~/components/shared/menu/website/MenuMegaSubCategories';

// Queries
import Categories from '~/apollo/queries/products/allCategories';

export default {
    name: 'ShopWidget',
    components: {
        MenuMegaSubCategories
    },
    computed: {
        ...mapState({
            categories: state => state.product.categories,
            brands: state => state.product.brands,
            products: state => state.product.products
        }),
        categorySlug() {
            return this.$route;
        },
        ProductCategories() {
            return this.productCategories;
        }
    },
    data() {
        return {
            productCategories: '',
            priceRange: [100, 1000],
            selectedBrands: []
        };
    },
    apollo: {
        productCategories: {
            prefetch: true,
            query: Categories
        }
    },
    methods: {
        async handleGotoCategory(id) {
            console.log(id);
        }
    }
};
</script>

<style lang="scss">
.ps-list--categories--website {
    li {
        .v-list {
            background: inherit;
            .v-list-group {
                .v-list-item {
                    min-height: auto !important;
                    padding: 0;
                    display: flex;
                    justify-content: space-between;
                    a {
                        width: 70%;
                        .v-list-item__title {
                            color: $color-1st;
                        }
                    }
                }
            }
        }
    }
}
</style>
