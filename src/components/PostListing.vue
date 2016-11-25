<template lang="html">
  <div class="listing">
      <div class="title">
        <router-link :to="post.permalink">{{ post.title }}</router-link>
        <span>[{{ post.domain }}]</span>
      </div>

    <h3>Author: {{ post.author }}</h3>
  </div>
</template>

<script>
export default {
  props: ['post'],
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
  counter-increment: section;                /* Increment the section counter*/
  content:  counter(section) ": "; /* Display the counter */
}
</style>
