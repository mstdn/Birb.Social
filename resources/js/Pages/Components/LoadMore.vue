<template>
  
  <span ref="loadMoreIntersect"/>
</template>
 
<script>
export default {
  name: "Blog",
  props: ['posts'],
  mounted() {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && this.loadMorePosts(), {
      rootMargin: "-150px 0px 0px 0px"
    }));
 
    observer.observe(this.$refs.loadMoreIntersect)
  },
  data() {
    return {
      posts: this.posts.data,
      initialUrl: this.$page.url, 
    }
  },
  methods: {
    loadMorePosts() {
      if (this.posts.next_page_url === null) {
        return
      }
 
      this.$inertia.get(this.posts.next_page_url, {}, {
        preserveState: true,
        preserveScroll: true,
        only: ['posts'],
        onSuccess: () => {
          this.posts = [...this.posts, ...this.posts.data]
          window.history.replaceState({}, this.$page.title, this.initialUrl) 
        }
      })
    }
  }
}
</script>