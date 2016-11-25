<template lang="html">
  <div>
    <h1>{{post.title}}</h1>
    <p>{{post.url}}</p>

    <div v-if="post.secure_media">
      <embed-content :provider="post.secure_media.oembed.provider_name" :url="post.url"></embed-content>
    </div>

    <div v-else-if="imageExtensionCheck.test(post.url)">
      <img :src="post.url" alt="">
    </div>

    <div v-else>
      <p>{{post.selftext}}</p>
    </div>

    <comments :comments="comments"></comments>
  </div>
</template>

<script>
import EmbedContent from './EmbedContent';
import Comments from './Comments';

export default {
  props: ['comments', 'post'],
  components: { Comments, EmbedContent },
  data() {
    return {
      imageExtensionCheck: new RegExp('.(jpg|jpeg|png|gif)$', 'i'),
    };
  },
};
</script>

<style lang="css">
</style>
