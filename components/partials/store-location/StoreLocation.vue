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
                        <h3 class="store-name">{{ store.name }}</h3>
                        <p>{{ store.address }}</p>
                        <div v-for="item in store.personel" :key="item.id">
                            <span class="personel_name" v-if="item.name">{{ item.name }}:</span>
                            <span v-for="phone in item.phone" v-if="item.name">
                                {{ phone }}
                            </span>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import Store from "~/static/svg/Store.vue";
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
    }
};
</script>

<style lang="scss" scoped>
.icon--store {
    background: #F2F2F2;
    height: 34px;
    width: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}
</style>
