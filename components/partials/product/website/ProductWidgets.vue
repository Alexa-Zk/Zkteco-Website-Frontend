<template lang="html">
    <section>
        <aside class="widget widget_product widget_features">
            <p><i class="icon-network"></i> Recognized worldwide</p>
            <p>
                <i class="icon-3d-rotate"></i>
                Security essentials, easy to install
            </p>
            <p>
                <i class="icon-credit-card"></i> Pay online or when receiving
                goods with
                <nuxt-link to="/store">
                    Store!
                </nuxt-link>
            </p>
        </aside>
        <aside class="widget widget_sell-on-site">
            <p>
                <i class="icon-store"></i>Buy Products?
                <nuxt-link to="/store">
                    Click Here !
                </nuxt-link>
            </p>
        </aside>
        <aside class="widget widget_ads">
            <nuxt-link to="/store">
                
                    <img
                        src="~/static/img/collection/cctv.png"
                        alt="zkteco-product-ads"
                    />
                
            </nuxt-link>
        </aside>
    </section>
</template>

<script>
import { mapState } from 'vuex';
import { getColletionBySlug } from '~/utilities/product-helper';
import ProductDefault from '~/components/elements/product/ProductDefault';

export default {
    name: 'ProductWidgets',
    components: { ProductDefault },
    props: {
        collectionSlug: {
            type: String,
            default: ''
        }
    },

    computed: {
        ...mapState({
            collections: state => state.collection.collections
        }),
        products() {
            return getColletionBySlug(this.collections, this.collectionSlug);
        }
    }
};
</script>

<style lang="scss" scoped></style>
