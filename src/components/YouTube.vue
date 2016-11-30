<template lang="html">
  <iframe id="ytplayer" type="text/html" width="640" height="360" :src="`https://www.youtube.com/embed/${videoId}`" frameborder="0"></iframe>
</template>

<script>
export default {
  name: 'Youtube',
  props: ['url'],
  data() {
    return {
      videoId: '',
    };
  },
  created() {
    if (this.url.includes('youtu.be')) {
      this.videoId = this.url.split('/')[3];
    } else {
      this.videoId = this.url.split('=')[1];
    }
  },
};
</script>

<style lang="css">
</style>
