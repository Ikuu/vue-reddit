import Vue from 'vue';
import Soundcloud from 'src/components/Soundcloud.vue';

describe('Soundcloud.vue', () => {
  it('iFrame src is set', () => {
    const vm = new Vue({
      template: `
        <div>
          <soundcloud url="https://soundcloud.com/migosatl/bad-and-boujee-feat-lil-uzi-vert-prod-by-metro-boomin"></soundcloud>
        </div>
      `,
      components: {
        Soundcloud,
      },
    }).$mount();

    expect(vm.$el.querySelector('iframe').getAttribute('src'))
      .to.equal('https://w.soundcloud.com/player/?url=https://soundcloud.com/migosatl/bad-and-boujee-feat-lil-uzi-vert-prod-by-metro-boomin');
  });
});
