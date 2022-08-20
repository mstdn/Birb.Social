<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Cards from '../Components/Cards.vue';
import throttle from "lodash/throttle";
import { ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";
import Pagination from '../Components/Pagination.vue';
import Empty from '../Components/Empty.vue';
import Compose from '../Components/Compose.vue';

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
            <div v-if="posts.prev_page_url !== null" class="btn-group grid grid-cols-2 my-4">
                <InertiaLink v-if="posts.prev_page_url !== null" :href="posts.prev_page_url"
                    class="btn font-bold bg-white dark:bg-dim-800 text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400">
                    Previous</InertiaLink>
                <button v-else
                    class="btn font-bold bg-white dark:bg-dim-800 text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400 btn-disabled">Previous</button>
                <InertiaLink v-if="posts.next_page_url !== null" :href="posts.next_page_url"
                    class="btn font-bold bg-white dark:bg-dim-800 text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400">
                    Next</InertiaLink>
                <button v-else
                    class="btn font-bold bg-white dark:bg-dim-800 text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400 btn-disabled">Next</button>
            </div>
        </div>



    </AppLayout>
</template>
