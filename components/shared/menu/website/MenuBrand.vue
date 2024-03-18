<template>
    <li class=" menu-item-has-children has-mega-menu">
        <nuxt-link to="/biotime.africa">
            Brand
        </nuxt-link>
        <div class="mega-menu menu-item-has-children has-mega-menu"> 
            <div>
                <h4 class="brands">
                    <nuxt-link :to="`/biotime.africa`">
                        Cloud Solution
                    </nuxt-link>
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
            <div>
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
        </div>
    </li>
</template>

<script>
export default {
    name: 'MenuBrand',
    data() {
        return {};
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
                padding: 0 10px;
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
.brands {
    a {
        width: 230px !important;
        display: block !important;
    }
}
</style>
