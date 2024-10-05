<template>
  <footer>
    <div class="main-content">
      <div class="badges-section" v-if="badges">
        <img :src="badges" :alt="badgesAlt" />
      </div>

      <div class="footer-links">
        <div
          v-for="(section, index) in links"
          :key="index"
          class="link-section"
        >
          <h3>
            {{ translatable ? $t(section.sectionTitle) : section.sectionTitle }}
          </h3>
          <component
            v-for="(link, idx) in section.items"
            :key="idx"
            :is="link.isRouterLink ? 'router-link' : 'a'"
            :to="link.isRouterLink ? link.href : null"
            :href="!link.isRouterLink ? link.href : null"
            class="link"
          >
            {{ translatable ? $t(link.text) : link.text }}
            <span v-if="link.info">{{ link.info }}</span>
          </component>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="bottom-left">
        <img :src="icon" alt="Logo" class="logo" />
        <div class="trademark-info">
          <p>
            All trademarks and logos are the property of their respective
            owners.
          </p>
          <component
            :is="copyright.isRouter ? 'router-link' : 'a'"
            :to="copyright.isRouter ? copyright.href : null"
            :href="!copyright.isRouter ? copyright.href : null"
            class="copyright-link"
          >
            © {{ copyright.text }}
          </component>
        </div>
      </div>

      <div class="bottom-right">
        <p class="text-muted">
          Made with ❤️ by
          <a class="author-link" :href="authorLink">{{ author }}</a>
        </p>
        <p class="text-muted">
          Built with the foundation of
          <a class="aploe-link" href="https://aploe.gxbs.dev">Aplóe</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps({
  badges: String,
  translatable: Boolean,
  badgesAlt: String,
  icon: String,
  specialLink: String,
  links: Array as PropType<
    Array<{
      sectionTitle: string;
      items: Array<{
        isRouterLink: boolean;
        href: string;
        text: string;
        info?: string;
      }>;
    }>
  >,
  copyright: {
    type: Object as PropType<{ text: string; href: string; isRouter: boolean }>,
    required: true,
  },
  author: String,
  authorLink: String,
});
</script>

<style lang="scss">
footer {
  background-color: #101010;
  color: white;
  padding: 2.5rem 0;

  a:hover {
    color: #f1f1f1;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;

    @media (min-width: 640px) {
      padding: 0 2.5rem;
    }

    @media (min-width: 1024px) {
      padding: 0 5rem;
    }
  }

  .badges-section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
    padding-bottom: 2.5rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    border-bottom: 1px solid #333836;

    @media (min-width: 640px) {
      flex-direction: row;
    }

    img {
      margin-top: 1rem;
      filter: grayscale(100%);
      transition: filter 0.3s ease;

      &:hover {
        filter: grayscale(0);
      }

      @media (min-width: 640px) {
        margin-top: 0;
      }
    }
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    @media (min-width: 1024px) {
      flex-direction: row;
      gap: 12rem;
    }

    .link-section {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      h3 {
        color: rgba(255, 255, 255, 0.7);
        font-size: 1rem;
        font-weight: 600;
      }

      .link {
        color: rgba(255, 255, 255, 0.4);
      }
    }
  }

  .footer-bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 2.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    gap: 1.5rem;

    @media (min-width: 640px) {
      flex-direction: row;
      padding-left: 2.5rem;
      padding-right: 2.5rem;
      gap: 0;
    }

    @media (min-width: 1024px) {
      padding-left: 5rem;
      padding-right: 5rem;
    }

    .bottom-left {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      align-items: center;

      @media (min-width: 640px) {
        flex-direction: row;
      }

      .logo {
        width: 2.5rem;
        transition: transform 0.3s;

        &:hover {
          animation: spin 1s infinite linear;
        }
      }

      .trademark-info {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        text-align: center;
        font-size: 0.875rem;
        color: rgba(255, 255, 255, 0.4);

        @media (min-width: 640px) {
          text-align: left;
        }
      }
    }

    .bottom-right {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      text-align: center;

      @media (min-width: 640px) {
        text-align: right;
      }

      .text-muted {
        color: rgba(255, 255, 255, 0.4);
      }

      .author-link,
      .aploe-link {
        color: var(--boek-green-1);
      }
    }
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
