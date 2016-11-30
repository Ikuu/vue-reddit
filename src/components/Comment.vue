<template lang="html">
  <div class="comment">
    <h3>{{comment.author}}</h3>
    <div v-html="comment.body"></div>

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
.comment {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}

.comment .comment {
  border: none;
  margin-bottom: 0;
  padding-left: 10px;
}
</style>
