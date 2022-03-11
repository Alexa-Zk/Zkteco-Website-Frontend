<template lang="html">
    <div class="ps-checkout ps-section--shopping">
        <div class="container">
            <div class="ps-section__content">
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <div class="ps-block--shipping">
                            <div class="ps-block--methods">
                                <v-tabs
                                    background-color="white"
                                    color="warning"
                                    class="ps-tab-list"
                                    grow
                                    v-for="item in downloadCenters"
                                    :key="item.id"
                                >
                                    <v-tab tag="li" class="tab-label">
                                        {{ item.name }}
                                    </v-tab>

                                    <v-tab-item>
                                        <form>
                                            <div class="ps-block__content">
                                                <div
                                                    class="downloads_container"
                                                    v-for="i in item.download"
                                                    :key="i.id"
                                                >
                                                    <div class="download_left">
                                                        <div class="row-left">
                                                            <div
                                                                class="download-avatar"
                                                            >
                                                                <img
                                                                    src="~/static/img/website/download-2.png"
                                                                    alt="Download"
                                                                />
                                                            </div>
                                                            <div class="title">
                                                                {{ i.name }}
                                                            </div>
                                                        </div>
                                                        <div class="size">
                                                            Size:
                                                            {{
                                                                i.file[0].size
                                                            }}MB
                                                        </div>
                                                    </div>
                                                    <div class="download_right">
                                                        <!-- <a :href="i.file[0].url" download
                                                            >Download</a
                                                        > -->
                                                        <button class="ps-btn" @click.prevent="download(i.file[0].url)">
                                                            Download
                                                        </button>

                                                        <div class="date">
                                                            Uploaded on: {{formatDate(i.file[0].updated_at)}}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </v-tab-item>
                                </v-tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { state } from '~/store/app';
export default {
    name: 'Downloads',
		props: ['downloadCenters'],
		methods: {
			formatDate(date) {
            let formated = new Date(date);
            return formated.toDateString();
        },
				download(data) {
					if (this.isLoggedInToDownload) {
						const link = document.createElement('a');
						link.href = data;
						link.setAttribute('download', 'image.jpg');
						document.body.appendChild(link);
						link.click();
						document.body.removeChild(link);
						location.href = data;
					} else {
						this.$router.push("/auth/login")
					}
				}
		},
		computed: {
			...mapState({
				isLoggedInToDownload: state => state.auth.isLoggedInToDownload
			})
		}
};
</script>

<style lang="scss" scoped>
.tab-label {
    font-size: 16px;
    text-transform: none;
    color: $color-1st;
}
.downloads_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 25px 0;
    border-bottom: 1px dashed #e6e6e6;
    @include media('<sm') {
        display: block;
    }
    @include media('<xs') {
        display: block;
    }
    .download_left {
        .row-left {
            align-items: center;
            display: flex;
            .title {
								margin-left: 20px;
								margin-left: 20px;
								font-size: 20px!important;
								font-family: 'Work Sans', sans-serif !important;

            }
        }
    }
    .download_right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        a {
            display: block;
            width: 120px;
            height: 40px;
            line-height: 38px;
            border: 1px solid #e6e6e6;
            text-align: center;
            margin-bottom: 10px;
            float: right;
            transition: all 0.5s;

            &:hover {
                color: white !important;
                background: #7cbd27;
                border: none;
            }
        }
    }
}
</style>
