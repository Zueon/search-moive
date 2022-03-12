import { createApp } from 'vue';
import App from './App.vue';
// 특정 폴더 내부에 들어있는 index 파일을 가져올 때는 경로에서 index를 생략할 수 있다.
// 특히 확장자가 js인 파일을 우선적으로 찾음
import router from './routes';
import store from './store';
import loadImage from './plugins/loadImage';

// use : vue 프로젝트에 연결할 일종의 플러그인, 라이브러리를 연결해줌
createApp(App).use(router).use(store).use(loadImage).mount('#app');
