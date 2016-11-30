<template lang="html">
  <div class="listing">
      <div class="title">
        <router-link :to="post.permalink">{{ parsedTitle }}</router-link>
        <span>[{{ post.domain }}]</span>
      </div>

    <h3>Author: {{ post.author }}</h3>
    <div class="" v-if="isAll">
      <h4>Subreddit: {{ post.subreddit }}</h4>
    </div>
  </div>
</template>

<script>
import parseHtml from '../helper/HtmlParse';

export default {
  props: ['post'],
  data() {
    return {
      isAll: (this.$route.params.subreddit || 'All') === 'All',
    };
  },
  computed: {
    parsedTitle() {
      return parseHtml(this.post.title);
    },
  },
};
</script>

<style lang="css" scoped>
.title {
  font-size: 22px;
}

.listing {
  border: 1px solid #333;
  margin-bottom: 10px;
  padding-left: 20px;
  padding-top: 10px;
}

.title::before {
  counter-increment: section;
  content:  counter(section) ": ";
}
</style>
