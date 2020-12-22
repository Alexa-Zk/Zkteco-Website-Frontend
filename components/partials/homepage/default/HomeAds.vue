<template lang="html">
    <div class="ps-home-ads">
        <div class="ps-container">
            <div class="row">
                <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 ">
                    <nuxt-link to="/shop">
                        <a class="ps-collection">
                            <img
                                src="~/static/img/collection/time-attendance.png"
                                alt="martfury"
                            />
                        </a>
                    </nuxt-link>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                    <nuxt-link to="/shop">
                        <a class="ps-collection">
                            <img
                                src="~/static/img/collection/home-ad-2.png"
                                alt="martfury"
                            />
                        </a>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeAds'
};
</script>

<style lang="scss" scoped>
.ps-collection {
    height: 219px;
    img {
        object-fit: cover;
        height: 100%;
    }
}
</style>
