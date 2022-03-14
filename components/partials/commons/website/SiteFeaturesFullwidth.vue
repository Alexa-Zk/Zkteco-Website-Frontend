<template lang="html">
    <div class="ps-site-features">
        <div class="ps-container">
            <h1>ZKTeco West Africa</h1>
            <h3>ZKTeco Insight into the Market</h3>
            <div class="ps-block--site-features">
                <nuxt-link
                    to="/product-categories/time-attendance"
                    class="ps-block__item"
                >
                    <div class="ps-block__left">
                        <img
                            src="~/static/img/website/time-attendance-icon.webp"
                            alt="Time Attendance"
                            width="60"
                            height="60"
                        />
                    </div>
                    <div class="ps-block__right">
                        <h4>
                            Time Attendance
                        </h4>
                        <p>
                            Time Attendance Solution
                        </p>
                    </div>
                </nuxt-link>

                <nuxt-link
                    to="/product-categories/access-control"
                    class="ps-block__item"
                >
                    <div class="ps-block__left">
                        <img
                            src="~/static/img/website/access-control-icon.webp"
                            alt="Access Control"
                            width="60"
                            height="60"
                        />
                    </div>
                    <div class="ps-block__right">
                        <h4>
                            Access Control
                        </h4>
                        <p>Restriction to certain areas</p>
                    </div>
                </nuxt-link>

                <nuxt-link
                    to="/product-categories/smart-lock"
                    class="ps-block__item"
                >
                    <div class="ps-block__left">
                        <img
                            src="~/static/img/website/smart-lock-icon.webp"
                            alt="Smart Lock"
                            width="60"
                            height="60"
                        />
                    </div>
                    <div class="ps-block__right">
                        <h4>
                            Smart Lock
                        </h4>
                        <p>
                            100% Secure locks
                        </p>
                    </div>
                </nuxt-link>

                <nuxt-link
                    to="product-categories/entrance-control"
                    class="ps-block__item"
                >
                    <div class="ps-block__left">
                        <img
                            src="~/static/img/website/entrance-control-icon.webp"
                            alt="Entrance Control"
                            width="60"
                            height="60"
                        />
                    </div>
                    <div class="ps-block__right">
                        <h4>
                            Entrance Control
                        </h4>
                        <p>
                            Dedicated System for entrance control
                        </p>
                    </div>
                </nuxt-link>
                <nuxt-link
                    to="product-categories/security-inspection"
                    class="ps-block__item"
                >
                    <div class="ps-block__left">
                        <img
                            src="~/static/img/website/security-inspection-icon.webp"
                            alt="Security Inspection"
                            width="60"
                            height="60"
                        />
                    </div>
                    <div class="ps-block__right">
                        <h4>
                            Security Inspection
                        </h4>
                        <p>
                            Support security essentials
                        </p>
                    </div>
                </nuxt-link>
                <nuxt-link to="/product-categories/cctv" class="ps-block__item">
                    <div class="ps-block__left">
                        <img
                            src="~/static/img/website/cctv.webp"
                            alt="CCTV"
                            width="60"
                            height="60"
                        />
                    </div>
                    <div class="ps-block__right">
                        <h4>
                            CCTV
                        </h4>
                        <p>Monitor everywhere at once</p>
                    </div>
                </nuxt-link>
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
    padding-top: 60px !important;
    padding-bottom: 10px !important;
    h1 {
        opacity: 0;
        font-size: 1px;
    }
    h3 {
        margin-bottom: 60px;
        text-align: center;
        font-size: 24px;
        color: #000;
    }
    .ps-block--site-features {
        border: 1px solid #78bc27;
        .ps-block__left {
            display: flex;
            justify-content: center;
            img {
                width: 60px;
                height: 60px;
                object-fit: cover;
            }
        }
    }
}
</style>
