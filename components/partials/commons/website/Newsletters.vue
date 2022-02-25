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
                                <button class="ps-btn" @click.prevent="subscribe">
                                    {{ $t('common.subscribe') }}
                                </button>
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
            email: ''
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
            const apiKey = "bf0c6c0c71996a12c3c3e71e4ad8d941-us19";
            const server = "us6";
            const listId = "a7d3efdd10";
            const mailchimp = require("@mailchimp/mailchimp_marketing");
            mailchimp.setConfig({
                apiKey,
                server
            })
        
            try {
                
                const response = await mailchimp.lists.addListMember(listId, {
                    email_address: this.email,
                    status: 'subscribed',
                    //email_type: 'html',
                    merge_fields: {
                        FNAME: 'ZKteco',
                        LNAME: 'Website'
                    },
                     tags: ['newsletter']
                })
                
                console.log(' Mail C ',response);
            } catch (error) {
                console.log(' Mail Error ',error);
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
</style>
