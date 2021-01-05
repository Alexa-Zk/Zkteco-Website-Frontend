<template lang="html">
    <div class="table-responsive">
        <table class="table ps-table--faqs">
            <tbody>
                <div class="row" v-for="item in faqs" :key="item.id">
                    <tr>
                        <td class="heading" rowSpan="3">
                            <h4>{{ item.name }}</h4>
                        </td>
                        <td class="question">
                            What Platform Are Available?
                        </td>
                        <td>
                            You can reach us on social media or contact or sales reps to provide support
                        </td>
                    </tr>

                    <tr v-for="i in item.content" :key="i.id">
                        <td class="heading" rowSpan="3"></td>
                        <td class="question">{{i.title }}</td>
                        <td v-html="i.description"></td>
                    </tr>
                </div>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Faqs',
    props: ['faqs']
};
</script>

<style lang="scss" scoped>
.ps-table--faqs {
    h4 {
        text-transform: capitalize;
    }
}
</style>
