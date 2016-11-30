<template lang="html">
  <div class="embed-content">
    <div v-if="provider === 'SoundCloud'">
      <soundcloud :url="post.url"></soundcloud>
    </div>

    <div v-else-if="provider === 'Imgur'">
      <img :src="post.preview.images[0].source.url" :alt="post.title">
    </div>

    <div v-else-if="provider === 'YouTube'">
      <youtube :url="post.url"></youtube>
    </div>
  </div>
</template>

<script>
import Soundcloud from './SoundCloud';
import Youtube from './YouTube';

export default {
  props: ['provider', 'post'],
  components: { Soundcloud, Youtube },
};
</script>

<style lang="css">
</style>
