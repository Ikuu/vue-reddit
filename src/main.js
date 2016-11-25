import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Post from './Post';

const router = new VueRouter({
  // mode: 'history',
  // base: __dirname,
  routes: [
    {
      path: '/r/:subreddit?/:filter?',
      component: App,
    },
    {
      path: '/r/:subreddit/comments/:id/:title?',
      component: Post,
    },
  ],
});

Vue.use(VueRouter);
new Vue({
  router,
  template: `
    <div>
      <h1>Subreddits</h1>
      <ul>
        <li>
          <router-link to="/r/cfb">cfb</router-link>
        </li>
        <li>
          <router-link to="/r/dota2">dota2</router-link>
        </li>
        <li>
          <router-link to="/r/HipHopHeads">HipHopHeads</router-link>
        </li>
        <li>
          <router-link to="/r/sneakers">sneakers</router-link>
        </li>
      </ul>
      <router-view class="view"></router-view>
    </div>
  `,
}).$mount('#app');
