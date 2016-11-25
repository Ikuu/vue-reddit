<template lang="html">
  <div class="">
      <div class="title">
        <router-link :to="link">{{ post.title }}</router-link>
        <span>[{{ post.domain }}]</span>
      </div>

    <h3>{{ post.author }}</h3>
  </div>
</template>

<script>
export default {
  props: ['post'],
  data() {
    return {
      link: `/${this.post.subreddit}/comments/${this.post.id}`,
    };
  },
};
</script>

<style lang="css" scoped>
.title {
  font-size: 22px;
}
</style>
