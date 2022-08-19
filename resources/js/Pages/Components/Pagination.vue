<template>
  <div v-if="links.length > 3">
    <div class="mt-5 flex justify-items-center">
      <template class="btn-group" v-for="(link) in links">
        <div v-if="link.url === null" class="btn btn-xs" v-html="link.label" />
        <inertia-link v-else class="btn btn-xs" :class="{ 'btn btn-xs btn-active': link.active }" :href="link.url"
          v-html="link.label" />
      </template>
    </div>
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
