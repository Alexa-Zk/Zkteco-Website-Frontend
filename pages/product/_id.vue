<template lang="html">
    <div class="martfury">
        <bread-crumb :breadcrumb="breadCrumb" layout="fullwidth" />
        <div class="ps-page--product">
            <div class="ps-container">
                <div class="ps-page__container">
                    <div class="ps-page__left" v-if="pdt">
                        <product-detail-fullwidth :singleProduct="pdt" />
                    </div>
                    <div class="ps-page__right">
                        <div class="request-quote">
                            <request-a-quote />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductDetailFullwidth from '~/components/elements/detail/website/ProductDetailFullwidth';
import BreadCrumb from '~/components/elements/BreadCrumb';
import RelatedProduct from '~/components/partials/product/RelatedProduct';

import RequestAQuote from '~/components/elements/detail/modules/website/RequestAQuote';

export default {
    layout: 'layout-default-website',
    name: 'Products',
    transition: 'zoom',
    components: {
        RelatedProduct,
        BreadCrumb,
        ProductDetailFullwidth,
        RequestAQuote
    },
    data() {
        return {
            fullPage: true,
            products: [],
            height: 60,
            width: 40,
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Products',
                    url: '/product'
                },
                {
                    text: ''
                }
            ]
        };
    },
    async asyncData({ params, $axios }) {
        try {
            const id = params.id;
            if (id != '' || id != null || id != undefined) {
                const response = await $axios.get(
                    `https://admin.zkteco-wa.com/products?slug_in=${id}`
                );
                const pdt = response.data[0];
                return { pdt };
            }
        } catch (error) {
            console.log(error);
        }
    },

    head() {
        // /*
        try {
            let description = 'ZKTeco | Product ';
            let title = 'ZKTeco | Product ';
            let image = 'ZKTeco | Product ';
            let keywords = 'ZKTeco | Product ';

            if (
                this.$data.pdt !== null ||
                this.$data.pdt !== undefined ||
                this.$data.pdt !== ''
            ) {
                description =
                    this.$data.pdt.description == null ||
                    this.$data.pdt.description == undefined
                        ? description
                        : this.$data.pdt.description.replace(
                              /<\/?[^>]+(>|$)/g,
                              ''
                          );
                image =
                    this.$data.pdt.images[0].url == null ||
                    this.$data.pdt.images[0].url == undefined
                        ? image
                        : this.$data.pdt.images[0].url;
                title =
                    this.$data.pdt.images[0].url == null ||
                    this.$data.pdt.images[0].url == undefined
                        ? title
                        : this.$data.pdt.name;
                keywords =
                    this.$data.pdt.images[0].url == null ||
                    this.$data.pdt.images[0].url == undefined
                        ? keywords
                        : this.$data.pdt.name;
            }

            return {
                title: title,
                titleTemplate(title) {
                    return `${title}`;
                },
                meta: [
                    {
                        hid: 'title',
                        name: 'title',
                        content: title
                    },
                    {
                        hid: 'description',
                        name: 'description',
                        content: description.replace(/<\/?[^>]+(>|$)/g, '')
                    },
                    {
                        hid: 'twitter:title',
                        name: 'twitter:title',
                        content: title
                    },
                    {
                        hid: 'twitter:description',
                        name: 'twitter:description',
                        content: description.replace(/<\/?[^>]+(>|$)/g, '')
                    },
                    {
                        hid: 'twitter:image',
                        name: 'twitter:image',
                        content: image
                    },
                    {
                        hid: 'twitter:image:alt',
                        name: 'twitter:image:alt',
                        content: description.replace(/<\/?[^>]+(>|$)/g, '')
                    },
                    {
                        hid: 'og:title',
                        property: 'og:title',
                        content: title
                    },
                    {
                        hid: 'og:description',
                        property: 'og:description',
                        content: description.replace(/<\/?[^>]+(>|$)/g, '')
                    },
                    {
                        hid: 'og:image',
                        property: 'og:image',
                        content: image
                    },
                    {
                        hid: 'og:image:secure_url',
                        property: 'og:image:secure_url',
                        content: image
                    },
                    {
                        hid: 'og:image:alt',
                        property: 'og:image:alt',
                        content: description.replace(/<\/?[^>]+(>|$)/g, '')
                    },
                    {
                        hid: 'keywords',
                        name: 'keywords',
                        content: keywords
                    }
                ]
            };
        } catch (error) {
            console.log(error);
        }
        //*/
    }
};
</script>

<style lang="scss" scoped>
.request-quote {
    background: #e1f3dc; //rgb(129, 129, 129);
    padding: 1.5rem 1.5rem;

    button {
        padding: 2rem;
    }

    .form-control {
        width: 98% !important;
    }
}

.el-error {
    font-size: 14px !important;
    color: red !important;
    font-weight: lighter !important;
}
</style>
