<template lang="html">
  <div class="comments">
    <h1>Comments</h1>

    <div v-for="comment in comments">
      <comment :comment="comment.data"></comment>
    </div>
  </div>
</template>

<script>
import Comment from './Comment';

export default {
  components: { Comment },
  props: ['comments'],
};
</script>

<style lang="css">
</style>
