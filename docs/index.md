---
pageClass: home
---

# Aplóe {.center #title}

Purposefully designed Vue.js components and CSS framework for enterprise websites  {.center #desc}

<section class="features">
<br>

- <span class="emoji">🎨</span> Lightweight and minimalistic design.
- <span class="emoji">🏗️</span> Component based & easy to read
- <span class="emoji">📱</span> Mobile-friendly design.
- <span class="emoji">🖋️</span> Utilizes premium fonts: Inter for text and Geist Mono for code snippets.
- <span class="emoji">🌐</span> Easy translations, using `vue-i18n`
- <span class="emoji">📦</span> Every asset is local, nothing is pulled from the internet.
</section>

## Technologies

Aplóe is meant to be fast and quick, that's why it's built with Vue.js 3 and Vite 5. Outside the main 2 technologies, `vue-i18n`, `typescript`, `pnpm`, and many others are used to achieve this project.

## Structure

Aplóe has a Component-Based Architecture ensuring that it can be as low maintenance as possible. Many of the components can be easily edited with one line, like so:

```vue
<CarData
    title="livecars.title"
    description="livecars.desc"
    icon="globe"
    api="https://api.example.org:12345/api/get_cars"
    fallback="1000"
    background="#c0e2de83"
    iconColor="green"
/>
```

## Design

By it's words, Aplóe is a design language, following specific styles to make the page as unified as possible. The goal of the framework is to make it as adaptive and easy to read on any devices, making sure that anyone can access the information from anywhere in the world. That's also why translation are such a big part of the project. To make the design work, much of the basic styles were taken from [Aplos](https://aplos.gxbs.me), the VitePress theme. With that creating simple blend cards as elements to create a visually appiling for of an website. 

::: details Example of such an layout
![An example of such an layout](/LayoutExample.png) {#layout}
:::

## Sponsors

<section class="usedby">

- [![Boekestijn](https://soferii.md/images/boekestijn-transport.svg)](https://boekestijn.md)
- [Gabs](https://gxbs.me/) { #myself }
</section>
