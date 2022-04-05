import { shallowMount } from '@vue/test-utils';
import router from '~/routes';
import store from '~/store';
import Header from '~/components/Header';

describe('components/Header.vue', () => {
  let wrapper;
  beforeEach(async () => {
    window.scrollTo = jest.fn();
    router.push('/movie/tt10872600');
    await router.isReady();
    wrapper = shallowMount(Header, {
      global: {
        plugins: [router, store],
      },
    });
  });
  test('경로 정규표현식이 없는 경우 일치하지 않음', () => {
    const regExp = undefined;
    expect(wrapper.vm.isMatch(regExp)).toBe(false);
  });

  test('경로 정규표현식과 일치하는 경우', () => {
    const regExp = /^\/movie/;
    expect(wrapper.vm.isMatch(regExp)).toBe(true);
  });

  test('경로 정규표현식과 일치하지 않는 경우', () => {
    const regExp = /^\/test/;
    expect(wrapper.vm.isMatch(regExp)).toBe(false);
  });
});
