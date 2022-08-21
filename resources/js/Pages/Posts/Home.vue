<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Cards from '../Components/Cards.vue';
import throttle from "lodash/throttle";
import { ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";
import Empty from '../Components/Empty.vue';
import Compose from '../Components/Compose.vue';
import SimplePagination from '../Components/SimplePagination.vue';

let props = defineProps({
    posts: Object,
    filters: Object,
});

let search = ref(props.filters.search);

watch(
    search,
    throttle(function (value) {
        Inertia.get(
            "/home",
            { search: value },
            {
                preserveState: true,
                replace: true,
                preserveScroll: true
            }
        );
    }, 500)
);

</script>
<template>
    <AppLayout title="Home">
        <template #header>
            Home
        </template>
        <Compose />

        <div class="border-b border-gray-200
                            dark:border-dim-200
                            min-h-screen
                            border-l border-r
                            ">

            <div v-if="posts.total === 0">
                <Empty />
            </div>

            <Cards :posts="posts" />
            <SimplePagination v-if="posts.total >= 21" :posts="posts" />
        </div>

    </AppLayout>
</template>
