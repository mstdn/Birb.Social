import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import AppLayout from '@/Layouts/AppLayout.vue';
import VuePlyr from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css';
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";


const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Kitter';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .component('InertiaHead', Head)
            .component('InertiaLink', Link)
            .component('AppLayout', AppLayout)
            .component("infinite-loading", InfiniteLoading)
            .use(VuePlyr, {
                plyr: {}
              })
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
