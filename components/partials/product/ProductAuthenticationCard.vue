<template>
    <div class="zk-authentication">
        <div class="row" v-show="productData">
            <div class="left-row">
                <div class="col">
                    <h3>Product Details</h3>
                    <div class="col-inner">
                        <div class="col-title">Serial Number:</div>
                        <span>{{
                            productData ? productData.serial_number : 'Unknown'
                        }}</span>
                    </div>
                    <div class="col-inner">
                        <div class="col-title">Model:</div>
                        <span>{{
                            productData ? productData.model : 'Unknown'
                        }}</span>
                    </div>
                    <div class="col-inner">
                        <div class="col-title">Exclusive zone:</div>
                        <span>{{
                            productData ? productData.exclusive_area : 'Unknown'
                        }}</span>
                    </div>
                    <div class="col-inner">
                        <div class="col-title">Date of manufacture:</div>
                        <span>{{
                            productData
                                ? productData.date_of_manufacture
                                : 'Unknown'
                        }}</span>
                    </div>
                </div>
                <p
                    v-if="productData && productData.status === false"
                    class="text-danger"
                >
                    {{
                        productData.message || 'Serial number not found'
                    }}
                </p>
            </div>
            <div class="right-row">
                <img v-if="productData.status === false" src="@/static/img/website/unknown.png" alt="" />
                <img
                    v-else
                    src="@/static/img/website/certified.png"
                    alt=""
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['productData']
};
</script>

<style lang="scss" scoped>
.text-danger {
    font-weight: bold;
    font-family: monospace;
    color: orangered;
}
.zk-authentication {
    .row {
        padding: 30px;
        background: #f9f9f9;
        align-items: center;
        transition: all 0.5s;
        .right-row {
            width: 50%;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
        .left-row {
            width: 50%;

            .col {
                padding: 0px;
                margin-bottom: 30px;
                h3 {
                    margin-bottom: 20px;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 20px;
                    color: #82bb31;
                }
                .col-inner {
                    display: flex;
                    align-items: center;
                    .col-title {
                        width: 50%;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 17px;
                        color: #4f4f4f;
                    }
                }
            }
        }
    }
}
</style>
