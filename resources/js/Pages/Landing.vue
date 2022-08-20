<script setup>
import AppLayout from '../Layouts/AppLayout.vue';
import throttle from "lodash/throttle";
import { ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";
import Pagination from './Components/Pagination.vue';
import Cards from './Components/Cards.vue';

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
            <div class="btn-group grid grid-cols-2">
                <InertiaLink v-if="posts.prev_page_url !== null" :href="posts.prev_page_url"
                    class="btn btn-xs">Previous</InertiaLink>
                <button v-else class="btn btn-xs btn-disabled">Previous</button>
                <InertiaLink v-if="posts.next_page_url !== null" :href="posts.next_page_url"
                    class="btn btn-xs">Next</InertiaLink>
                <button v-else class="btn btn-xs btn-disabled">Next</button>
            </div>
         </div>

    </AppLayout>
</template>
