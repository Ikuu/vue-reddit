<template lang="html">
  <div class="">
    <iframe width="100%" height="166" scrolling="no" frameborder="no" :src="`https://w.soundcloud.com/player/?url=${url}`"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Soundcloud',
  props: ['url'],
};
</script>

<style lang="css">
</style>
