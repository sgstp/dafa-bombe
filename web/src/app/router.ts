import Vue from 'vue';
import Router from 'vue-router';
import Configs from './utils/Config';
import PageDecompte from '@/app/pages/decompte/Decompte';
import PageAdmin from '@/app/pages/admin/Admin';

Vue.use(Router);

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: Configs.pageDecompte,
            component: PageDecompte
        },
        {
            path: '/admin',
            name: Configs.pageAdmin,
            component: PageAdmin
        }
    ]
});
