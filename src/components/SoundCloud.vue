<template lang="html">
  <iframe width="100%" height="166" scrolling="no" frameborder="no" :src="`https://w.soundcloud.com/player/?url=${url}`"></iframe>
</template>

<script>
export default {
  props: ['url'],
};
</script>

<style lang="css">
</style>
