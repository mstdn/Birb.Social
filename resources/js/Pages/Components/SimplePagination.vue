<template>
    <div class="btn-group grid grid-cols-2">
        <InertiaLink v-if="posts.prev_page_url !== null" :href="posts.prev_page_url" class="btn btn-sm btn-outline">Previous</InertiaLink>
        <InertiaLink v-if="posts.next_page_url !== null" :href="posts.next_page_url" class="btn brn-sm btn-outline">Next</InertiaLink>
    </div>
</template>

<script>
import { InertiaLink } from "@inertiajs/inertia-vue3";

export default {
    props: {
        links: Array,
    },
    components: {
        InertiaLink
    }
}
</script>
