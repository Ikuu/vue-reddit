<template lang="html">
  <div class="">
    <h1> {{name}} [{{filter}}]</h1>

    <p v-if="!data.length">Loading...</p>

    <div v-for="entry in data">
      <post-listing :post="entry.data"></post-listing>
    </div>
  </div>
</template>

<script>
import PostListing from './PostListing';

export default {
  components: { PostListing },
  props: ['data', 'filter', 'name'],
};
</script>

<style lang="css">
</style>
