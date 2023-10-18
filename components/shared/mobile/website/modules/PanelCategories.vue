<template lang="html">
    <div class="ps-panel--sidebar">
        <div class="ps-panel__header">
            <h3>Categores</h3>
            <a
                href="/product"
                class="ps-panel__close"
                @click.prevent="handleClosePanel"
            >
                <i class="icon icon-cross"></i>
            </a>
        </div>
        <div class="navigation__content">
            <!--ul class="menu--mobile">
                <!-div class="placeholder-image" v-if="loading">
                    <content-placeholders v-for="x in 3" :key="x">
                        <content-placeholders-heading :img="true" />
                        <content-placeholders-text :lines="3" />
                    </content-placeholders>
                </div>
                <li v-for="category in categoryAndSubCategories">
                    <nuxt-link :to="`/product-categories/${category.slug}`">{{
                        category.name
                    }}</nuxt-link>
                </li>
            </ul -->
            <v-list class="menu--mobile">
                <template v-for="category in categoryAndSubCategories">
                    <v-list-group
                        v-if="category.product_sub_categories"
                        no-action
                    >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <nuxt-link
                                    :to="`/product-categories/${category.slug}`"
                                    @click="handleClosePanel"
                                >
                                    {{ category.name }}
                                </nuxt-link>
                            </v-list-item-content>
                        </template>
                        <mobile-product-subMenu
                            :menu="category.product_sub_categories"
                        />
                    </v-list-group>
                </template>
            </v-list>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

import MobileProductSubMenu from '~/components/shared/mobile/modules/MobileProductSubMenu';

export default {
    name: 'PanelCategories',
    components: { MobileProductSubMenu },

    data() {
        return {
            loading: false
        };
    },

    computed: {
        ...mapState({
            categoryAndSubCategories: state =>
                state.website.categoryAndSubCategories
            //loading: state => state.website.loading
        })
    },

    methods: {
        handleClosePanel() {
            this.$store.commit('app/setCurrentDrawerContent', null);
            this.$store.commit('app/setAppDrawer', false);
        }
    }

    // data() {
    //     return {
    //         productCategories: null,
    //         loading: false
    //     };
    // },

    // mounted() {
    //     this.getProductCategories();
    // },

    // methods: {
    //     handleClosePanel() {
    //         this.$store.commit('app/setCurrentDrawerContent', null);
    //         this.$store.commit('app/setAppDrawer', false);
    //     },
    //     async getProductCategories() {
    //         this.loading = true;
    //         const reponse = await Repository.get(
    //             `${subBaseUrl}/product-categories`
    //         )
    //             .then(response => {
    //                 this.productCategories = response.data;
    //                 this.loading = false;
    //             })
    //             .catch(error => ({ error: JSON.stringify(error) }));
    //         return reponse;
    //     }
    // }
};
</script>

<style lang="scss" scoped>
.placeholder-image {
    padding: 15px;
}

.v-list-item__content {
    text-decoration: none;
    color: black;
}
</style>
