<template lang="html">
  <section class="">
    <h1> {{name}} [{{filter}}]</h1>

    <p v-if="!data.length">Loading...</p>

    <div v-for="entry in data">
      <post-listing :post="entry.data"></post-listing>
    </div>
  </section>
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
