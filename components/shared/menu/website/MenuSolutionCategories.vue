<template>
    <li class=" menu-item-has-children has-mega-menu">
        <nuxt-link to="/solution">
            Solutions
        </nuxt-link>
        <div class="mega-menu">
            <div
                v-for="item in solutionCategoriesAndSub"
                class="mega-menu__column"
                :key="item.id"
            >
                <h4>
                    <nuxt-link :to="`/solution-categories/${item.slug}/`">
                        {{ item.name }}
                    </nuxt-link>
                </h4>
                <ul class="mega-menu__list">
                    <li
                        v-for="subItem in item.solution_sub_cats"
                        :key="subItem.id"
                    >
                        <nuxt-link :to="`/solution-sub/${subItem.slug}/`">
                            {{ subItem.name }}
                        </nuxt-link>
                    </li>
                </ul>
            </div>

            <div class="mega-menu__column">
                <h4>
                    <nuxt-link
                        :to="`/biotime.africa`"
                        @click.prevent="handleClosePanel"
                    >
                        Cloud Solution
                    </nuxt-link>
                    <i class="icon-chevron-right"></i>
                </h4>
                <ul class="mega-menu__list">
                    <li>
                        <nuxt-link :to="`/biotime.africa`">
                            Biotime Africa
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link :to="`/africa-time-keeper`">
                            Africa Time Keeper
                        </nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="mega-menu__column">
                <h4 class="brands">
                    <a href="https://ngteco.ng/">
                        Smart Home
                    </a>
                    <i class="icon-chevron-right"></i>
                </h4>
                <ul class="mega-menu__list">
                    <li>
                        <a href="https://ngteco.ng/">
                            NGTeco
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </li>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'MenuSolutionCategories',
    data() {
        return {};
    },
    computed: {
        ...mapState({
            solutionCategoriesAndSub: state =>
                state.website.solutionCategoriesAndSub
        })
    },
    async mounted() {
        await this.$store.dispatch(
            'website/getSolutionCategoryAndSubCategories'
        );
    },
    methods: {
        handleClosePanel() {
            this.$store.commit('app/setCurrentDrawerContent', null);
            this.$store.commit('app/setAppDrawer', false);
        }
    }
};
</script>

<style lang="scss" scoped>
.menu-item-has-children {
    a {
        color: white;
        &:hover {
            color: #78bc27;
        }
    }

    .mega-menu {
        border: none;
        background: rgba(0, 0, 0, 0.7);
        opacity: 0.95;
        border-radius: 4px;
        min-width: 200px;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        padding: 15px 5px 10px;
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 12px;

        .mega-menu__column {
            min-width: 200px;
            padding: 0px 10px;
            position: relative;
        }

        h4 {
            display: flex;
            justify-content: space-between;
            position: relative;
            justify-items: center;
            align-items: center;
            a {
                color: #78bc27;
                font-weight: 600;
                &:hover {
                    color: white;
                }
            }
            i {
                color: #78bc27;
                font-size: 10px;
                &:hover {
                    color: white;
                    font-weight: 600;
                    cursor: pointer;
                }
            }
        }

        div {
            ul {
                min-width: 180px;
                position: absolute;
                top: 0;
                left: 100%;
                display: none;
            }
        }

        div:hover > ul {
            background: rgba(0, 0, 0, 0.7);
            border-radius: 0 4px 4px 0;
            display: flex;
            flex-direction: column;
        }

        .mega-menu__list {
            li {
                padding: 10px 15px;
                a {
                    color: #78bc27;
                    display: block;
                    &:hover {
                        color: white;
                    }
                }
            }
        }
    }
}
</style>
