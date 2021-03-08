<template>
    <li class=" menu-item-has-children has-mega-menu">
        <nuxt-link to="/product">
            Products
        </nuxt-link>
        <div class="mega-menu">
            <div
                v-for="item in ProductCategories"
                class="mega-menu__column"
                :key="item.id"
            >
                <h4>
                    <nuxt-link :to="`/product-categories/${item.slug}`">
                        {{ item.name }}
                    </nuxt-link>
                </h4>
                <ul class="mega-menu__list">
                    <li
                        v-for="subItem in item.product_sub_categories"
                        :key="subItem.id"
                    >
                        <nuxt-link :to="`/sub-categories/${subItem.slug}`">
                            {{ subItem.name }}
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </li>
</template>

<script>
// Queries
import Categories from '~/apollo/queries/products/allCategories';

export default {
    name: 'MenuProduct',
    data() {
        return {
            productCategories: ''
        };
    },
    apollo: {
        productCategories: {
            prefetch: true,
            query: Categories
        }
    },
    computed: {
        ProductCategories() {
            return this.productCategories;
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
