<template>
    <div class="btc-contact">
        <div class="header-text">
            <h2>
                Do you need a plan tailored to you?
            </h2>

            <p>
                Contact us to request a personalized quote
            </p>
        </div>

        <nuxt-link class="btn-contact" to="#btc-contact">
            <i class="icon-telephone"></i>
            <span class="">Contact</span>
        </nuxt-link>
    </div>
</template>

<script>
import PricingItem from './modules/PricingItem';
export default {
    components: {
        PricingItem
    }
};
</script>

<style lang="scss" scoped>
h1,
h2,
h3,
span,
p,
h5,
h6 {
    color: #6c757d;
}

p {
    margin: 0;
    padding: 0;
}
.flex-center-center {
    display: flex;
    justify-content: center;
}

.btc-contact {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 100px 0px;
    background: #f8f9fa;
    padding: 70px 60px;
    transition: all .4s cubic-bezier(.165,.84,.44,1);
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.05),
        0 1.5rem 2.2rem rgba(0, 0, 0, 0.1);

    @include media('<sm') {
       display: block;
        padding: 40px 20px;
    }
    &:hover {
        box-shadow: 0 .5rem 1.2rem rgba(0,0,0,.1),0 2rem 3rem rgba(0,0,0,.15);
    }
    .header-text {
        p {
            font-size: 20px;
        }
    }

    .btn-contact {
        border-radius: 50px;
        color: #7ac143;
        padding: 1.5rem 3.375rem;
        background: white;
        box-shadow: 0 .25rem .5rem rgba(0,0,0,.05),0 1.5rem 2.2rem rgba(0,0,0,.1)!important;

        span {
            font-size: 20px;
        }
    }
}
</style>
