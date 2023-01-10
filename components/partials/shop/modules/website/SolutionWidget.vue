<template lang="html">
    <div id="shop-widgets">
        <aside class="widget widget_shop">
            <h4 class="widget-title" style="font-weight: bold;">
                {{ $t('shop.widget.categories') }}
            </h4>
            <ul
                v-if="solutionCategoriesAndSub !== undefined"
                class="ps-list--categories--website"
            >
                <div class="placeholder-image" v-if="loading">
                    <content-placeholders v-for="x in 3" :key="x">
                        <content-placeholders-heading :img="true" />
                        <content-placeholders-text :lines="3" />
                    </content-placeholders>
                </div>

                <li
                    v-for="category in solutionCategoriesAndSub"
                    :key="category.id"
                >
                    <v-list class="sidebar-border">
                        <v-list-group>
                            <template v-slot:activator>
                                <nuxt-link
                                    :to="
                                        `/solution-categories/${category.slug}`
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
                                v-for="solution in category.solution_sub_categories"
                                :key="solution.id"
                            >
                                <template v-slot:activator>
                                    <v-list-item-content>
                                        <nuxt-link
                                            :to="
                                                `/sub-categories/${solution.slug}`
                                            "
                                            ><v-list-item-title
                                                >{{ solution.name }}
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

export default {
    name: 'SolutionWidget',
    components: {
        MenuMegaSubCategories
    },
    computed: {
        ...mapState({
            solutionCategoriesAndSub: state =>
                state.website.solutionCategoriesAndSub
        })
    },
    data() {
        return {
            loading: false
        };
    },
    async created() {
        await this.$store.dispatch(
            'website/getSolutionCategoryAndSubCategories'
        );
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
