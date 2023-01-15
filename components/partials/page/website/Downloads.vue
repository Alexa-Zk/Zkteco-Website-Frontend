<template lang="html">
    <div class="ps-checkout ps-section--shopping">
        <div class="ps-container">
            <div class="row mb-10">
                <div class="col-lg-5 form-group--nest">
                    <input
                        class="form-control"
                        type="text"
                        placeholder="Please input keyword"
                        v-model="searchQuery"
                    />
                    <button class="ps-btn" @click.prevent="searchDownloads">
                        {{ isLoading ? 'Searching...' : 'Search' }}
                    </button>
                </div>
            </div>
            <div class="ps-section__content">
                <div class="">
                    <div class="col-md-12 col-sm-12">
                        <div class="ps-block--shipping" >
                            <div class="ps-block--methods" v-if="!isSearching">
                                <v-tabs
                                    background-color="white"
                                    color="warning"
                                    class="ps-tab-list"
                                    grow
                                >
                                    <v-tab
                                        tag="li"
                                        class="tab-label"
                                        v-for="item in downloadCategories"
                                        :key="item.id"
                                        @click="tabValue(item.category); fetchProductFilesByCategory(item.category)"
                                    >
                                        {{ item.category }}
                                    </v-tab>

                                    <v-tab-item v-if="!productFiles">
                                        Loading....
                                    </v-tab-item>
                                    <v-tab-item v-else-if="productFiles.length == 0">
                                        <div class="placeholder-image">
                                            <content-placeholders v-for="x in 6" :key="x">
                                                <content-placeholders-heading :img="true" />
                                                <content-placeholders-text :lines="3" />
                                        </content-placeholders>
                                        </div>
                                    </v-tab-item>
                                    <v-tab-item
                                        v-else
                                        v-for="item in downloadCategories"
                                        :key="item.id"
                                    >
                                        <form>
                                            <div class="ps-block__content" >
                                                <div class="downloads_container"
                                                    v-for="i in productFiles"
                                                    :key="i.id">
                                                    <div class="download_left">
                                                        <div class="row-left">
                                                            <div
                                                                class="download-avatar"
                                                            >
                                                                <img
                                                                    src="~/static/img/website/download-2.png"
                                                                    alt="Download"
                                                                />
                                                            </div>
                                                            <div class="title">
                                                                {{ i.name }}
                                                            </div>
                                                        </div>
                                                        <div class="size">
                                                            Size:
                                                            {{
                                                                Math.floor(
                                                                    i.file.size
                                                                )
                                                            }}KB
                                                        </div>
                                                    </div>
                                                    <div class="download_right">
                                                        <button
                                                            class="ps-btn"
                                                            @click.prevent="
                                                                download(
                                                                    i.file.url
                                                                )
                                                            "
                                                        >
                                                            Download
                                                        </button>

                                                        <div class="date">
                                                            Uploaded on:
                                                            {{
                                                                formatDate(
                                                                    i.file
                                                                        .updated_at
                                                                )
                                                            }}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </v-tab-item>
                                </v-tabs>
                            </div>
                            <div class="ps-block--methods" v-else>
                                <v-tabs
                                    background-color="white"
                                    color="warning"
                                    class="ps-tab-list"
                                    grow
                                    
                                >
                                    <v-tab
                                    v-if="searchData && searchData[0]"
                                        tag="li"
                                        class="tab-label"
                                    >
                                    {{ searchData[0].product_file_category.category }}
                                    </v-tab>
                                    <v-tab v-else>
                                        No Search Data Found
                                    </v-tab>
                                    <v-tab-item v-if="searchData">
                                        <form>
                                            <div class="ps-block__content">
                                                <div
                                                    class="downloads_container"
                                                    v-for="item1 in searchData"
                                                    :key="item1.id"
                                                >
                                                    <div class="download_left">
                                                        <div class="row-left">
                                                            <div
                                                                class="download-avatar"
                                                            >
                                                                <img
                                                                    src="~/static/img/website/download-2.png"
                                                                    alt="Download"
                                                                />
                                                            </div>
                                                            <div class="title">
                                                                {{ item1.name }}
                                                            </div>
                                                        </div>
                                                        <div class="size">
                                                            Size:
                                                            {{
                                                                Math.floor(
                                                                    item1.file
                                                                        .size /
                                                                        1000
                                                                )
                                                            }}MB
                                                        </div>
                                                    </div>
                                                    <div class="download_right">
                                                        <button
                                                            class="ps-btn"
                                                            @click.prevent="
                                                                download(
                                                                    item1.file
                                                                        .url
                                                                )
                                                            "
                                                        >
                                                            Download
                                                        </button>

                                                        <div class="date">
                                                            Uploaded on:
                                                            {{
                                                                formatDate(
                                                                    item1.file
                                                                        .updated_at
                                                                )
                                                            }}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </v-tab-item>
                                    
                                </v-tabs>
                            </div>
                           
                            <footer class="mt-60">
                                <v-pagination
                                    v-model="page"
                                    :total-visible="7"
                                    color="green"
                                    :length="paginationLenght"
                                    @input="handleChangePagination"
                                />
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { state } from '~/store/app';
export default {
    name: 'Downloads',
    data() {
        return {
            searchQuery: '',
            isSearching: false,
            searchData: null,
            currentCategory: null,
            productFiles: null,
            page: 1,
            pageSize: 5,
            totalProductFiles: 0
        };
    },
    computed: {
        ...mapState({
            isLoading: state => state.website.loading,
            isLoggedInToDownload: state => state.auth.isLoggedInToDownload,
            downloadCategories: state => state.website.downloadCategories
        }),
        currentCategoryComputed() {
            return this.downloadCategories[0].category;
        },
        paginationLenght() {
            return Math.ceil(this.totalProductFiles / this.pageSize);
        }, 
    },
    async created() {
        this.currentCategory = 'Data Sheet'
        const response = await this.$store.dispatch( 'website/fetchProductFilesByCategory', {category: this.currentCategory});
        this.productFiles = response

        this.getTotalProductFiles()
    },
    methods: {
        tabValue(event) {
            this.currentCategory = event;
            this.getTotalProductFiles()
        },
        async fetchProductFilesByCategory(category){
            this.productFiles = []
            const response = await this.$store.dispatch(
                'website/fetchProductFilesByCategory',
                {category: category}
            );
            if (response.error) {
            } else {
                this.productFiles = response;
            }
        },
        async searchDownloads() {
            let payload = {
                category: this.currentCategory
                    ? this.currentCategory
                    : this.currentCategoryComputed,
                search: this.searchQuery
            };
            const response = await this.$store.dispatch(
                'website/searchDownloadCategories',
                payload
            );
            this.isSearching = true;
            if (response.error) {
            } else {
                this.searchData = response;
            }
        },
        formatDate(date) {
            let formated = new Date(date);
            return formated.toDateString();
        },
        download(data) {
            const tokenForDownloads = this.$cookies.get('download_token', {
                parseJSON: true
            });
            if (tokenForDownloads) {
                const link = document.createElement('a');
                link.href = data;
                link.setAttribute('download', 'image.jpg');
                link.setAttribute('target', '_blank');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                this.$router.push('/auth/login');
            }
        },
        async handleChangePagination(value) {
            const slug = this.$route.params.id;
            const page = parseInt(value) === 1 ? 1 : 1 + (value - 1) * this.pageSize;
            let nextStartPage = parseInt(page);

            const payload = {
                slug: slug,
                page: nextStartPage,
                perPage: this.pageSize,
                category: this.currentCategory
            };
            const response = await this.$store.dispatch(
                'website/getPaginatedProductFiles',
                payload
            );
            this.productFiles = []
            this.productFiles = response
        },

        async getTotalProductFiles() {
            const response = await this.$store.dispatch(
                'website/getProductFilesCount',
                {category: this.currentCategory ? this.currentCategory : this.currentCategoryComputed}
            );
            this.totalProductFiles = response
        },
    },
    watch: {
        searchQuery(newEntry, oldEntry) {
            if (newEntry !== '') {
            } else {
                this.currentCategory = this.currentCategoryComputed;
                this.isSearching = false;
            }
        }
    },
    
};
</script>

<style lang="scss" scoped>
.placeholder-image {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 35px;
}
.tab-label {
    font-size: 16px;
    text-transform: none;
    color: $color-1st;
}
.downloads_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 25px 0;
    border-bottom: 1px dashed #e6e6e6;
    @include media('<sm') {
        display: block;
    }
    @include media('<xs') {
        display: block;
    }
    .download_left {
        .row-left {
            align-items: center;
            display: flex;
            .title {
                margin-left: 20px;
                margin-left: 20px;
                font-size: 20px !important;
                font-family: 'Work Sans', sans-serif !important;
            }
        }
    }
    .download_right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        a {
            display: block;
            width: 120px;
            height: 40px;
            line-height: 38px;
            border: 1px solid #e6e6e6;
            text-align: center;
            margin-bottom: 10px;
            float: right;
            transition: all 0.5s;

            &:hover {
                color: white !important;
                background: #7cbd27;
                border: none;
            }
        }
    }
}
</style>
