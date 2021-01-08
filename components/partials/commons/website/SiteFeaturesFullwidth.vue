<template lang="html">
    <div class="ps-site-features">
        <div class="ps-container">
            <h3>ZKTeco Insight into the Market</h3>
            <div class="ps-block--site-features">
                <div class="ps-block__item">
                    <div class="ps-block__left">
                        <i class="icon-clock"></i>
                    </div>
                    <div class="ps-block__right">
                        <h4>
                            {{ $t('Time Attendance') }}
                        </h4>
                        <p>
                            {{ $t('Time Attendance Solution') }}
                        </p>
                    </div>
                </div>
                <div class="ps-block__item">
                    <div class="ps-block__left">
                        <i class="icon-accessibility"></i>
                    </div>
                    <div class="ps-block__right">
                        <h4>
                            {{ $t('Access Control') }}
                        </h4>
                        <p>{{ $t('Restriction to certain areas') }}</p>
                    </div>
                </div>

                <div class="ps-block__item">
                    <div class="ps-block__left">
                        <i class="icon-lock"></i>
                    </div>
                    <div class="ps-block__right">
                        <h4>
                            {{ $t('Smart Lock') }}
                        </h4>
                        <p>
                            {{ $t('100% Secure locks') }}
                        </p>
                    </div>
                </div>
                <div class="ps-block__item">
                    <div class="ps-block__left">
                        <i class="icon-surveillance2"></i>
                    </div>
                    <div class="ps-block__right">
                        <h4>
                            {{ $t('Entrance Control') }}
                        </h4>
                        <p>
                            {{ $t('Dedicated System for entrance control') }}
                        </p>
                    </div>
                </div>
                <div class="ps-block__item">
                    <div class="ps-block__left">
                        <i class="icon-surveillance"></i>
                    </div>
                    <div class="ps-block__right">
                        <h4>
                            {{ $t('Security Inspection') }}
                        </h4>
                        <p>
                            {{ $t('Support security essentials') }}
                        </p>
                    </div>
                </div>
                <div class="ps-block__item">
                    <div class="ps-block__left">
                        <i class="icon-camera"></i>
                    </div>
                    <div class="ps-block__right">
                        <h4>
                            {{ $t('CCTV') }}
                        </h4>
                        <p>{{ $t('Monitor everywhere at once ') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SiteFeauturesFullwidth'
};
</script>

<style lang="scss" scoped>
.ps-site-features {
    padding-top: 60px!important;
    padding-bottom: 10px !important;
    h3 { 
        margin-bottom: 60px;
        text-align: center;
        font-size: 24px;
        color: #000;
    }
    .ps-block--site-features{
        border: 1px solid #78bc27;
    }
}
</style>
