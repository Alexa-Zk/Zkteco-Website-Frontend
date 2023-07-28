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
                    <nuxt-link :to="`/solution-categories/${item.slug}`">
                        {{ item.name }}
                    </nuxt-link>
                </h4>
                <ul class="mega-menu__list">
                    <li
                        v-for="subItem in item.solution_sub_cats"
                        :key="subItem.id"
                    >
                        <nuxt-link :to="`/solution-sub/${subItem.slug}`">
                            {{ subItem.name }}
                        </nuxt-link>
                    </li>
                </ul>
            </div>

            <div class="mega-menu__column">
                <h4>
                    <nuxt-link :to="`/biotime-ng`">
                        Cloud Solution
                    </nuxt-link>
                </h4>
                <ul class="mega-menu__list">
                    <li>
                        <nuxt-link :to="`/biotime-ng`">
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
                </h4>
                <ul class="mega-menu__list">
                    <li>
                        <a href="https://ngteco.ng/">
                            NGTeco
                        </a>
                    </li>
                </ul>
            </div>
            <div class="mega-menu__column">
                <h4 class="brands">
                    <nuxt-link :to="`/experience-center`">
                        Experience Center
                    </nuxt-link>
                </h4>
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
        grid-template-columns: 1fr 1fr 1fr 1fr;
        row-gap: 51px;

        .mega-menu__column {
            min-width: 250px;
            padding: 0px 15px;
        }

        h4 {
            a {
                color: #78bc27;
                font-weight: 600;
            }
        }

        .mega-menu__list {
            li {
                a {
                    color: white;
                    &:hover {
                        color: #78bc27;
                    }
                }
            }
        }
    }
}
</style>
