import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Post from './Post';

const router = new VueRouter({
  // mode: 'history',
  // base: __dirname,
  routes: [
    {
      path: '/:subreddit?/:filter?',
      component: App,
    },
    {
      path: '/:subreddit/comments/:id',
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
          <router-link to="/cfb">cfb</router-link>
        </li>
        <li>
          <router-link to="/dota2">dota2</router-link>
        </li>
        <li>
          <router-link to="/HipHopHeads">HipHopHeads</router-link>
        </li>
        <li>
          <router-link to="/sneakers">sneakers</router-link>
        </li>
      </ul>
      <router-view class="view"></router-view>
    </div>
  `,
}).$mount('#app');
