<template lang="html">
  <div class="embed-content">
    <div v-if="provider === 'YouTube'">
      <youtube :url="url"></youtube>
    </div>

    <div v-if="provider === 'SoundCloud'">
      <soundcloud :url="url"></soundcloud>
    </div>
  </div>
</template>

<script>
import SoundCloud from './SoundCloud';
import YouTube from './YouTube';

export default {
  props: ['provider', 'url'],
  components: { SoundCloud, YouTube },
};
</script>

<style lang="css">
</style>
