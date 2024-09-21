<template>
  <header :class="{ scrolled: isScrolled }">
    <h1>
      <a onclick="scrollToTop()" href="#top">
        <picture>
          <source media="(prefers-color-scheme: dark)" :srcset="logoDark" />
          <source media="(prefers-color-scheme: light)" :srcset="logo" />
          <img :alt="logoAlt" :src="logo" />
        </picture>
      </a>
      <slot name="extraLogo"></slot>
    </h1>
    <slot name="extraInfo"></slot>
    <ul>
      <template v-for="item in dropdownItems">
        <li
          v-if="item.type === 'dropdown'"
          class="dropdown"
          @mouseleave="hideDropdown(item.slotName)"
        >
          <a @click="toggleDropdown(item.slotName)">
            <slot :name="item.slotName"></slot>
          </a>
          <div class="dropdown-content" v-if="isDropdownVisible(item.slotName)">
            <slot :name="item.slotName + 'Content'"></slot>
          </div>
        </li>
        <li v-else-if="item.type === 'link'">
          <a :href="item.href">
            <slot :name="item.slotName"></slot>
          </a>
        </li>
      </template>
      <li class="dropdown" @mouseleave="hideLanguageDropdown">
        <a class="language-icon" @click="toggleLanguageDropdown" href="#">
          {{ translatable ? $t("header.language") : language }}
          <i class="fa fa-angle-down"></i>
        </a>
        <div class="dropdown-content" v-if="showLanguageDropdown">
          <slot name="languages"></slot>
        </div>
      </li>
    </ul>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const showLanguageDropdown = ref(false);
const showPhoneDropdown = ref(false);
const isScrolled = ref(false);

const toggleLanguageDropdown = () => {
  showLanguageDropdown.value = !showLanguageDropdown.value;
};

const toggleDropdown = (slotName) => {
  if (slotName === "dropdownOne") {
    showPhoneDropdown.value = !showPhoneDropdown.value;
  }
};

const hideDropdown = (slotName) => {
  if (slotName === "dropdownOne") {
    showPhoneDropdown.value = false;
  }
};

const isDropdownVisible = (slotName) => {
  if (slotName === "dropdownOne") {
    return showPhoneDropdown.value;
  }
  return false;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

defineProps({
  logo: String,
  logoDark: String,
  logoAlt: String,
  extraInfo: String,
  linkOne: String,
  linkTwo: String,
  dropdownItems: {
    type: Array,
    required: true,
  },
  translatable: Boolean,
  language: String,
});
</script>

<style lang="scss">
header {
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  align-items: center;
  z-index: 2000;
  backdrop-filter: blur(0.625rem);
  animation: fadeInAnimation ease 1.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  transition: border-bottom 0.2s;
  border-bottom: 0 solid #e7e7e7;
  background-color: #ffffffed;
  padding: 0 6%;
  width: 100%;
  height: 4.375rem;
  line-height: normal;

  @media (prefers-color-scheme: dark) {
    background-color: #1d1d1ded;
    color: #fff;
  }

  &.scrolled {
    border-bottom: 1.2px solid #e7e7e7;

    @media (prefers-color-scheme: dark) {
      border-bottom: 1.2px solid #ffffff2b;
    }
  }

  @media (max-width: 47.9375rem) {
    position: fixed !important;
    top: 0 !important;
    flex-direction: column !important;
    justify-content: center !important;
    z-index: 2000 !important;
    padding: 1.25rem !important;
    width: 100% !important;
    height: 7.5rem !important;
  }

  a {
    color: #555;
    cursor: pointer;

    @media (prefers-color-scheme: dark) {
      color: #c2c2c2;

      &:hover {
        color: #fff;
      }
    }

    &:hover {
      color: #333;
    }
  }

  h1 {
    display: flex;
    align-items: center;

    @media screen and (min-width: 79.6875rem) and (max-width: 91rem) {
      margin-top: 0.625rem;
    }

    @media (max-width: 47.9375rem) {
      margin-bottom: 0.625rem;
    }

    img:hover {
      border-radius: 0.3125rem;
      background-color: #bebebe84;
      padding: 0.0625rem;
    }

    sup {
      top: 0;
      margin-left: 0.3125rem;
      font-weight: 700;

      @media screen and (min-width: 79.6875rem) and (max-width: 91rem) {
        display: none;
      }
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      a {
        transition: all 300ms;
        cursor: pointer;

        &:hover {
          border-radius: 0.3125rem;
          background-color: #c1c1c184;
          padding: 0.3125rem;

          @media (prefers-color-scheme: dark) {
            background-color: #ffffff2b;
          }
        }
      }

      .quick-info {
        font-size: 0.9375rem;
        text-align: left !important;

        @media screen and (min-width: 48rem) and (max-width: 79.9375rem) {
          display: none;
        }
      }
    }
  }

  .quick-number {
    font-size: 0.75rem;
  }

  .language-icon {
    position: relative;

    &::before,
    &::after {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: var(--silver);
      width: 0.0625rem;
      height: 1.25rem;
      content: "";
    }

    &::before {
      left: -0.625rem;
    }

    &::after {
      right: -0.625rem;
    }
  }

  #md {
    font-size: 2.1875rem;
  }
}

.dropdown {
  position: relative;

  &:hover {
    .dropdown-content {
      display: block;
    }
  }

  .dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    left: -0.8125rem;
    transition: all 3s;
    margin: 0;
    margin-top: 0;
    box-shadow: 0 0.25rem 1.75rem 0rem rgba(0, 0, 0, 0.25);
    border: 0.0625rem solid #ddd;
    border-radius: 0.5rem;
    background-color: #fff;
    padding: 0.1875rem;
    width: max-content;
    list-style: none;

    @media (prefers-color-scheme: dark) {
      background-color: #1d1d1ded;
      backdrop-filter: blur(0.625rem);
      -webkit-backdrop-filter: blur(0.625rem);
      border: 0.0625rem solid #ffffff2b;
    }

    .divider {
      margin: 0.25rem 20%;
      border-top: 0.0625rem solid #ccc;

      @media (prefers-color-scheme: dark) {
        border-top: 0.0625rem solid #ffffff2b;
      }
    }

    a {
      display: block;
      padding: 0.625rem;
      color: #000;
      text-align: center;
      text-decoration: none;

      @media (prefers-color-scheme: dark) {
        color: #fff;
      }

      &:last-child {
        margin-bottom: 0.25rem;
      }

      &:hover {
        background-color: #e0e0e0;
        padding: 0.625rem;

        @media (prefers-color-scheme: dark) {
          background-color: #333;
        }
      }
    }

    h4 {
      margin: 0.5rem;
      font-weight: 800;
      font-size: 0.9375rem;
      text-align: center;
    }
  }
}

.quick-call {
  margin-top: 31.25rem;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;

  @media (prefers-color-scheme: dark) {
    color: #dadada;
  }

  a {
    color: #dadada !important;

    @media (prefers-color-scheme: dark) {
      color: #dadada !important;
    }
  }

  @media screen and (min-width: 48rem) {
    margin-top: 50rem !important;
  }
}
</style>
