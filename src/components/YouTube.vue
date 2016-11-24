<template lang="html">
  <iframe id="ytplayer" type="text/html" width="640" height="360" :src="`https://www.youtube.com/embed/${videoId}`" frameborder="0"></iframe>
</template>

<script>
export default {
  props: ['url'],
  data() {
    return {
      videoId: this.url.split('=')[1],
    };
  },
};
</script>

<style lang="css">
</style>
