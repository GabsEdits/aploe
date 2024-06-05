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
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  height: 70px;
  padding: 0 6%;
  background-color: #ffffffed;
  backdrop-filter: blur(10px);
  z-index: 2000;
  line-height: n;
  border-bottom: 0px solid #e7e7e7;
  animation: fadeInAnimation ease 1.5s;
  transition: border-bottom 0.2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @media (max-width: 767px) {
    flex-direction: column !important;
    justify-content: center !important;
    height: 7.5rem !important;
    padding: 1.25rem !important;
    width: 100% !important;
    top: 0 !important;
    position: fixed !important;
    z-index: 2000 !important;

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
      padding: 1px;
      border-radius: 5px;
      background-color: #bebebe84;
    }

    sup {
      margin-left: 5px;
      top: 0;
      font-weight: 700;
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li:not(:first-child) {
    margin-left: 20px;
  }

  li:first-child {
    margin-left: 0;
  }

  li a {
    transition: all 300ms;

    &:hover {
      padding: 5px;
      border-radius: 5px;
      background-color: #c1c1c184;
    }
  }

  .dropdown-content a:hover {
    padding: 10px;
  }

  .quick-office {
    text-align: left !important;
    font-size: 15px;
  }

  .quick-number {
    font-size: 12px;
  }

  .language-icon {
    position: relative;
  }

  .language-icon::before,
  .language-icon::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 1px;
    height: 20px;
    background-color: var(--silver);
    transform: translateY(-50%);
  }

  .language-icon::before {
    left: -10px;
  }

  .language-icon::after {
    right: -10px;
  }

  #md {
    font-size: 35px;
  }
}

.dropdown {
  position: relative;

  .dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    left: -13px;
    width: max-content;
    background-color: var(--white);
    box-shadow: 0px 4px 28px 0px rgba(0, 0, 0, 0.25);
    padding: 3px;
    margin: 0;
    list-style: none;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-top: 0px;
    transition: all 3s;

    .divider {
      border-top: 1px solid #ccc;
      margin: 4px 20%;
    }

    a {
      display: block;
      padding: 10px;
      color: var(--hover-link-gray);
      text-decoration: none;
      text-align: center;

      &:last-child {
        margin-bottom: 4px;
      }

      &:hover {
        background-color: var(--test-drive-mobile-background-2);
      }
    }

    h4 {
      margin: 8px;
      text-align: center;
      font-size: 15px;
      font-weight: 800;
    }
  }

  &:hover .dropdown-content {
    display: block;
  }
}

.quick-call {
  margin-top: 500px;
  font-size: 16px;
  font-weight: 600;
  color: var(--white);

  a {
    color: var(--quick-call-color) !important;
  }
}

@media screen and (min-width: 48rem) and (max-width: 79.9375rem) {
  .quick-office {
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

@media screen and (min-width: 768px) {
  .quick-call {
    margin-top: 50rem !important;
  }
}
</style>
