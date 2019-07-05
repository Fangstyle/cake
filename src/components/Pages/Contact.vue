<template>
  <article>
    <header class="section-top-padding background-white">

      <div class="line text-center">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
      </div>
      <img src="../../img/contactus.jpg" alt="">
    </header>
    <article>
      <header class="section background-white">
        <div class="line text-center">
          <br>
          <p class="margin-bottom-0 text-size-16 text-dark"></p>
          <h2>We have been bringing innovative, qualitative and beautifully designed essential oil diffusers to the
            market since 2007.</h2>
          <br>
          <h2>If you are looking for a partner to start your project or if you have a question regarding our products
            and developments, please contact us!</h2>
          <p></p>
        </div>
      </header>
      <section class="full-width background-dark">
        <div class="s-12 m-12 l-6">
          <!-- Change the background image -->
          <!--          <img src="../../img/contact.jpg" alt="">-->
          <div :style="bgImg" class="contact-image"></div>
        </div>
        <div class="s-12 m-12 l-6 text-center">
          <div class="padding-2x">
            <i class="icon-sli-location-pin text-white text-size-30 center"></i>
            <h2 class="text-size-20 margin-bottom-0 text-white">Company Address</h2>
            <p>Units C &amp; D, 7th, Floor</p>
            <p>Gee Hing Chang Industrial Building</p>
            <p>16 Cheung Yue Street, Lai Chi Kok</p>
            <p>Kowloon, Hong Kong</p>
            <i class="icon-sli-envelope text-white text-size-30 center margin-top-20"></i>
            <h2 class="text-size-20 margin-bottom-0 text-white">E-mail</h2>
            <a class="text-primary-hover" href="mailto:info@naeo-aroma.com">info@naeo-aroma.com</a><br>
            <em class="icon-sli-earphones-alt text-white text-size-30 center margin-top-20"></em>
            <h2 class="text-size-20 margin-bottom-0 text-white">Phone Number</h2>
            <p>(852) 3974 5191</p>
            <br>
            <br>
            <a target="_blank" href="https://www.linkedin.com/company/naeo-aroma/about/?viewAsMember=true"><i
              class="icon-linked_in_circle text-size-30"></i> <span class="text-strong text-white hide-s hide-m">LINKEDIN</span></a>

          </div>
        </div>
      </section>

      <section class="section background-white">
        <div class="s-12 m-12 l-4 center">
          <form name="contactForm" class="customform" method="post">


            <div class="s-12 m-12 l-6">

            </div>
            <div class="s-12"></div>
          </form>
        </div>
      </section>
    </article>
  </article>
</template>

<script>
import defaultImg from '../../img/contact.jpg'
export default {
  name: "Contact",
  data () {
    return {
      bgImg: {
        backgroundImage: "url(" + defaultImg + ")"
      }
    }
  }
}
</script>

<style scoped>

</style>
