<template lang="html">
  <div class="post-content">
    <h1>{{post.title}}</h1>

    <div v-if="post.secure_media">
      <embed-content :provider="post.secure_media.oembed.provider_name" :post="post"></embed-content>
    </div>

    <div v-else-if="post.domain === 'imgur.com'">
      <img :src="post.preview.images[0].source.url" :alt="post.title">
    </div>

    <div v-else-if="post.domain === 'instagram.com'">
      <instagram :embed="post.media_embed.content"></instagram>
    </div>

    <div v-else-if="imageExtensionCheck.test(post.url)">
      <img :src="post.url" :alt="post.title">
    </div>

    <div v-else-if="post.domain === 'i.reddituploads.com'">
      <img :src="post.preview.images[0].source.url" :alt="post.title">
    </div>

    <div v-else>
      <p>{{post.selftext}}</p>
    </div>

    <comments :comments="comments"></comments>
  </div>
</template>

<script>
import Comments from './Comments';
import EmbedContent from './EmbedContent';
import Instagram from './Instagram';

export default {
  props: ['comments', 'post'],
  components: { Comments, EmbedContent, Instagram },
  data() {
    return {
      imageExtensionCheck: new RegExp('.(jpg|jpeg|png|gif)$', 'i'),
    };
  },
  created() {
    document.title = this.post.title;
  },
};
</script>

<style lang="css">
</style>
