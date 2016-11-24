<template lang="html">
  <div>
    <h1>{{subreddit}}</h1>
    <h2>Post Page</h2>
    <p>
      <h1>{{post.title}}</h1>
      <p>{{post.selftext}}</p>
      <p>{{post.url}}</p>

      <div v-if="post.secure_media">
        <embed-content :provider="post.secure_media.oembed.provider_name" :url="post.url"></embed-content>
      </div>
    </p>
  </div>
</template>

<script>
import EmbedContent from './EmbedContent';

export default {
  props: ['post'],
  components: { EmbedContent },
};
</script>

<style lang="css">
</style>
