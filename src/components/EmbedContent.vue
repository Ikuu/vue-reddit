<template lang="html">
  <div class="embed-content">
    <div v-if="provider === 'YouTube'">
      <youtube :url="url"></youtube>
    </div>

    <div v-else-if="provider === 'SoundCloud'">
      <soundcloud :url="url"></soundcloud>
    </div>
  </div>
</template>

<script>
import Soundcloud from './SoundCloud';
import Youtube from './YouTube';

export default {
  props: ['provider', 'url'],
  components: { Soundcloud, Youtube },
};
</script>

<style lang="css">
</style>
