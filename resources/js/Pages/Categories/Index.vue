<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Cards from '../Components/Cards.vue';
import throttle from "lodash/throttle";
import { ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";
import Empty from '../Components/Empty.vue';
import Compose from '../Components/Compose.vue';
import Pagination from '../Components/Pagination.vue'

let props = defineProps({
    categories: Object,
    filters: Object,
});

let search = ref(props.filters.search);

watch(
    search,
    throttle(function (value) {
        Inertia.get(
            "/categories",
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
    <AppLayout title="Categories">
        <template #header>
            {{ categories.total }} Categories
        </template>

        <div class="border-b border-gray-200
                            dark:border-dim-200
                            min-h-screen
                            border-l border-r
                            ">

            <!-- Search -->
            <div class="relative">
                <div class="p-3">
                    <div class="absolute text-gray-600 flex items-center pl-4 pb-6 h-full cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="18"
                            height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path
                                d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                            </path>
                        </svg>
                    </div>
                    <input v-model="search"
                        class="w-full bg-gray-200 dark:bg-dim-400 border-gray-200 dark:border-dim-400 text-gray-500 focus:bg-gray-100 dark:focus:bg-dim-900 focus:outline-none focus:border focus:border-blue-200 font-normal h-9 flex items-center pl-12 text-sm rounded-full border shadow"
                        placeholder="Search" />
                </div>
            </div>
            <!-- /Search -->

            <!-- Who to follow -->
            <div class="bg-gray-50 dark:bg-dim-700 rounded-2xl my-2">
                <h1
                    class="text-gray-900 dark:text-white text-md font-bold p-3 border-b border-gray-200 dark:border-dim-200">
                    Browse Categories
                </h1>

                <!-- Trending Topic -->
                <div v-for="category in categories.data" :key="category.id"
                    class="text-blue-400 text-sm font-normal p-3 border-b border-gray-200 dark:border-dim-200 hover:bg-gray-100 dark:hover:bg-dim-300 cursor-pointer transition duration-350 ease-in-out">
                    <InertiaLink :href="route('category', { id: category.slug })">
                        <h2 class="font-bold text-md text-gray-800 dark:text-white">
                            {{ category.name }}
                        </h2>
                        <p class="text-xs text-gray-400">{{ category.count }} Posts</p>
                    </InertiaLink>
                </div>
                <!-- /Trending Topic -->


                <div v-if="categories.total >= 21"
                    class="text-blue-400 text-sm font-normal p-3 hover:bg-gray-100 dark:hover:bg-dim-300 cursor-pointer transition duration-350 ease-in-out">

                    <InertiaLink v-if="categories.prev_page_url !== null" :href="categories.prev_page_url"
                        class="btn font-bold bg-white dark:bg-dim-800 text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400">
                        Previous
                    </InertiaLink>
                    <button v-else
                        class="btn font-bold bg-white dark:bg-dim-800 text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400 btn-disabled">
                        Previous
                    </button>
                    <InertiaLink v-if="categories.next_page_url !== null" :href="categories.next_page_url"
                        class="btn font-bold bg-white dark:bg-dim-800 text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400">
                        Next
                    </InertiaLink>
                    <button v-else
                        class="btn font-bold bg-white dark:bg-dim-800 text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400 btn-disabled">
                        Next
                    </button>

                    <!-- <Pagination :links="categories.links" /> -->
                </div>
            </div>
            <!-- /Who to follow -->



            <!-- <div v-if="categories.prev_page_url !== null" class="btn-group grid grid-cols-2 my-4">
                <InertiaLink v-if="categories.prev_page_url !== null" :href="categories.prev_page_url"
                    class="btn font-bold bg-white dark:bg-dim-800 text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400">
                    Previous
                </InertiaLink>
                <button v-else
                    class="btn font-bold bg-white dark:bg-dim-800 text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400 btn-disabled">
                    Previous
                </button>
                <InertiaLink v-if="categories.next_page_url !== null" :href="categories.next_page_url"
                    class="btn font-bold bg-white dark:bg-dim-800 text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400">
                    Next
                </InertiaLink>
                <button v-else
                    class="btn font-bold bg-white dark:bg-dim-800 text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400 btn-disabled">
                    Next
                </button>
            </div> -->

        </div>


    </AppLayout>
</template>
