<template lang="html">
    <ul class="menu--dropdown">
        <template v-for="item in menuCategories">
            <menu-dropdown v-if="item.subMenu" :menu-data="item" />
            <menu-mega v-else-if="item.mega" :menu-data="item" />
            <li v-else :key="item.text">
                <nuxt-link :to="item.url">
                    {{ item.text }}
                </nuxt-link>
            </li>
        </template>
    </ul>
</template>

<script>
import MenuDefault from '~/components/shared/menu/MenuDefault';
import MenuDropdown from '~/components/shared/menu/MenuDropdown';
import MenuMega from '~/components/shared/menu/MenuMega';
export default {
    name: 'MenuCategories',
    components: { MenuMega, MenuDropdown, MenuDefault },
    data() {
        return {
            menuCategories: [
                {
                    icon: 'icon-star',
                    text: this.$i18n.t('menu.menuCategories.hotPromotions'),
                    url: 'store/shop'
                },
                {
                    icon: 'icon-laundry',
                    text: this.$i18n.t(
                        'menu.menuCategories.consumerElectronic'
                    ),
                    url: 'store/shop',
                    extraClass: 'menu-item-has-children has-mega-menu',
                    subClass: 'sub-menu',
                    mega: true,
                    megaContent: [
                        {
                            heading: this.$i18n.t(
                                'menu.menuCategories.electronic'
                            ),
                            megaItems: [
                                {
                                    text: this.$i18n.t(
                                        'menu.menuCategories.homeAudioAndTheathers'
                                    ),
                                    url: 'store/shop'
                                },
                                {
                                    text: this.$i18n.t(
                                        'menu.menuCategories.tvAndVideos'
                                    ),
                                    url: 'store/shop'
                                },
                                {
                                    text: this.$i18n.t(
                                        'menu.menuCategories.cameraphotosAndVideos'
                                    ),
                                    url: 'store/shop'
                                },
                                {
                                    text: this.$i18n.t(
                                        'menu.menuCategories.cellphonesAndAccessories'
                                    ),
                                    url: 'store/shop'
                                },
                                {
                                    text: this.$i18n.t(
                                        'menu.menuCategories.headphone'
                                    ),
                                    url: 'store/shop'
                                },
                                {
                                    text: this.$i18n.t(
                                        'menu.menuCategories.videosgames'
                                    ),
                                    url: 'store/shop'
                                },
                                {
                                    text: this.$i18n.t(
                                        'menu.menuCategories.wirelessSpeakers'
                                    ),
                                    url: 'store/shop'
                                },
                                {
                                    text: this.$i18n.t(
                                        'menu.menuCategories.officeElectronic'
                                    ),
                                    url: 'store/shop'
                                }
                            ]
                        },
                        {
                            heading: this.$i18n.t(
                                'menu.menuCategories.accessoriesAndParts'
                            ),
                            megaItems: [
                                {
                                    text: this.$i18n.t(
                                        'menu.menuCategories.digitalCables'
                                    ),
                                    url: 'store/shop'
                                },
                                {
                                    text: this.$i18n.t(
                                        'menu.menuCategories.audioAndVideoCables'
                                    ),
                                    url: 'store/shop'
                                },
                                {
                                    text: this.$i18n.t(
                                        'menu.menuCategories.batteries'
                                    ),
                                    url: 'store/shop'
                                }
                            ]
                        }
                    ]
                },
                {
                    icon: 'icon-shirt',
                    text: this.$i18n.t(
                        'menu.menuCategories.clothingAndapparel'
                    ),
                    url: 'store/shop'
                },
                {
                    icon: 'icon-lampshade',
                    text: this.$i18n.t(
                        'menu.menuCategories.HomeGardenAndKitchen'
                    ),
                    url: 'store/shop'
                },
                {
                    icon: 'icon-heart-pulse',
                    text: this.$i18n.t('menu.menuCategories.healthAndBeauty'),
                    url: 'store/shop'
                },
                {
                    icon: 'icon-diamond2',
                    text: this.$i18n.t('menu.menuCategories.yewelryAndWatches'),
                    url: 'store/shop'
                },
                {
                    icon: 'icon-desktop',
                    text: this.$i18n.t(
                        'menu.menuCategories.computerAndTechnology'
                    ),
                    url: 'store/shop',
                    extraClass: 'menu-item-has-children has-mega-menu',
                    subClass: 'sub-menu',
                    megaContent: [
                        {
                            heading: this.$i18n.t(
                                'menu.menuCategories.computerAndTechnologies'
                            ),
                            megaItems: [
                                {
                                    text: this.$i18n.t(
                                        'menu.menuCategories.computerAndTablets'
                                    ),
                                    url: 'store/shop'
                                },
                                {
                                    text: this.$i18n.t(
                                        'menu.menuCategories.laptop'
                                    ),
                                    url: 'store/shop'
                                },
                                {
                                    text: this.$i18n.t(
                                        'menu.menuCategories.monitors'
                                    ),
                                    url: 'store/shop'
                                },
                                {
                                    text: this.$i18n.t(
                                        'menu.menuCategories.networking'
                                    ),
                                    url: 'store/shop'
                                },
                                {
                                    text: this.$i18n.t(
                                        'menu.menuCategories.driveAndStorages'
                                    ),
                                    url: 'store/shop'
                                },
                                {
                                    text: this.$i18n.t(
                                        'menu.menuCategories.computerComponents'
                                    ),
                                    url: 'store/shop'
                                },
                                {
                                    text: this.$i18n.t(
                                        'menu.menuCategories.securityAndProtection'
                                    ),
                                    url: 'store/shop'
                                },
                                {
                                    text: this.$i18n.t(
                                        'menu.menuCategories.gamingLaptop'
                                    ),
                                    url: 'store/shop'
                                },
                                {
                                    text: this.$i18n.t(
                                        'menu.menuCategories.accessories'
                                    ),
                                    url: 'store/shop'
                                }
                            ]
                        }
                    ]
                },
                {
                    icon: 'icon-baby-bottle',
                    text: this.$i18n.t('menu.menuCategories.babiesAndMoms'),
                    url: 'store/shop'
                },
                {
                    icon: 'icon-smartphone',
                    text: this.$i18n.t(
                        'menu.menuCategories.phonesAndAccessories'
                    ),
                    url: 'store/shop'
                },
                {
                    icon: 'icon-book2',
                    text: this.$i18n.t('menu.menuCategories.booksAndOffice'),
                    url: 'store/shop'
                },
                {
                    icon: 'icon-car-siren',
                    text: this.$i18n.t('menu.menuCategories.carsAndMotocycles'),
                    url: 'store/shop'
                },
                {
                    icon: 'icon-wrench',
                    text: this.$i18n.t('menu.menuCategories.homeImproments'),
                    url: 'store/shop'
                },
                {
                    icon: 'icon-tag',
                    text: this.$i18n.t(
                        'menu.menuCategories.vouchersAndServices'
                    ),
                    url: 'store/shop'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
