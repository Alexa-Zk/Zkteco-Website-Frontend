<template lang="html">
    <div>
        <div class="ps-product__content">
            <span class="list-item">Description</span>
            <div class="tab-content">
                <partial-description :product="product_information" />
            </div>
        </div>
        <div class="ps-product__content">
            <span class="list-item">Downloads</span>
            <div class="tab-content">
                <div v-if="downloadStuff">No Downloads</div>
                <div
                    class="download_container"
                    v-else
                    v-for="i in product_information.downloads"
                    :key="i.id"
                >
                    <div class="download">
                        <img
                            src="~/static/img/website/download-2.png"
                            alt="Download"
                        />
                        <h4>{{ i.name }}</h4>
                        <div class="size">Size: {{ i.file[0].size }}KB</div>
                        <a v-on:click.prevent="download(i.file[0].url)">Download</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="ps-product__content">
            <span class="list-item">Related Products</span>
            <div class="tab-content">
                <related-product
                    layout="fullwidth"
                    collection-slug="shop-recommend-items"
                />
            </div>
        </div>
        <!-- <v-tabs background-color="white" color="warning" class="ps-tab-list">
            <v-tab :ripple="false" tag="li">
                <span class="list-item">Description</span>
            </v-tab>
            <v-tab :ripple="false" tag="li">
                <span class="list-item">Downloads</span>
            </v-tab>
            <v-tab :ripple="false" tag="li">
                <span class="list-item">Related Products</span>
            </v-tab>

            <v-tab-item>
                <div class="tab-content">
                    <partial-description :product="product_information" />
                </div>
            </v-tab-item>

            <v-tab-item>
                <div class="tab-content">
                    <div v-if="downloadStuff">No Downloads</div>
                    <div
                        class="download_container"
                        v-else
                        v-for="i in product_information.downloads"
                        :key="i.id"
                    >
                        <div class="download">
                            <img
                                src="~/static/img/website/download-2.png"
                                alt="Download"
                            />
                            <h4>{{ i.name }}</h4>
                            <div class="size">Size: {{ i.file[0].size }}KB</div>
                            <a v-on:click.prevent="download(i.file[0].url)">Download</a>
                        </div>
                    </div>
                </div>
            </v-tab-item>
            <v-tab-item>
                <div class="tab-content">
                    <related-product
                        layout="fullwidth"
                        collection-slug="shop-recommend-items"
                    />
                </div>
            </v-tab-item>
        </v-tabs> -->
    </div>
</template>

<script>
import PartialDescription from '~/components/elements/detail/modules/website/PartialDescription';
import PartialSpecification from '~/components/elements/detail/modules/website/PartialSpecification';
import { mapState } from "vuex";
import RelatedProduct from '~/components/partials/product/RelatedProduct';
export default {
    name: 'DefaultDescription',
    components: {
        PartialSpecification,
        PartialDescription,
        RelatedProduct
    },
    props: {
        product_information: {
            type: Object,
            default: {}
        }
    },
    async created() {
        let payload = {
            id: this.product_information.product_category.slug
        };
        const response = await this.$store.dispatch(
            'website/getRelatedProducts',
            payload
        );
    },
    computed: {
        ...mapState({
				isLoggedInToDownload: state => state.auth.isLoggedInToDownload
			}),
        downloadStuff() {
            const isEmpty =
                Object.keys(this.product_information.downloads).length === 0;
            return isEmpty;
        }
    },
    methods: {
        download(data) {
        if (this.isLoggedInToDownload) {
            const link = document.createElement('a');
            link.href = data;
            link.setAttribute('download', 'image.jpg');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            location.href = data;
        } else {
            this.$router.push("/auth/login")
        }
        }
    }
};
</script>

<style lang="scss" scoped>
.tab-content {
    padding-top: 30px;
}
li[aria-selected='true'] {
    a {
        color: $color-heading !important;
    }
}

.ps-product__content {
    padding-top: 100px;
}
span.list-item {
    position: relative;
    display: block;
    color: #999999;
    font-size: 20px;
    line-height: 20px;
    font-weight: 600;
    margin-bottom: 4px;
    text-transform: none;
    @media screen and (min-width: 992px) {
        font-size: 30px;
    }
}

.download_container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 10px;
    .download {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        img {
            height: 100px;
            object-fit: contain;
        }
        h4 {
            margin: 10px 0px;
            font-weight: 500;
            text-transform: capitalize;
        }
        a {
            margin-top: 4px;
            font-size: 16px;
            color: #78bc27;
            font-weight: 600;
            transition: .7s all; 
            &:hover {
                color: darken($color: #78bc27, $amount: 40);
            }
        }
    }
}
</style>
