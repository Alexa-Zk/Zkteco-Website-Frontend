<template lang="html">
    <div class="ps-about-awards">
        <div class="ps-container"> 
            <div class="ps-section__header">
                <h4 data-aos="zoom-in">Enterprise Vision</h4>
            </div>
            <div class="ps-section__content">
                <div class="vision-item">
                    <h5>Brand:</h5>
                    <span
                        >To become the world's recognized leader in outstanding
                        innovation and pioneering technologies in security and
                        time management solutions.</span
                    >
                </div>
                <div class="vision-item">
                    <h5>Partners:</h5>
                    <span
                        >Cultivate a winning network of partners, maximize
                        profit margins for our partners, provide richer
                        solutions and create mutual enduring value.</span
                    >
                </div>
                <div class="vision-item">
                    <h5>Efficiency:</h5>
                    <span
                        >Be a highly effective, fast-moving and nimble
                        organization. Provide effective solutions that help
                        organizations improve management efficiencies.</span
                    >
                </div>
                <div class="vision-item">
                    <h5>Social Responsibility:</h5>
                    <span
                        >As a leading, worldwide solutions provider in the
                        industry, it is our duty to give back to society. We
                        will do our part to support worthy causes that
                        contribute to a peaceful, environmentally sound and a
                        sustainable planet.</span
                    >
                </div>
                <div class="vision-item">
                    <h5>Responsibility:</h5>
                    <span
                        >Be mindful of our commitment to our customers and
                        partners at all times. This means consistently
                        responding to the needs of our customers and partners in
                        a timely, courteous, professional and understanding
                        manner.</span
                    >
                </div>
                <div class="vision-images">
                    <div class="vision-images--item">
                        <img data-src="/img/website/about-vision-1.jpg" class="lazyload" alt="" />
                    </div>
                    <div class="vision-images--item">
                        <img data-src="/img/website/about-vision-2.jpg" class="lazyload" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutAwards',
    data() {
        return {};
    }
};
// hello there
</script>

<style lang="scss" scoped>
.ps-about-awards {
    padding: 40px 0px;
    .ps-section__header {
        max-width: unset;
        margin: 0 auto 16px;
        text-align: center;
        h4 {
            margin-bottom: 30px;
            font-size: 30px;
            color: #000;
            font-weight: 500;
        }
    }
    .ps-section__content {
        .vision-item {
            margin-bottom: 16px;
            h5 {
                color: #78bc27;
                font-size: 18px;
            }
        }
        .vision-images {
            display: flex;
            margin-top: 40px;
						@include media('<sm') {
           		display: block;
						}
						@include media('<xs') {
							display: block;
						}
            .vision-images--item {
                height: 300px;
                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
            }
        }
    }
}
</style>
