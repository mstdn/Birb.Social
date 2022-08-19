<script setup>
import Pagination from "../Components/Pagination.vue";
import { ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";
import throttle from "lodash/throttle";
import AppLayout from "@/Layouts/AppLayout.vue";
import UserCard from "../Components/UserCard.vue";;

let props = defineProps({
    users: Object,
    filters: Object,
    usercount: String,
});

let search = ref(props.filters.search);

watch(
    search,
    throttle(function (value) {
        Inertia.get(
            "/community",
            { search: value },
            {
                preserveState: true,
                replace: true,
            }
        );
    }, 500)
);
</script>
<template>
    <AppLayout title="Community">
        <template #header>
            Community ({{ usercount }} users)
        </template>

        <div class="border-b border-gray-200
                dark:border-dim-200
                hover:bg-gray-100
                dark:hover:bg-dim-300
                p-2
                border-l border-r">
            <input v-model="search" type="text" class="input input-bordered input-info w-full rounded-full"
                placeholder="Search.." />
        </div>

        <div v-for="user in users.data" :key="user.id" class="
                border-b border-gray-200
                dark:border-dim-200
                hover:bg-gray-100
                dark:hover:bg-dim-300
                p-2
                border-l border-r
                ">
            <UserCard :profile="user" />
        </div>

        <Pagination class="mt-8" :links="users.links" />

    </AppLayout>
</template>