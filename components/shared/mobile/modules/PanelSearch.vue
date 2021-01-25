<template lang="html">
    <div class="ps-panel--sidebar" id="panel-search">
        <div class="ps-panel__header">
            <h3>Search</h3>
            <a
                href="#"
                class="ps-panel__close"
                @click.prevent="handleClosePanel"
            >
                <i class="icon icon-cross"></i>
            </a>
        </div>
        <div class="navigation__content">
            <div class="ps-panel__search-results">
                <form class="ps-form--search-mobile" @submit.prevent="handleSubmit">
                    <div class="form-group--nest">
                        <input
                            class="form-control"
                            type="text"
                            v-model="searchText"
                            placeholder="Search products..."
                            @keyup="handleSearchProduct"
                        />
                        <button>
                            <i class="icon-magnifier"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'PanelSearch',
    data () {
        return {
            isSearching: false,
            isLoading: false,
            searchText: ''
        }
    },
    methods: {
        handleClosePanel() {
            this.$store.commit('app/setCurrentDrawerContent', null);
            this.$store.commit('app/setAppDrawer', false);
        },
        async handleSearchProduct(e) {
            if (e.target.value !== '') {
                this.isSearching = true;
                const query = {
                    search: e.target.value
                };
                this.isLoading = true;
                const result = await this.$store.dispatch(
                    'product/getProductByKeyword',
                    query
                );
                if (result) {
                    setTimeout(
                        function() {
                            this.isLoading = false;
                        }.bind(this),
                        500
                    );
                }
            } else {
                this.isSearching = false;
            }
        },
        handleSubmit() {
            if (this.searchText !== null || this.searchText !== '') {
                this.$router.push(`/store/search?keyword=${this.searchText}`);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
#panel-search {
    .navigation__content {
        padding: 10px;
    }
}
.ps-form--search-mobile {
    input {
        height: 40px;
        background-color: #ffffff;
        border: 1px solid #ddd;
        border-radius: 0;
    }

    button {
        min-width: 40px;
        height: 40px;
        background-color: #000;
        border: none;

        i {
            color: #ffffff;
        }
    }
}
</style>
