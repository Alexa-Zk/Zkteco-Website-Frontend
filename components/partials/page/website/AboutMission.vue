<template lang="html">
    <div class="ps-about-awards">
        <div class="ps-container">
            <div class="ps-section__header">
                <h4>Enterprise Mission</h4>
                <p>
                    ZKTeco's goal is to share our highly developed, revolutionary biometric technology to benefit businesses and people.
                </p>
            </div>
            <div class="ps-section__content">
              <img data-src="/img/website/about-mission.jpg" class="lazyload" alt="enterprise mission" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutAwards',
    data() {
        return {
        };
    }
};
</script>

<style lang="scss" scoped>
.ps-about-awards {
	padding: 40px 0px;
    // background: white;
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
			
		}
}
</style>
