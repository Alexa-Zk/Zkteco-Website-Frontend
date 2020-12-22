<template lang="html">
    <div class="ps-home-ads">
        <div class="ps-container">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                    <nuxt-link to="/shop">
                        <a class="ps-collection">
                            <img
                                src="/img/collection/smartlock.png"
                                alt="martfury"
                            />
                        </a>
                    </nuxt-link>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                    <nuxt-link to="/shop">
                        <a class="ps-collection">
                            <img
                                src="/img/collection/time-attendance.png"
                                alt="martfury"
                            />
                        </a>
                    </nuxt-link>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                    <nuxt-link to="/shop">
                        <a class="ps-collection">
                            <img
                                src="/img/collection/cctv.png"
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
    name: 'HomeAdsColumns'
};
</script>

<style lang="scss" scoped>
.ps-home-ads {
    padding-bottom: 50px;
}
</style>
