<template lang="html">
    <v-list>
        <template v-for="menuItem in menu">
            <v-list-item v-if="!menuItem.subMenu">
                <v-list-item-content>
                    <nuxt-link :to="`/sub-categories/${menuItem.slug}/`">
                        {{ menuItem.name }}
                    </nuxt-link>
                </v-list-item-content>
            </v-list-item>
        </template>
    </v-list>
</template>

<script>
export default {
    name: 'MobileProductSubMenu',
    props: {
        menu: {
            type: Array,
            default: () => {}
        }
    }
};
</script>

<style lang="scss" scoped>
.v-list-item__content {
    text-decoration: none;
    color: black;
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
