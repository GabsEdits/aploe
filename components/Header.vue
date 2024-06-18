<template>
  <header :class="{ scrolled: isScrolled }">
    <h1>
      <a onclick="scrollToTop()" href="#top">
        <img :src="logo" :alt="logoAlt" />
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
          <a @click="toggleDropdown(item.slotName)" id="ignore-link">
            <slot :name="item.slotName"></slot>
          </a>
          <div class="dropdown-content" v-if="isDropdownVisible(item.slotName)">
            <slot :name="item.slotName + 'Content'"></slot>
          </div>
        </li>
        <li v-else-if="item.type === 'link'">
          <a :href="item.href" style="cursor: pointer" class="locationmobile">
            <slot :name="item.slotName"></slot>
          </a>
        </li>
      </template>
      <li class="dropdown" @mouseleave="hideLanguageDropdown">
        <a
          style="cursor: pointer"
          class="language-icon"
          @click="toggleLanguageDropdown"
          href="#"
        >
          {{ $t("header.language") }} <i class="fa fa-angle-down"></i>
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
  logoAlt: String,
  extraInfo: String,
  linkOne: String,
  linkTwo: String,
  dropdownItems: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss">
header.scrolled {
  border-bottom: 1.2px solid #e7e7e7;
}

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

  @media (max-width: 47.9375rem) {
    position: fixed !important;
    top: 0 !important;
    flex-direction: column !important;
    justify-content: center !important;
    z-index: 2000 !important;
    padding: 1.25rem !important;
    width: 100% !important;
    height: 7.5rem !important;

    h1 {
      margin-bottom: 0.625rem;
    }

    nav {
      margin-top: 1.25rem;
    }
  }

  a {
    color: var(--link-gray);

    &:hover {
      color: var(--hover-link-gray);
    }
  }

  h1 {
    display: flex;
    align-items: center;

    img:hover {
      border-radius: 0.3125rem;
      background-color: #bebebe84;
      padding: 0.0625rem;
    }

    sup {
      top: 0;
      margin-left: 0.3125rem;
      font-weight: 700;
    }
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li:not(:first-child) {
    margin-left: 1.25rem;
  }

  li:first-child {
    margin-left: 0;
  }

  li a {
    transition: all 300ms;

    &:hover {
      border-radius: 0.3125rem;
      background-color: #c1c1c184;
      padding: 0.3125rem;
    }
  }

  .dropdown-content a:hover {
    padding: 0.625rem;
  }

  .quick-info {
    font-size: 0.9375rem;
    text-align: left !important;
  }

  .quick-number {
    font-size: 0.75rem;
  }

  .language-icon {
    position: relative;
  }

  .language-icon::before,
  .language-icon::after {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--silver);
    width: 0.0625rem;
    height: 1.25rem;
    content: "";
  }

  .language-icon::before {
    left: -0.625rem;
  }

  .language-icon::after {
    right: -0.625rem;
  }

  #md {
    font-size: 2.1875rem;
  }
}

.dropdown {
  position: relative;

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
    background-color: var(--white);
    padding: 0.1875rem;
    width: max-content;
    list-style: none;

    .divider {
      margin: 0.25rem 20%;
      border-top: 0.0625rem solid #ccc;
    }

    a {
      display: block;
      padding: 0.625rem;
      color: var(--hover-link-gray);
      text-align: center;
      text-decoration: none;

      &:last-child {
        margin-bottom: 0.25rem;
      }

      &:hover {
        background-color: var(--test-drive-mobile-background-2);
      }
    }

    h4 {
      margin: 0.5rem;
      font-weight: 800;
      font-size: 0.9375rem;
      text-align: center;
    }
  }

  &:hover .dropdown-content {
    display: block;
  }
}

.quick-call {
  margin-top: 31.25rem;
  color: var(--white);
  font-weight: 600;
  font-size: 1rem;

  a {
    color: var(--quick-call-color) !important;
  }
}

@media screen and (min-width: 48rem) and (max-width: 79.9375rem) {
  .quick-info {
    display: none;
  }
}

@media screen and (min-width: 79.6875rem) and (max-width: 91rem) {
  .md {
    display: none;
  }

  header h1 {
    margin-top: 0.625rem;
  }
}

@media screen and (min-width: 48rem) {
  .quick-call {
    margin-top: 50rem !important;
  }
}
</style>
