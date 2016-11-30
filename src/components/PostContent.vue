<template lang="html">
  <div class="post-content">
    <h1>{{post.title}}</h1>
    <p>{{post.url}}</p>

    <div v-if="post.secure_media">
      <embed-content :provider="post.secure_media.oembed.provider_name" :url="post.url"></embed-content>
    </div>

    <div v-else-if="imageExtensionCheck.test(post.url)">
      <img :src="post.url" :alt="post.title">
    </div>

    <div v-else-if="post.domain === 'i.reddituploads.com'">
      <img :src="post.url" :alt="post.title">
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
  created() {
    document.title = this.post.title;
    const reg = /&amp;/gi;
    const parsedUrl = this.post.url.replace(reg, '&');
    this.post.url = parsedUrl;
  },
};
</script>

<style lang="css">
</style>
