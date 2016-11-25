<template lang="html">
  <div class="comment">
    <h3>{{comment.author}}</h3>

    <div v-if="comment.replies">
      <div v-for="c in comment.replies.data.children">
        <comment :comment="c.data"></comment>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: ['comment'],
};
</script>

<style lang="css">
</style>
