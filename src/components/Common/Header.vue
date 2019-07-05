<template>
  <div>
    <header class="position-absolute margin-top-30 margin-m-top-0 margin-s-top-0">
      <!-- Top Navigation -->
      <nav class="background-transparent background-transparent-hightlight full-width sticky fixed">
        <div class="s-12 l-2">
          <a href="index.html" class="logo">
            <!-- Logo version before sticky nav -->
            <img class="logo-before" src="../../img/logo-dark.png" alt="">
            <!-- Logo version after sticky nav -->
            <img class="logo-after" src="../../img/logo-dark.png" alt="">
          </a>
        </div>
        <div class="s-12 l-10">
          <div class="top-nav right">
            <p class="nav-text"></p>
            <ul class="right chevron cake-menu">
              <li :class="active=== 'home' ? 'active-item' : ''" @click="link('home')">Home</li>
              <li :class="active=== 'about' ? 'active-item' : ''" @click="link('about')">About Us</li>
              <li :class="active=== 'technology' ? 'active-item' : ''" @click="link('technology')">Technologies</li>
              <li :class="active=== 'products' ? 'active-item' : ''" @click="link('products')">Products</li>
              <li :class="active=== 'clients' ? 'active-item' : ''" @click="link('clients')">Our Clients</li>
              <li :class="active=== 'contact' ? 'active-item' : ''" @click="link('contact')">Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>

export default {
  data () {
    return {
      active: 'home'
    }
  },
  created () {
    this.active = this.$route.path.toString().substring(1)
  },
  methods: {
    link (name) {
      this.active = name
      this.$router.push('/' + name)
    }
  }
}
</script>

<style>
.cake-menu li {
  letter-spacing: -0.2px;
  color: #6b6b6b;
  padding: 1.7rem 1rem;
  opacity: 1;
  font-size: 0.85rem;
  display: block;
}

.cake-menu li.active-item {
  color: #282828;
}
</style>
