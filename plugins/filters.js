import Vue from 'vue';

Vue.filter('formatMoney', function(number) {
    const formatter = new Intl.NumberFormat();
    return formatter.format(number);
});
