<template lang="html">
    <div class="tutorial">
        <Video
            v-if="videoSubCategories"
            :videos="videoSubCategories"
            :loading="loading"
        />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Video from '~/components/partials/page/test/Video';

export default {
    components: { Video },

    transition() {
        return 'fadeIn';
    },
    layout: 'layout-default-website',

    computed: {
        title() {
            return 'Product Videos';
        },
        ...mapState({
            loading: state => state.website.loading,
            videoSubCategories: state => state.website.videoSubCategories
        })
    },
    async mounted() {
        await this.$store.dispatch('website/getVideoSubCategoryBySlug', {
            slug: 'security-solutions'
        });
    }
};
</script>

<style lang="scss" scoped>
.tutorial {
    //background: #999;
    padding: 5rem 0;
    .wrapper {
        margin: 0 auto;
        max-width: 1200px;
        display: grid;
        grid-template-columns: 3fr 1fr;
        gap: 1.8rem;

        @media (max-width: 920px) {
            display: grid;
            grid-template-columns: 1fr;
        }

        .video-wrapper {
            display: flex;
            flex-direction: column;

            .video {
                padding: 3rem 2rem;
                border-top: 1px solid #dcd8d8;
                border-left: 1px solid #dcd8d8;
                border-right: 1px solid #dcd8d8;
                border-radius: 0.5rem 0.5rem 0 0;
                header {
                    h3 {
                        font-size: 2rem;
                        font-weight: normal;
                    }
                }
            }

            footer {
                border: 1px solid #dcd8d8;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1rem;

                div:not(:last-child) {
                    border-right: 1px solid #dcd8d8;
                }
                div {
                    text-align: center;

                    div {
                        padding: 2rem;
                    }
                }
            }
        }

        .menu-wrapper {
            border-radius: 3px;
            display: flex;
            flex-direction: column;

            .menu-header {
                padding: 2rem 0 1rem 2rem;
                border: 1px solid #dcd8d8;
                border-radius: 0.5rem 0.5rem 0rem 0rem;

                h3 {
                    font-size: 2rem;
                    font-weight: normal;
                }
            }
        }
    }
}
</style>
