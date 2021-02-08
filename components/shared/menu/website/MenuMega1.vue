<template>
    <li class=" menu-item-has-children has-mega-menu">
        <nuxt-link :to="`/product`">
            Products
        </nuxt-link>
        <div class="mega-menu">
            <div
                v-for="item in ProductCategories"
                class="mega-menu__column"
                :key="item.id"
            >
                <ul class="mega-menu__list">
                    <li >
                        <nuxt-link :to="`/product-categories/${item.slug}`">
                            {{ item.name }}
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
    name: 'MenuMega',
    data () {
        return {
            productCategories: ''
        }
    },
    apollo: {
        productCategories: {
            prefetch: true,
            query: Categories,
        }
    },
    computed: {
        ProductCategories() {
            return this.productCategories;
        }
    },
    
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
        flex-direction: column;
        border: none;
        background: rgba(0, 0, 0, 0.7);
        opacity: 0.95;
        border-radius: 4px;
        min-width: 200px;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        padding: 15px 5px 10px;

        .mega-menu__column {
            min-width: 250px;
            padding: 0px 15px;
        }

        h4 {
            color: white;
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
