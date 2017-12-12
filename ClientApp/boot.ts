import './css/site.css';
import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    { path: '/', component: require('./components/home/home.vue') },
    { path: '/day1', component: require('./components/day1/day1.vue') },
    { path: '/day2', component: require('./components/day2/day2.vue') },
    { path: '/day3', component: require('./components/day3/day3.vue') },
    { path: '/day4', component: require('./components/day4/day4.vue') },
    { path: '/day5', component: require('./components/day5/day5.vue') },
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue'))
});
