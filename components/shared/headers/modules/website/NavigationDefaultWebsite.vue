<template lang="html">
    <nav class="navigation">
        <div class="ps-container">
            <div class="navigation__right">
              <ul class="mega-menu__list">
                <li class="menu-item-has-dropdown">
                    <nuxt-link to="#">
                        New Center
                    </nuxt-link>
                </li>
								<li class="menu-item-has-dropdown">
                    <nuxt-link to="#">
                        New Center
                    </nuxt-link>
                </li>
								<li class="menu-item-has-dropdown">
                    <nuxt-link to="#">
                        New Center
                    </nuxt-link>
                </li>
							</ul>
            </div>
        </div>
    </nav>
</template>

<script>
import CurrencyDropdown from '../CurrencyDropdown';
import LanguageSwicher from '../LanguageSwicher';
// import MenuDefault from '~/components/shared/menu/website/MenuDefaultWebsite';
import MenuCategories from '~/components/shared/menu/MenuCategories';
export default {
    name: 'NavigationDefault',
    components: {
        MenuCategories,
        // MenuDefault,
        LanguageSwicher,
        CurrencyDropdown
    }
};
</script>

<style lang="scss" scoped>
.navigation__right {
		justify-content: flex-end;
		  .mega-menu__list {
				 display: flex;
			}
}
</style>
