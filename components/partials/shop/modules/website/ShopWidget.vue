<template lang="html">
    <div id="shop-widgets">
        <aside class="widget widget_shop">
            <h4 class="widget-title" style="font-weight: bold;">
                {{ $t('shop.widget.categories') }}
            </h4>
            <ul
                v-if="categories !== undefined"
                class="ps-list--categories--website"
            >
                <div class="placeholder-image" v-if="loading">
                    <content-placeholders v-for="x in 3" :key="x">
                        <content-placeholders-heading :img="true" />
                        <content-placeholders-text :lines="3" />
                    </content-placeholders>
                </div>

                <li v-for="category in productCategories" :key="category.id">
                    <v-list class="sidebar-border">
                        <v-list-group>
                            <template v-slot:activator>
                                <nuxt-link
                                    :to="`/product-categories/${category.slug}`"
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
                                                `/sub-categories/${product.slug}`
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
import Repository from '~/repositories/Repository.js';
import { subBaseUrl } from '~/repositories/Repository';

export default {
    name: 'ShopWidget',
    components: {
        MenuMegaSubCategories
    },
    computed: {
        ...mapState({
            productCategories: state => state.website.productCategories,
            categories: state => state.product.categories
        })
    },
    data() {
        return {
            loading: false
        };
    },
    async created() {
        await this.$store.dispatch('website/getAllProductCategories');
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
                            color: black;
                        }
                    }
                }
            }
        }
    }
}
</style>
