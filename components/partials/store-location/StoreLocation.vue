<template lang="html">
    <div class="ps-store--locator">
        <div class="ps-locator__content">
            <template v-if="store">
                <div class="row">
                    <div class="col-lg-1">
                        <div class="icon--store">
                            <store />
                        </div>
                    </div>
                    <div class="col-lg-11">
                        <a
                            :href="
                                `http://maps.google.com/?q=${store.location}`
                            "
                            target="_blank"
                        >
                            <h3 class="store-name">
                                {{ store.name }}
                            </h3>
                        </a>
                        <p>{{ store.location }}</p>
                        <div
                            v-for="item in store.personal_information"
                            :key="item.id"
                        >
                            <span class="personel_name" v-if="item.fullname"
                                >{{ item.fullname }}:</span
                            >
                            <span v-for="data in item.phone_numbers">
                                0{{ data.number }}
                            </span>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import Store from '~/static/svg/Store.vue';
export default {
    name: 'StoreLocation',
    components: {
        Store
    },
    props: {
        store: {
            type: Object,
            default: () => {}
        }
    },
};
</script>

<style lang="scss" scoped>
.icon--store {
    background: #f2f2f2;
    height: 34px;
    width: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}
</style>
