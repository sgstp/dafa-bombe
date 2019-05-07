import Vue from 'vue';
import Router from 'vue-router';
import PageConnexion from './pages/connexion/Connexion';
import Configs from './utils/Config';

// // This synthax allows to load Page2 lazyly in a separate chunk
// const Page2: any = (resolve: any) => (require as any)(['../page2/page2'], function(module) {
//     resolve(module.default);
// });

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: Configs.pageConnexion,
            component: PageConnexion
        }
    ]
});
