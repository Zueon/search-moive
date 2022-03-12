<template>
  <div class="about">
    <Loader
      v-if="imageLoading" 
      absolute />
    <div class="photo">
      <img
        :src="image"
        :alt="name" />
    </div>
    <div class="name">
      {{ name }}
    </div>
    <div> {{ email }} </div>
    <div> {{ blog }} </div>
    <div> {{ phone }} </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Loader from '~/components/Loader';
export default {
  components: {
    Loader,
  },
  data() {
    return {
      imageLoading: true,
    };
  },
  computed: {
    // 전개 연산자 사용해야함, 매개변수1 : 사용할 모듈 이름, 매개변수2 : 배열로 정보 가져오기
    ...mapState('about', ['image', 'home', 'email', 'blog', 'phone']),
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      await this.$loadImage(this.image);
      this.imageLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.about {
  text-align: center;
  .photo {
    width: 250px;
    height: 250px;
    margin: 40px auto 20px;
    padding: 30px;
    border: 10px solid $gray-300;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: $gray-200;
    position: relative;
    img {
      width: 100%;
      border-radius: 50%;
    }
    .name {
      font-size: 40px;
      font-family: 'Oswald', sans-serif;
      margin-bottom: 20px;
    }
  }
}
</style>