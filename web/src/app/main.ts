import './polyfills';
import Vue from 'vue';
import router from './router';

import VueFormGenerator from 'vue-form-generator/';
import 'vue-form-generator/dist/vfg.css';

import 'vue2-animate/dist/vue2-animate.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss';
import PageHome from '@/app/pages/home/Home';

Vue.config.productionTip = false;

Vue.use(VueFormGenerator);

// declare module 'vue/types/vue' {
//     interface Vue {
//         readonly $stelApi: AxiosRestApplicationClient;
//     }
// }
// (Vue.prototype as any).$stelApi = new AxiosRestApplicationClient('http://127.0.0.1:8080');

const vue = new Vue({
    router,
    template: '<app></app>',
    components: { app: PageHome }
});

vue.$mount('#app');
