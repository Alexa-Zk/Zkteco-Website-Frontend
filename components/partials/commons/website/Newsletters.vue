<template lang="html">
    <section class="ps-newsletter">
        <div :class="layout === 'fullwidth' ? 'ps-container' : 'container'">
            <form class="ps-form--newsletter" action="do_action" method="post">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="ps-form__left">
                            <h3>
                                {{ $t('common.newsLetter.heading') }}
                            </h3>
                            <p>
                                {{ $t('common.newsLetter.content') }}
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-7 ">
                        <div class="ps-form__right">
                            <div class="form-group--nest">
                                <input
                                    class="form-control"
                                    type="email"
                                    placeholder="Email address"
                                    v-model="email"
                                />
                                <button
                                    class="ps-btn"
                                    @click.prevent="subscribe"
                                >
                                    {{ $t('common.subscribe') }}
                                </button>
                            </div>
                            <div>
                                <p class="message">{{ message }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Newsletters',
    data() {
        return {
            email: '',
            message: ''
        };
    },
    props: {
        layout: {
            type: String,
            default: ''
        }
    },
    methods: {
        async subscribe() {
            let payload = {
                name: 'From the Website',
                email: this.email
            };
            const response = await this.$axios.$post(
                'https://admin.zkteco-wa.com/maillists',
                payload
            );
            if (response) {
                this.email = '';
                this.message = 'Thanks for subscribing to our newsletter';
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-newsletter {
    background: ghostwhite;
    // border-top: 1px solid #e1e1e1;
    // border-bottom: 1px solid #e1e1e1;
}
.message {
    color: green;
}
</style>
