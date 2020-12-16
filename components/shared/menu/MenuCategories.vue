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
                    text: this.$i18n.t('Time Attendance'),
                    url: 'store/shop',
                    extraClass: 'menu-item-has-children has-mega-menu',
                    subClass: 'sub-menu',
                    mega: true,
                    megaContent: [
                        {
                            heading: this.$i18n.t(
                                'Time Attendance'
                            ),
                            megaItems: [
                                {
                                    text: this.$i18n.t(
                                        'Face'
                                    ),
                                    url: 'store/shop'
                                },
                                {
                                    text: this.$i18n.t(
                                        'Fingerprint'
                                    ),
                                    url: 'store/shop'
                                },
                                {
                                    text: this.$i18n.t(
                                        'Hybrid Biometrics'
                                    ),
                                    url: 'store/shop'
                                },
                                {
                                    text: this.$i18n.t(
                                        'RFID'
                                    ),
                                    url: 'store/shop'
                                },
                                {
                                    text: this.$i18n.t(
                                        'Portable Devices'
                                    ),
                                    url: 'store/shop'
                                },
                                {
                                    text: this.$i18n.t(
                                        'Software'
                                    ),
                                    url: 'store/shop'
                                }
                            ]
                        },
                    ]
                },
                {
                    icon: 'icon-laundry',
                    text: this.$i18n.t(
                        'Access Control'
                    ),
                    url: 'store/shop',
                    extraClass: 'menu-item-has-children has-mega-menu',
                    subClass: 'sub-menu',
                    mega: true,
                    megaContent: [
                        {
                            heading: this.$i18n.t(
                                'Access Control'
                            ),
                            megaItems: [
                                {
                                    text: this.$i18n.t(
                                        'Accessory'
                                    ),
                                    url: 'store/shop'
                                },
                                {
                                    text: this.$i18n.t(
                                        'Readers'
                                    ),
                                    url: 'store/shop'
                                },
                                {
                                    text: this.$i18n.t(
                                        'Standalone Devices'
                                    ),
                                    url: 'store/shop'
                                },
                                {
                                    text: this.$i18n.t(
                                        'Control Panel'
                                    ),
                                    url: 'store/shop'
                                },
                                {
                                    text: this.$i18n.t(
                                        'menu.menuCategories.headphone'
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
                        'Smart Locks'
                    ),
                    url: 'store/shop'
                },
                {
                    icon: 'icon-lampshade',
                    text: this.$i18n.t(
                        'CCTV'
                    ),
                    url: 'store/shop'
                },
                {
                    icon: 'icon-heart-pulse',
                    text: this.$i18n.t('Green Label'),
                    url: 'store/shop'
                },
                {
                    icon: 'icon-diamond2',
                    text: this.$i18n.t('Entrance Control'),
                    url: 'store/shop'
                },
                {
                    icon: 'icon-desktop',
                    text: this.$i18n.t(
                        'Security Inspection'
                    ),
                    url: 'store/shop',
                    extraClass: 'POS Terminal',
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
                } 
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
