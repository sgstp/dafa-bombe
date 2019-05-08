import './polyfills';
import Vue from 'vue';
import router from './router';

import VueFormGenerator from 'vue-form-generator/';
import 'vue-form-generator/dist/vfg.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss';
import PageHome from '@/app/pages/home/Home';

Vue.config.productionTip = false;

Vue.use(VueFormGenerator);

const vue = new Vue({
    router,
    template: '<app></app>',
    components: { app: PageHome }
});

vue.$mount('#app');
