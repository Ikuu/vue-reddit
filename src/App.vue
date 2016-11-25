<template>
  <div id="app">
    <ul>
      <li>
        <router-link :to="`/r/${subreddit}/hot`">
          Hot
        </router-link>
      </li>
      <li>
        <router-link :to="`/r/${subreddit}/top`">
          Top
        </router-link>
      </li>
      <li>
        <router-link :to="`/r/${subreddit}/new`">
          New
        </router-link>
      </li>
    </ul>

    <subreddit :name="subreddit" :data="data" :filter="filter"></subreddit>

    <button @click="loadNextPage">Load Next Page</button>
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
      after: '',
      page: 25,
    };
  },
  methods: {
    // TODO: Refactor, lots of reused code.
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
        .then((j) => {
          self.data = [...self.data, ...j.data.children];
          self.after = j.data.after;
        });
    },

    // TODO: Refactor, lots of reused code.
    loadNextPage() {
      const self = this;
      const redditUrl = 'https://www.reddit.com/r';
      const subreddit = this.$route.params.subreddit;
      const filter = this.$route.params.filter || 'hot';
      const queryString = `count=${self.page}&after=${self.after}`;

      // eslint-disable-next-line no-undef
      fetch(`${redditUrl}/${subreddit}/${filter}.json?${queryString}`)
        .then(r => r.json())
        .then((j) => {
          self.data = [...self.data, ...j.data.children];
          self.after = j.data.after;
          self.page += 25;
        });
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

body {
  counter-reset: section;
}
</style>
