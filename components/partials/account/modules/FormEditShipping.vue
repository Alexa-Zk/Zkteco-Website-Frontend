<template lang="html">
    <form class="ps-form--edit-address" v-if="shipping">
        <div class="ps-form__header">
            <h3>Shipping address</h3>
        </div>
        <div class="ps-form__content">

            <div class="form-group">
                <label>
                    First Name <sup>*</sup>
                </label>
                <input
                    type="text"
                    placeholder=""
                    v-model="shipping.first_name"
                    class="form-control"
                />
            </div>

            <div class="form-group">
                <label>
                    Last Name <sup>*</sup>
                </label>
                <input
                    type="text"
                    placeholder=""
                    v-model="shipping.last_name"
                    class="form-control"
                />
            </div>

            <div class="form-group">
                <label>
                    Company Name <sup>*</sup>
                </label>
                <input
                    type="text"
                    placeholder=""
                    v-model="shipping.company"
                    class="form-control"
                />
            </div>

            <div class="form-group">
                <label> Country <sup>*</sup> </label>
                <input
                    type="text"
                    placeholder=""
                    v-model="shipping.country"
                    class="form-control"
                />
            </div>
            <div class="form-group">
                <label> State <sup>*</sup> </label>
                <input
                    type="text"
                    placeholder=""
                    v-model="shipping.state"
                    class="form-control"
                />
            </div>
            <div class="form-group">
                <label> City <sup>*</sup> </label>
                <input
                    type="text"
                    placeholder=""
                    v-model="shipping.city"
                    class="form-control"
                />
            </div>

            <div class="form-group">
                <label> Street Address <sup>*</sup> </label>
                <input
                    type="text"
                    placeholder=""
                    v-model="shipping.address_1"
                    class="form-control"
                />
            </div>

            <div class="form-group">
                <label>Alternative Street Address</label>
                <input
                    type="text"
                    placeholder=""
                    v-model="shipping.address_2"
                    class="form-control"
                />
            </div>

            <div class="form-group">
                <label>
                    Phone <sup>*</sup>
                </label>
                <input
                    type="text"
                    placeholder=""
                    v-model="shipping.phone"
                    class="form-control"
                />
            </div>

            
            <div class="form-group">
                <label> Postcode <sup>*</sup> </label>
                <input
                    type="text"
                    placeholder=""
                    v-model="shipping.postcode"
                    class="form-control"
                />
            </div>
            <div class="form-group submit">
                <button class="ps-btn" @click.prevent="saveAddress">
                    {{loading ? "Saving..." : "Save Shipping"}}
                </button>
            </div>
        </div>
    </form>
</template>

<script>
import { mapState } from "vuex";
export default {
    props: {
    },
    data() {
        return {
            loading: false
        }
    },
    methods: {
			async saveAddress () {
                this.loading = true
				try {
					const payload = {
                        first_name: this.shipping.first_name,
                        last_name: this.shipping.last_name,
                        company: this.shipping.company,
                        address_1: this.shipping.address_1,
                        address_2: this.shipping.address_2 ? this.shipping.address_2: '',
                        city: this.shipping.city,
                        state: this.shipping.state,
                        postcode: this.shipping.postcode,
                        country: this.shipping.country,
                        phone: this.shipping.phone 
					}
					const response = await this.$store.dispatch('auth/updateShipping', payload);
					if (response.data) {
						this.$notify({
							group: 'addCartSuccess',
							title: 'Success!',
							text: `${response.message}!`
						});
                        this.loading = false
					}

				} catch (error) {
					this.$notify({
                        group: 'addCartSuccess',
                        title: 'Success!',
                        text: `Something went wrong!`
                    });
                    this.loading = false
				}
			}
    },
    computed: {
        ...mapState({
            shipping: state => state.auth.shipping
        })
    }
    
}
</script>
