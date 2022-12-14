import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/index.vue';
import store from '../store';

// Vue.use(VueRouter);
// import { createApp } from 'vue';
// const app = createApp();
// app.use(createRouter);

const routes = [
    //dashboard
    { path: '/', name: 'Home', component: Home },

    {
        path: '/index2',
        name: 'index2',
        component: () => import(/* webpackChunkName: "index2" */ '../views/index2.vue'),
    },

    // Ideal  Parameter
    {
        path: '/parameter-fisika',
        name: 'parameter-fisika',
        component: () => import(/* webpackChunkName: "tables-miscellaneous" */ '../views/components/idealParameter/kondisiAir/parameterFisika/table.vue'),
    },
    {
        path: '/parameter-fisika/create',
        name: 'parameter-fisika-create',
        component: () => import(/* webpackChunkName: "tables-miscellaneous" */ '../views/components/idealParameter/kondisiAir/parameterFisika/input.vue'),
    },
    {
        path: '/ideal-parameter/pertumbuhan-udang',
        name: 'pertumbuhan-udang',
        component: () => import(/* webpackChunkName: "tables-miscellaneous" */ '../views/components/idealParameter/pertumbuhanUdang/table.vue'),
    },
    {
        path: '/ideal-parameter/konsumsi-pakan',
        name: 'konsumsi-pakan',
        component: () => import(/* webpackChunkName: "tables-miscellaneous" */ '../views/components/idealParameter/konsumsiPakan/table.vue'),
    },
    {
        path: '/ideal-parameter/benur',
        name: 'benur',
        component: () => import(/* webpackChunkName: "tables-miscellaneous" */ '../views/components/idealParameter/benur/table.vue'),
    },
    // {
    //     path: '/ideal-parameter/edit',
    //     name: 'ideal-parameter-edit',
    //     component: () => import(/* webpackChunkName: "tables-miscellaneous" */ '../views/components/manageTambak/edit.vue'),
    // },


    // manage tambak
    {
        path: '/manage-tambak',
        name: 'manage-tambak',
        component: () => import(/* webpackChunkName: "tables-miscellaneous" */ '../views/components/manageTambak/table.vue'),
    },
    {
        path: '/manage-tambak/create',
        name: 'manage-tambak-create',
        component: () => import(/* webpackChunkName: "tables-miscellaneous" */ '../views/components/manageTambak/input.vue'),
    },
    {
        path: '/manage-tambak/edit',
        name: 'manage-tambak-edit',
        component: () => import(/* webpackChunkName: "tables-miscellaneous" */ '../views/components/manageTambak/edit.vue'),
    },

    // manage alat
    {
        path: '/manage-alat',
        name: 'manage-alat',
        component: () => import(/* webpackChunkName: "tables-miscellaneous" */ '../views/components/manageAlat/table.vue'),
    },
    {
        path: '/manage-alat/create',
        name: 'manage-alat-create',
        component: () => import(/* webpackChunkName: "tables-miscellaneous" */ '../views/components/manageAlat/input.vue'),
    },
    {
        path: '/manage-alat/edit',
        name: 'manage-alat-edit',
        component: () => import(/* webpackChunkName: "tables-miscellaneous" */ '../views/components/manageAlat/edit.vue'),
    },

        // manage energi
    {
        path: '/manage-energi',
        name: 'manage-energi',
        component: () => import(/* webpackChunkName: "tables-miscellaneous" */ '../views/components/manageEnergi/table.vue'),
    },
    {
        path: '/manage-energi/create',
        name: 'manage-energi-create',
        component: () => import(/* webpackChunkName: "tables-miscellaneous" */ '../views/components/manageEnergi/input.vue'),
    },
    {
        path: '/manage-energi/edit',
        name: 'manage-energi-edit',
        component: () => import(/* webpackChunkName: "tables-miscellaneous" */ '../views/components/manageEnergi/edit.vue'),
    },
    

    // saponin
    {
        path: '/saponin',
        name: 'saponin',
        component: () => import(/* webpackChunkName: "tables-miscellaneous" */ '../views/components/saponin/table.vue'),
    },
    {
        path: '/saponin/create',
        name: 'saponin-create',
        component: () => import(/* webpackChunkName: "tables-miscellaneous" */ '../views/components/saponin/input.vue'),
    },
    {
        path: '/saponin/edit',
        name: 'saponin-edit',
        component: () => import(/* webpackChunkName: "tables-miscellaneous" */ '../views/components/saponin/edit.vue'),
    },
];

const router = new createRouter({
    // mode: 'history',
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
});

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.layout && to.meta.layout == 'auth') {
        store.commit('setLayout', 'auth');
    } else {
        store.commit('setLayout', 'app');
    }
    next(true);
});

export default router;
