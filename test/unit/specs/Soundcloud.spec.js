import Vue from 'vue';
import Soundcloud from 'src/components/Soundcloud';

describe('Hello.vue', () => {
  it('props', () => {
    const vm = new Vue({
      template: '<div><soundcloud url="123"></soundcloud></div>',
      components: {
        Soundcloud,
      },
    }).$mount();

    expect(vm.$el.querySelector('iframe'))
      .to.equal('Welcome to Your Vue.js App');
  })
});
