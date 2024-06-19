<template>
  <footer id="footer">
    <img v-if="badges" :src="badges" class="badges" :alt="badgesAlt" />
    <h2 class="title">{{ $t(title) }}</h2>
    <a v-if="specialLink" :href="specialLink" id="footer-special-link">
      <slot name="special"></slot>
    </a>
    <nav>
      <template v-for="item in footerLinks">
        <a :href="item.href">
          <slot :name="item.slotName"></slot>
        </a>
      </template>
    </nav>
    <div class="footer-additional">
      <a
        :href="facebook"
        v-if="facebook"
        aria-label="Check out the Facebook Page"
        ><i class="fab fa-facebook"></i
      ></a>
      <a
        :href="linkedin"
        v-if="linkedin"
        aria-label="Check out our LinkedIn Page"
        ><i class="fab fa-linkedin"></i
      ></a>
      <a :href="github" v-if="github" aria-label="Check out the source code"
        ><i class="fab fa-github"></i
      ></a>
      <a
        :href="instagram"
        v-if="instagram"
        aria-label="Check out our Instagram Page"
        ><i class="fab fa-instagram"></i
      ></a>
      <router-link to="/privacy">Privacy Policy</router-link>
      <p class="made-by">
        Made with ❤️ by
        <a :href="authorLink" class="author">{{ author }}</a>
      </p>
      <p class="footer-copyright">
        <router-link to="/developer"> &copy; {{ copyright }} </router-link>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  badges: String,
  badgesAlt: String,
  specialLink: String,
  firstLink: String,
  secondLink: String,
  thirdLink: String,
  facebook: String,
  linkedin: String,
  github: String,
  instagram: String,
  copyright: String,
  author: String,
  authorLink: String,
  footerLinks: Array,
});
</script>

<style lang="scss">
footer {
  border-radius: 1.875rem 1.875rem 0 0;
  background-color: var(--footer-back);
  padding: 1rem;
  text-align: center;

  .footer-links,
  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.625rem;
    margin-bottom: 1rem;

    a {
      margin: 0.5rem;
      padding: 0.5rem;
      color: #333;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .footer-additional {
    margin-top: 1rem;

    a {
      transition: color 0.3s;
      margin: 0.5rem;
      font-size: 1.5rem;
      color: #333;
      text-decoration: none;

      &:hover {
        color: #007bff;
      }
    }
  }

  .footer-copyright {
    margin-top: 1rem;
    font-size: medium;

    a {
      color: #666;
    }
  }

  .made-by {
    margin-top: 1.25rem;
    color: #000;
    font-weight: 600;
    text-align: center;
  }

  .title {
    margin-top: 0.5%;
    font-weight: 600;
    font-size: 120%;
    text-align: center;
  }

  #footer-special-link {
    margin-top: 1.5625rem;
    margin-bottom: 0;
    padding: 0.875rem;
    color: #333;
    font-size: 1.0625rem;

    &:hover {
      text-decoration: underline;
    }
  }

  .author {
    transition: 0.5s;
    margin-left: 0;
    color: #000;
    font-weight: 800;
    text-decoration: underline 0.0938rem;

    &:hover {
      color: #000;
      text-decoration: underline green 0.0938rem;
    }
  }

  .badges {
    position: absolute;
    right: 0.625rem;
    margin-top: 1.875rem;
    margin-top: 1.875rem;
    width: 31.25rem;
    height: 3.5156rem;

    @media (max-width: 47.9375rem) {
      position: relative;
      right: 0;
      left: 0;
      margin: 0 auto;
      margin-bottom: 1.25rem;
      aspect-ratio: 16/9;
      max-width: 80%;
      object-fit: contain;
    }

    @media screen and (min-width: 48.4375rem) and (max-width: 65.9375rem) {
      right: 0;
    }

    @media screen and (min-width: 48rem) and (max-width: 72.125rem) {
      display: none;
    }
  }
}
</style>
