<script setup>
import AppLayout from '../Layouts/AppLayout.vue';
import throttle from "lodash/throttle";
import { ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";
import Cards from './Components/Cards.vue';
import SimplePagination from './Components/SimplePagination.vue';


let props = defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    posts: Object,
    filters: Object,
});

let search = ref(props.filters.search);

watch(
    search,
    throttle(function (value) {
        Inertia.get(
            "/",
            { search: value },
            {
                preserveState: true,
                replace: true,
                preserveScroll: true
            }
        );
    }, 1000)
);
</script>

<template>
    <AppLayout title="Explore &amp; Discover">

        <template #header>
            Public
        </template>

        <div class="border-b border-gray-200
                dark:border-dim-200
                min-h-screen
                border-l border-r
                ">
            <Cards v-bind:posts="posts" />
            <SimplePagination :posts="posts" />
        </div>

    </AppLayout>
</template>
