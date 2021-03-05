<template>
    <li class=" menu-item-has-children has-mega-menu">
        <nuxt-link :to="menuData.url">
            {{ menuData.text }}
        </nuxt-link>
        <div class="mega-menu">
            <div
                v-for="item in menuData.megaContent"
                class="mega-menu__column"
                :key="item.heading"
            >
                <h4>{{ item.heading }}</h4>
                <ul class="mega-menu__list">
                    <li v-for="subItem in item.megaItems" :key="subItem.text">
                        <nuxt-link :to="subItem.url">
                            {{ subItem.text }}
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    name: 'MenuMega',
    props: {
        menuData: {
            type: Object,
            defaut: {}
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

        .mega-menu__column {
            min-width: 250px;
        }

        h4 {
            color: #78bc27;
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
