import Vue from 'vue';
import Router from 'vue-router';
import Configs from './utils/Config';
import PageDecompte from '@/app/pages/decompte/Decompte';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: Configs.pageDecompte,
            component: PageDecompte
        }
    ]
});
