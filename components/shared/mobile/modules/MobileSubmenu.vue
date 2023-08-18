<template lang="html">
    <v-list>
        <template v-for="menuItem in menu">
            <v-list-item v-if="!menuItem.subMenu">
                <v-list-item-content>
                    <nuxt-link :to="menuItem.url">
                        {{ menuItem.text }}
                    </nuxt-link>
                </v-list-item-content>
            </v-list-item>
            <v-list-group v-else no-action>
                <template v-slot:activator>
                    <v-list-item-content>
                        <nuxt-link :to="menuItem.url">
                            {{ menuItem.text }}
                        </nuxt-link>
                    </v-list-item-content>
                </template>
                <mobile-submenu :menu="menuItem.subMenu" />
            </v-list-group>
        </template>
    </v-list>
</template>

<script>
export default {
    name: 'MobileSubmenu',
    props: {
        menu: {
            type: Array,
            default: () => {}
        }
    }
};
</script>

<style lang="scss" scoped>
.a {
    text-decoration: none;
}
.theme--light {
    background-color: #eaeaea;
}

.v-list-item:hover {
    background-color: #fff;
}
.v-list-item__content:hover {
    background-color: #fff;
}
</style>
