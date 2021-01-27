<template lang="html">
    <div class="ps-product-list ps-garden-kitchen ps-section--carousel-outside">
        <div class="ps-container">
            <div class="ps-section__header">
                <h3>{{productName}}</h3>
                <ul class="ps-section__links">
                    <li>
                        <nuxt-link :to="localePath('/store/shop')">
                            {{ $t('common.viewAll') }}
                        </nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="ps-section__content" v-if="products">
                <carousel-arrows type="simple" />
                <div
                    class="ps-carousel"
                    v-swiper:consumerElectronicCarousel="carouselSetting"
                >
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="product in products">
                            <product-default :product="product" />
                        </div>
                    </div>
                    <div
                        class="swiper-pagination swiper-pagination-bullets"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { carouselFullwidth } from '~/utilities/carousel-helpers.js';
import ProductDefault from '../../../elements/product/ProductDefault';
import { getColletionById, getCollectionName } from '../../../../utilities/product-helper';
import CarouselArrows from '~/components/elements/commons/CarouselArrows';

export default {
    components: { CarouselArrows, ProductDefault },
    props: {
        collectionId: {
            type: Number,
            default: 1
        }
    },
    computed: {
        ...mapState({
            collections: state => state.collection.productCategories
        }),
        products() {
            if (this.collections) {
                return getColletionById(this.collections, this.collectionId);
            } else {
                return []
            }
        },
        productName() {
            if (this.collections) {
                return getCollectionName(this.collections, this.collectionId);
            } else {
                return "No name"
            }
        }
    },
    data() {
        return {
            carouselSetting: {
                ...carouselFullwidth,
                navigation: {
                    nextEl: '.ps-garden-kitchen .swiper-next',
                    prevEl: '.ps-garden-kitchen .swiper-prev'
                }
            }
        };
    }
};
</script>
