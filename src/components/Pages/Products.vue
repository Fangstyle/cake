<template>
  <article class="size-1140">
    <header class="section-top-padding background-white">

      <div class="line text-center">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
      </div>
      <img :src="require('@/assets/img/products.jpg')"  alt="">
    </header>
    <section class="section-top-padding background-white">
      <div class="line text-center">
        <p class="margin-bottom-0 text-size-18 text-dark">
        </p>
        <h2>With a portfolio of more than 400 products, NAEO offers you a wide range of unrivalled aroma diffusers.
          Whether you are looking for essential oil diffusers with a classic or stylish look and diffusion by
          nebulization, ultrasound, ventilation, heat or capillarity, we will bring you the best and innovative
          solutions.</h2>
        <br>
        <br>
        <br>
        <h2>Here is a selection of our latest product developments.</h2>
        <p></p>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" :style="item.bgImg" v-for="(item) in wrapperPic"/>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>
    <div class="line text-center margin-top-50">
      <p class="margin-bottom-0 text-size-18 text-dark">
      </p>
      <h2>All of our aroma diffusers are available in an endless variety of finishes, materials and styles to fit in
        with your tastes and requirements.</h2>
      <br>
      <h2>If you would like to have more information about our products or explore our extensive collection, please send
        us an e-mail to <a href="mailto:info@naeo-aroma.com">info@naeo-aroma.com</a>.</h2>
      <h2>We will gladly send you our catalogue and further detailed information.</h2>
      <p></p>

      <section class="section background-white">
        <div class="line"></div>
      </section>
    </div>
  </article>
</template>

<script>
import Swiper from "swiper"
import Img1 from '@/assets/img/portfolio/03.jpg'
import Img2 from '@/assets/img/portfolio/04.jpg'
import Img3 from '@/assets/img/portfolio/05.jpg'
import Img4 from '@/assets/img/portfolio/06.jpg'
import Img5 from '@/assets/img/portfolio/07.jpg'
import Img6 from '@/assets/img/portfolio/08.jpg'
import Img7 from '@/assets/img/portfolio/10.jpg'

export default {
  name: "Products",
  created () {
    this.initSwiperPic()
  },
  mounted () {
    this.initSwiper()
  },
  data () {
    return {
      wrapperImport: [Img1, Img2, Img3, Img4, Img5, Img6, Img7],
      wrapperPic: []
    }
  },
  methods: {
    initSwiperPic () {
      for (let item of this.wrapperImport) {
        this.wrapperPic.push({
          bgImg: {
            backgroundImage: "url(" + item + ")"
          }
        })
      }
    },
    initSwiper () {
      let swiper = new Swiper('.swiper-container', {
        autoplay: false,
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        },
      })
    }
  }
}
</script>
<style lang="css">
@import "../../../node_modules/swiper/dist/css/swiper.min.css";

.swiper-container {
  width: 1000px;
}

.swiper-slide {
  width: 195px;
  height: 195px;
  color: #fff;
}

</style>


