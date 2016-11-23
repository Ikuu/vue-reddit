<template>
  <div id="app">
    <h1> {{ subreddit}} </h1>

    <p v-if="!data.length">Loading...</p>

    <div v-for="entry in data">
      <a :href="`http://www.reddit.com${entry.data.permalink}.json`">
        <h2>{{ entry.data.title }}</h2>
      </a>

      <h3>{{ entry.data.author }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      subreddit: '',
      data: [],
    };
  },
  methods: {
    fetchData() {
      const self = this;
      const redditUrl = 'https://www.reddit.com/r';
      const subreddit = this.$route.params.subreddit || 'all';

      // Reset State
      self.data = [];
      self.subreddit = subreddit;

      // eslint-disable-next-line no-undef
      fetch(`${redditUrl}/${subreddit}.json`)
        .then(r => r.json())
        .then(j => (self.data = j.data.children));
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
