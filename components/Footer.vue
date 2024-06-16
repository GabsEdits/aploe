<template>
  <footer id="footer">
    <img v-if="badges" :src="badges" class="badges" :alt="badgesAlt" />
    <p class="call-footer">{{ $t("footer.call") }}</p>
    <a
      v-if="specialLink"
      :href="specialLink"
      id="footer-special-link"
      class="footer-links"
      ><slot name="special"></slot
    ></a>
    <div class="footer-links">
      <template v-for="item in footerLinks">
        <a :href="item.href">
          <slot :name="item.slotName"></slot>
        </a>
      </template>
    </div>
    <div class="footer-additional">
      <a
        :href="facebook"
        v-if="facebook"
        class="footer-social-link"
        aria-label="Check out the Facebook Page"
        ><i class="fab fa-facebook"></i
      ></a>
      <a
        :href="linkedin"
        v-if="linkedin"
        class="footer-social-link"
        aria-label="Check out our LinkedIn Page"
        ><i class="fab fa-linkedin"></i
      ></a>
      <a
        :href="github"
        v-if="github"
        class="footer-social-link"
        aria-label="Check out the source code"
        ><i class="fab fa-github"></i
      ></a>
      <a
        :href="instagram"
        v-if="instagram"
        class="footer-social-link"
        aria-label="Check out our Instagram Page"
        ><i class="fab fa-instagram"></i
      ></a>
      <router-link to="/privacy">Privacy Policy</router-link>
      <p class="made-by">
        Made with <i class="fa-solid fa-heart" style="color: #dd2e44"></i> by
        <a :href="authorLink" class="author">{{ author }}</a>
      </p>
      <p class="footer-copyright" :title="'Build build: ' + buildFrom">
        <router-link to="/developer"> &copy; {{ copyright }} </router-link>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import config from "@/aploe.config.mts";

const { buildFrom } = config;

defineProps({
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

  .footer-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.625rem;
    margin-bottom: 1rem;
  }

  .footer-links a {
    margin: 0.5rem;
    padding: 0.5rem;
    color: #333;
    text-decoration: none;
  }

  .footer-links a:hover {
    text-decoration: underline;
  }

  .footer-social-link {
    transition: color 0.3s;
    margin: 0.5rem;
    color: #333;
    font-size: 1.5rem;
  }

  .footer-social-link:hover {
    color: #007bff;
  }

  .footer-additional {
    margin-top: 1rem;
  }

  .footer-additional a {
    transition: color 0.3s;
    margin: 0.5rem;
    color: var(--hover-link-gray);
    text-decoration: none;
  }

  .footer-additional a:hover {
    color: var(--footer-social);
  }

  .footer-copyright {
    margin-top: 1rem;
    font-size: medium;
  }

  .footer-copyright a {
    color: var(--copyright);
  }

  .made-by {
    margin-top: 1.25rem;
    color: var(--black);
    font-weight: 600;
    text-align: center;
  }

  .call-footer {
    margin-top: 0.5%;
    font-weight: 600;
    font-size: 120%;
    text-align: center;
  }

  #footer-special-link {
    margin-top: 1.5625rem;
    margin-bottom: 0;
    padding: 0.875rem;
    color: var(--hover-link-gray);
    font-size: 1.0625rem;
  }

  #footer-special-link:hover {
    text-decoration: underline;
  }

  .author {
    transition: text-decoration 0.5s !important;
    margin-left: 0 !important;
    color: var(--black) !important;
    font-weight: 800;
    text-decoration: underline 0.0938rem !important;

    &:hover {
      color: var(--black);
      text-decoration: underline green 0.0938rem !important;
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
