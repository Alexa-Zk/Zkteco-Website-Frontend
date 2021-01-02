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
                                >
                                    <v-tab tag="li" class="tab-label">
                                        Software
                                    </v-tab>
                                    <v-tab tag="li" class="tab-label">
                                        Manual
                                    </v-tab>
                                    <v-tab-item>
                                        <form>
                                            <div class="ps-block__content">
                                                No Software Uploaded
                                            </div>
                                        </form>
                                    </v-tab-item>
                                    <v-tab-item>
                                        <div class="ps-block__content">
                                            No Manual Uploaded
                                        </div>
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

export default {
    name: 'Downloads',
};
</script>

<style lang="scss" scoped></style>
