<template>
    <div class="btn-group grid grid-cols-2 my-4">
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
</template>

<script setup>
let props = defineProps({
    posts: Object,
});

</script>
