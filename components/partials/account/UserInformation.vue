<template lang="html">
    <section class="ps-my-account ps-page--account">
        <div class="container">
            <div class="row" v-if="user">
                <div class="col-lg-4">
                    <div class="ps-section__left">
                        <aside class="ps-widget--account-dashboard">
                            <div class="ps-widget__header">
                                <figure>
                                    <figcaption>Hello</figcaption>
                                    <p>
                                        {{ user.email }}
                                    </p>
                                </figure>
                            </div>
                            <div class="ps-widget__content">
                                <account-links :links="accountLinks" />
                            </div>
                        </aside>
                    </div>
                </div>
                <div class="col-lg-8">
                    <section
                        class="ps-section--account-setting"
                        v-if="toggleView === '1'"
                    >
                        <div class="ps-section__content">
                            <figure>
                                <figcaption>First Name</figcaption>
                                <p>
                                    {{ user.first_name }}
                                </p>
                            </figure>
                            <figure>
                                <figcaption>Last Name</figcaption>
                                <p>
                                    {{ user.last_name }}
                                </p>
                            </figure>
                            <figure>
                                <figcaption>Username</figcaption>
                                <p>
                                    {{ user.username }}
                                </p>
                            </figure>
                            <figure>
                                <figcaption>Phone</figcaption>
                                <p>
                                    {{ user.phone }}
                                </p>
                            </figure>
                            <figure>
                                <figcaption>Company Name</figcaption>
                                <p>
                                    {{ user.company_name }}
                                </p>
                            </figure>

                            <figure class="mt-10">
                                <button
                                    class="ps-btn"
                                    @click.prevent="toggleView = '2'"
                                >
                                    Update Profile
                                </button>
                                <button
                                    class="ps-btn ps-btn--outline ml-4"
                                    @click.prevent="toggleView = '3'"
                                >
                                    Update Password
                                </button>
                            </figure>
                        </div>
                    </section>

                    <section class="ps-section--account-setting" v-if="toggleView === '2'">
                        <div class="ps-section__content">
                            <h4 class="mb-10">Update Profile</h4>
                            <div class="form-group">
                                <input
                                    class="form-control"
                                    type="text"
                                    v-model="user.first_name"
                                    placeholder="Enter First Name"
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    class="form-control"
                                    type="text"
                                    v-model="user.last_name"
                                    placeholder="Enter Last Name"
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    class="form-control"
                                    type="text"
                                    v-model="user.phone"
                                    placeholder="Enter Phone Number"
                                />
                            </div>

                            <div class="form-group">
                                <input
                                    class="form-control"
                                    type="text"
                                    v-model="user.company_name"
                                    placeholder="Enter Company Name"
                                />
                            </div>
                           
                            <figure class="mt-10">
                                <button
                                    class="ps-btn"
                                    @click.prevent="updateProfile"
                                >
                                    Update
                                </button>
                                <button
                                    class="ps-btn ps-btn--outline ml-4"
                                    @click.prevent="toggleView = '1'"
                                >
                                    Back
                                </button>
                            </figure>
                        </div>
                    </section>

                    <section class="ps-section--account-setting" v-if="toggleView === '3'">
                        <div class="ps-section__content">
                            <h4 class="mb-10">Update Password</h4>
                            <div class="form-group">
                                <input
                                    class="form-control"
                                    type="password"
                                    v-model="new_password"
                                    placeholder="New Password"
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    class="form-control"
                                    type="password"
                                    v-model="confirm_password"
                                    placeholder="Confirm New Password"
                                />
                            </div>
                            <figure class="mt-10">
                                <button
                                    class="ps-btn"
                                    @click.prevent="updatePassword"
                                >
                                    Update
                                </button>
                                <button
                                    class="ps-btn ps-btn--outline ml-4"
                                    @click.prevent="toggleView = '1'"
                                >
                                    Back
                                </button>
                            </figure>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
import AccountLinks from './modules/AccountLinks';
export default {
    name: 'UserInformation',
    props: ["user"],
    components: { AccountLinks },
    data() {
        return {
            toggleView: '1',
            confirm_password: '',
            new_password: '',
            userInfo: {
                first_name: '',
                last_name: '',
                phone: '',
                company_name: ''
            },
            accountLinks: [
                {
                    text: 'Account Information',
                    url: '/store/account/user-information',
                    icon: 'icon-user',
                    active: true
                },
                {
                    text: 'Address',
                    url: '/store/account/addresses',
                    icon: 'icon-map-marker'
                },
                {
                    text: 'My Orders',
                    url: '/store/account/recent-viewed-product',
                    icon: 'icon-store'
                }
            ]
        };
    },
    methods: {
        updatePassword() {
            if (this.new_password === this.confirm_password) {
                console.log("Update")
            } else {
                this.$notify({
                    group: 'addCartSuccess',
                    title: 'Warning!',
                    text: `Password not the same`
                });
            }
        },
        async updateProfile() {
            let payload = {
                first_name:  this.user.first_name,
                last_name: this.user.last_name,
                phone:  this.user.phone,
                company_name:  this.user.company_name
            }
            const update = await this.$store.dispatch('auth/updateUserInformation', payload);
            if (update.status = true) {
                this.$notify({
                    group: 'addCartSuccess',
                    title: 'Success!',
                    text: `${update.message}`
                });
                this.toggleView = '1'
            } else {

            }
        }
    },
};
</script>

<style lang="scss" scoped>
.ps-btn, button.ps-btn {
    padding: 10px 15px;
}
</style>
