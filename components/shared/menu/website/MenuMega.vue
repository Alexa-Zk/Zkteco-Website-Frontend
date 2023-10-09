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
                <h4>
                    <nuxt-link :to="``">
                        {{ item.heading }}
                    </nuxt-link>
                    <i class="icon-chevron-right"></i>
                </h4>
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
        display: grid;
        row-gap: 12px;

        // .mega-menu__column {
        //     min-width: 250px;
        // }

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
    // .mega-menu {
    //     border: none;
    //     background: rgba(0, 0, 0, 0.7);
    //     opacity: 0.95;
    //     border-radius: 4px;
    //     min-width: 200px;
    //     box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    //     padding: 15px 5px 10px;
    //     display: grid;
    //     grid-template-columns: 1fr;
    //     row-gap: 12px;

    //     .mega-menu__column {
    //         min-width: 200px;
    //         padding: 0px 10px;
    //         position: relative;
    //     }

    //     h4 {
    //         a {
    //             color: #78bc27;
    //             font-weight: 600;
    //             &:hover {
    //                 color: white;
    //             }
    //         }
    //     }

    //     div {
    //         ul {
    //             min-width: 180px;
    //             position: absolute;
    //             top: 0;
    //             left: 100%;
    //             display: none;
    //         }
    //     }

    //     div:hover > ul {
    //         background: rgba(0, 0, 0, 0.7);
    //         border-radius: 0 4px 4px 0;
    //         display: flex;
    //         flex-direction: column;
    //     }

    //     .mega-menu__list {
    //         li {
    //             padding: 10px 15px;
    //             a {
    //                 color: #78bc27;
    //                 display: block;
    //                 &:hover {
    //                     color: white;
    //                 }
    //             }
    //         }
    //     }
    // }
}
</style>
