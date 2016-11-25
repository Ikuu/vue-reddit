<template lang="html">
  <div class="">
    <h3>{{comment.author}}</h3>

    <p v-if="Object.keys(comment.replies).length !== 0">
      <div v-for="c in comment.replies.data.children">
        <comment :comment="c.data"></comment>
      </div>
    </p>
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
