<template lang="html">
  <div class="comment">
    <h3>{{comment.author}}</h3>
    <div v-html="parsedCommentBody"></div>

    <span v-if="comment.replies" @click="hideChildren">
      Hide
    </span>

    <div v-if="comment.replies && showChildren">
      <div v-for="c in comment.replies.data.children">
        <comment :comment="c.data"></comment>
      </div>
    </div>
  </div>
</template>

<script>
import parseHtml from '../helper/HtmlParse';

export default {
  name: 'Comment',
  props: ['comment'],
  data() {
    return {
      showChildren: true,
    };
  },
  computed: {
    parsedCommentBody() {
      if (this.comment.body_html) {
        return parseHtml(this.comment.body_html);
      }
      return '';
    },
  },
  methods: {
    hideChildren() {
      this.showChildren = !this.showChildren;
    },
  },
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
