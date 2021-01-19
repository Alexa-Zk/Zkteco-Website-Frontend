<template lang="html">
    <div class="" id="paypal">
        <h5>Pickup</h5>
        <div class="ps-content-information">
            <small>
                Address:
            </small>
            <strong>
                64 Adetokunbo Ademola Street, Victoria Island, Lagos
            </strong>
        </div>
        <div class="ps-content-information">
            <small>
                Hours:
            </small>
            <strong>Open ⋅ Closes 5PM</strong>
        </div>

        <div class="ps-content-information">
            <small>
                Phone:
            </small>
            <strong> 0817 555 5512</strong>
        </div>

        <pickup-delivery-method />
    </div>
</template>

<script>
export default {
    name: 'PickUpDeliveryMethod'
};
</script>

<style lang="scss" scoped>
.ps-content-information {
    justify-content: space-between;
    display: flex;
}
</style>
