<template lang="html">
    <div class="ps-payment-on-delivery" id="paypal">
        <h5>This Delivery Method is only available for orders within Lagos</h5>
        <div class="shipping-method" style="margin: 1rem 0rem;">
            <section class="select-shipping-to">
                <v-radio-group v-model="delivery_location" column>
                    <v-radio
                        label="Eko Hotel, VI & Environ"
                        value="0"
                    ></v-radio>
                    <v-radio
                        label="Ikoyi, Oniru, Maruwa, Lekki Phase 1, Ikate, Jakande,
                        Osapa, Igbo efon, Agungi, Chevron"
                        value="1000"
                    ></v-radio>
                    <v-radio
                        label="LCC-2nd toll gate, Lekki Conservative, Ikota, VGC"
                        value="1500"
                    ></v-radio>
                    <v-radio
                        label="Badore, Ajah, Abraham Adesanya, Thomas estate, Lekki
                        business school, Sangotedo ( Last stop - Novare mall)"
                        value="2000"
                    ></v-radio>
                    <v-radio
                        label="Gbagada, Anthony, Ilupeju, Fadeyi, Palm grove, Unilag,
                        Maryland, Ogudu, Ikeja GRA, Ojta, Shomolu, Bariga,
                        Oworo, Onipanu, Magodo, ikosi, Ikeja, Allen Ikeja,
                        Alausa Ikeja,Opebi Ikeja, Oregun, Agidingbi, Yaba, Ebute
                        Metta"
                        value="1501"
                    ></v-radio>
                    <v-radio
                        label="Shitta, Masha, Adeniran Ogunsanya, Bode Thomas,
                        Akerele, Ogunsanya, Adelabu and the streets around this
                        area, Berger, Ojodu, Oshodi, Isolo, itire, Ogba, Egbeda,
                        Gowon, Agege, Amuwo, Ajao Estate, Iyana ipaja, Mushin,
                        Festac, Okota, Aguda, Surulere, Sanya surulere, orile,
                        Abule-egba, Obawole, Fagba, Old Oko-oba, new Oko-oba,
                        Agege, Scheme onee, Lagos island, Eko, marina, oyigbo,
                        Costain, Ijora, Iganmu"
                        value="2001"
                    ></v-radio>
                    <v-radio label="Badagry & Environs" value="3500"></v-radio>
                    <v-radio
                        label="Other Lagos Region not Listed"
                        value="3501"
                    ></v-radio>
                </v-radio-group>
            </section>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'PayOnDeliveryMethod',
    data() {
        return {
            delivery_location: null
        };
    },
    watch: {
        delivery_location: function(newAction, oldAction) {
						const response = this.$store.dispatch(
                'shipping/getShippingCost',
                this.delivery_location
            );
        }
    }
};
</script>

<style lang="scss" scoped>
.ps-payment-on-delivery {
    h5 {
        margin-bottom: 20px;
    }
}
.shipping-method {
    label {
        width: 100%;
        cursor: pointer;
        margin-bottom: 10px;
    }
}
</style>
