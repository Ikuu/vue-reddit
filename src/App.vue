<template>
  <div id="app">
    <ul>
      <li>
        <router-link :to="`/${subreddit}/hot`">
          Hot
        </router-link>
      </li>
      <li>
        <router-link :to="`/${subreddit}/top`">
          Top
        </router-link>
      </li>
      <li>
        <router-link :to="`/${subreddit}/new`">
          New
        </router-link>
      </li>
    </ul>

    <subreddit :name="subreddit" :data="data" :filter="filter"></subreddit>
  </div>
</template>

<script>
import Subreddit from './components/Subreddit';

export default {
  name: 'app',
  components: { Subreddit },
  data() {
    return {
      filter: '',
      subreddit: '',
      data: [],
    };
  },
  methods: {
    fetchData() {
      const self = this;
      const redditUrl = 'https://www.reddit.com/r';
      const subreddit = this.$route.params.subreddit || 'all';
      const filter = this.$route.params.filter || 'hot';

      self.subreddit = subreddit;
      self.filter = filter;
      self.data = [];

      // eslint-disable-next-line no-undef
      fetch(`${redditUrl}/${subreddit}/${filter}.json`)
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
* {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

#app {
  color: #2c3e50;
}
</style>
