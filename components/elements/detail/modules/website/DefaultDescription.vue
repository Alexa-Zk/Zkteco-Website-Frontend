<template lang="html">
    <div>
        <v-tabs background-color="white" color="warning" class="ps-tab-list ">
            <v-tab :ripple="false" tag="li" class="tab-label">
                <span class="tab-label">Description</span>
            </v-tab>
            <v-tab :ripple="false" tag="li">
                <span class="tab-label">Downloads</span>
            </v-tab>
            <v-tab :ripple="false" tag="li">
                <span class="tab-label">Product Videos</span>
            </v-tab>
            <v-tab :ripple="false" tag="li">
                <span class="tab-label">Related Products</span>
            </v-tab>
            <v-tab :ripple="false" tag="li" class="quote">
                <span class="tab-label">Request A Quote</span>
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
                        v-for="i in product_information.product_files"
                        :key="i.id"
                    >
                        <div class="download">
                            <img
                                src="~/static/img/website/download-2.png"
                                alt="Download"
                            />
                            <h4>{{ i.name }}</h4>
                            <div class="size">Size: {{ i.file.size }}KB</div>
                            <a v-on:click.prevent="download(i.file.url)"
                                >Download</a
                            >
                        </div>
                    </div>
                </div>
            </v-tab-item>

            <v-tab-item>
                <div class="tab-content">
                    <div v-if="downloadStuff">No Downloads</div>
                    <div
                        class="download_container"
                        v-else
                        v-for="i in product_information.product_videos"
                        :key="i.id"
                    >
                        <div class="download">
                            <iframe
                                width="100%"
                                height="315"
                                :src="i.url"
                                frameborder="0"
                                allowfullscreen
                            ></iframe>
                            <h4>{{ i.name }}</h4>
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

            <v-tab-item>
                <div class="tab-content quote">
                    <request-a-quote />
                </div>
            </v-tab-item>
        </v-tabs>
    </div>
</template>

<script>
import PartialDescription from '~/components/elements/detail/modules/website/PartialDescription';
import PartialSpecification from '~/components/elements/detail/modules/website/PartialSpecification';
import { mapState } from 'vuex';
import RelatedProduct from '~/components/partials/product/RelatedProduct';
import RequestAQuote from '~/components/elements/detail/modules/website/RequestAQuote';

export default {
    name: 'DefaultDescription',
    components: {
        PartialSpecification,
        PartialDescription,
        RelatedProduct,
        RequestAQuote
    },
    data() {
        return {
            videoUrl: null
        };
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
                location.href = data;
            } else {
                this.$router.push('/auth/login');
            }
        }
    }
};
</script>

<style lang="scss" scoped>
// .quote {
//     display: none;
// }
.tab-label {
    font-size: 20px;
    text-transform: none;
    color: #999;
    font-weight: bold;
}
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
    grid-template-columns: 1fr 1fr;
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
            font-weight: 600;
            transition: 0.7s all;
            &:hover {
                color: darken($color: #78bc27, $amount: 40);
            }
        }
    }
}
.quote {
    display: none;
}

@media screen and (max-width: 568px) {
    .quote {
        display: flex;
    }

    input,
    textarea {
        width: 80vw;
    }
}
</style>
