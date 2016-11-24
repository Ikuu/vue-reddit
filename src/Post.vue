<template>
  <div v-if="Object.keys(data).length !== 0">
    <post-content :post="data"></post-content>
  </div>
  <div v-else>
    <p>Loading</p>
  </div>
</template>

<script>
import PostContent from './components/PostContent';

export default {
  name: 'app',
  components: { PostContent },
  data() {
    return {
      subreddit: '',
      data: {},
    };
  },
  methods: {
    fetchData() {
      const self = this;
      const redditUrl = 'https://www.reddit.com/r';
      const subreddit = this.$route.params.subreddit || 'all';
      const postId = this.$route.params.id;

      // eslint-disable-next-line no-undef
      fetch(`${redditUrl}/${subreddit}/${postId}.json`)
        .then(r => r.json())
        .then(j => (self.data = j[0].data.children[0].data));
    },
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: 'fetchData',
  },
};
</script>

<style>
</style>
