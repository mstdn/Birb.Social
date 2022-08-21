<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Cards from '../Components/Cards.vue';
import throttle from "lodash/throttle";
import { ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";
import Pagination from '../Components/Pagination.vue';
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
            "/public",
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
    <AppLayout title="Public">
        <template #header>
            Public
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

            <Cards v-bind:posts="posts" />
            <SimplePagination :posts="posts" />
        </div>



    </AppLayout>
</template>
