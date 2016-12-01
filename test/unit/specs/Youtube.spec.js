import Vue from 'vue';
import Youtube from 'src/components/YouTube.vue';

describe('Youtube.vue', () => {
  it('iFrame src is set for normal YouTube links', () => {
    const vm = new Vue({
      template: `
      <div>
        <youtube url="https://www.youtube.com/watch?v=D2xw9TYqF5A"></youtube>
      </div>
      `,
      components: {
        Youtube,
      },
    }).$mount();

    expect(vm.$el.querySelector('iframe').getAttribute('src'))
      .to.equal('https://www.youtube.com/embed/D2xw9TYqF5A');
  });

  it('iFrame src is set for URL shortened YouTube links', () => {
    const vm = new Vue({
      template: `
      <div>
        <youtube url="http://youtu.be/kget-c9e4g4"></youtube>
      </div>
      `,
      components: {
        Youtube,
      },
    }).$mount();

    expect(vm.$el.querySelector('iframe').getAttribute('src'))
      .to.equal('https://www.youtube.com/embed/kget-c9e4g4');
  });
});
