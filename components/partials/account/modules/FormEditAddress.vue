<template lang="html">
    <form class="ps-form--edit-address" v-if="billing">
        <div class="ps-form__header">
            <h3>Billing address</h3>
        </div>
        <div class="ps-form__content">
            <div class="form-group">
                <label> FirstName <sup>*</sup> </label>
                <input
                    type="text"
                    v-model="billing.first_name"
                    placeholder=""
                    class="form-control"
                />
            </div>
            <div class="form-group">
                <label> Lastname <sup>*</sup> </label>
                <input
                    type="text"
                    placeholder=""
                    v-model="billing.last_name"
                    class="form-control"
                />
            </div>
            <div class="form-group">
                <label>
                    Company Name
                </label>
                <input
                    type="text"
                    placeholder=""
                    v-model="billing.company"
                    class="form-control"
                />
            </div>
            <div class="form-group">
                <label> Country <sup>*</sup> </label>
                <input
                    type="text"
                    placeholder=""
                    v-model="billing.country"
                    class="form-control"
                />
            </div>
            <div class="form-group">
                <label> Street Address <sup>*</sup> </label>
                <input
                    type="text"
                    placeholder=""
                    v-model="billing.address_1"
                    class="form-control"
                />
            </div>
            <div class="form-group">
                <label> State <sup>*</sup> </label>
                <input
                    type="text"
                    placeholder=""
                    v-model="billing.state"
                    class="form-control"
                />
            </div>
            <div class="form-group">
                <label> Postcode <sup>*</sup> </label>
                <input
                    type="text"
                    placeholder=""
                    v-model="billing.postcode"
                    class="form-control"
                />
            </div>
            <div class="form-group">
                <label> Email address <sup>*</sup> </label>
                <input
                    type="text"
                    placeholder=""
                    v-model="billing.email"
                    class="form-control"
                />
            </div>
            <div class="form-group submit">
                <button class="ps-btn" @click.prevent="saveAddress">
                    Save Address
                </button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    props: {
			billing: {
				type: Object,
				default: () => {}
			}
    },
    data() {
			return {
			}
    },
    methods: {
			async saveAddress () {
				try {
					const payload = {
						billing:  this.billing,
					}
					const response = await this.$store.dispatch('auth/register', payload);
					if (response.data) {
						this.$notify({
							group: 'addCartSuccess',
							title: 'Success!',
							text: `${response.data.message}!`
						});
					}

				} catch (error) {
					this.$notify({
							group: 'addCartSuccess',
							title: 'Success!',
							text: `Something went wrong!`
						});
				}
			}
    }
}
</script>
