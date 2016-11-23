import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/r/:subreddit?', component: App },
  ],
});

Vue.use(VueRouter);
new Vue({
  router,
  template: `
    <div>
      <ul>
        <li>
          <router-link to="/r/HipHopHeads">HipHopHeads</router-link>
        </li>
        <li>
          <router-link to="/r/dota">dota</router-link>
        </li>
      </ul>
      <router-view class="view"></router-view>
    </div>
  `,
}).$mount('#app');
