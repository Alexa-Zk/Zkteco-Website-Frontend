<template>
    <li class="menu-item-has-children dropdown">
        <nuxt-link :to="localePath(menuData.url)">
            {{ menuData.text }}
        </nuxt-link>
        <ul v-if="menuData.subMenu" class="sub-menu">
            <MenuDropdown
                v-for="item in menuData.subMenu"
                :menu-data="item"
                :key="item.text"
            />
        </ul>
    </li>
</template>

<script>
export default {
    name: 'MenuDropdown',
    props: {
        menuData: {
            type: Object,
            defaut: {}
        }
    },
    data: () => {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.dropdown {
    a {
        color: white;
        &:hover {
            color: #78bc27;
        }
    }
    .sub-menu {
        color: #4aad3d;
    }
    ul {
        border: none;
        background: rgba(0, 0, 0, 0.7);
        opacity: 0.95;
        border-radius: 4px;
        min-width: 200px;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        padding: 15px 5px 10px;
    }
}
</style>
