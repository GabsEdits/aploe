---
pageClass: home
---

# Aplóe {.center #title}

Lightweight and Minimalistic Vue.js Components and Styles for Informational Websites {.center #desc}

<section class="features">

- **🎨** Purposefully designed lightweight and minimalistic design language.
- **🏗️** Modern Components with extensive customization options.
- **📱** Mobile-friendly design language and components.
- **🖋️** Utilizes premium fonts: Inter for text and Geist Mono for code snippets.
- **🌐** Easy translations, optimized for `vue-i18n`
- **🔧** Built for Vue.js 3 projects with Vite.

</section>

## Technologies

Aplóe is meant to be quick and easy, that's why it's built for Vue.js 3 projects with Vite. The project is build with TypeScript, and it's optimized for `vue-i18n` for translations. The design is based on the Aplós theme, and it uses the Inter font for text and Geist Mono for code snippets.

The project is also designed to be mobile-friendly, with a responsive design that works on any device.

## Configuration

Aplóe is designed to be as easy to use as possible, with a simple configuration that can be easily customized. Each project based on Aplóe should provide an `aploe.config.mts` where the basic configuration is stored.

**It's currently not implemented, but it's planned for the future, as the project is still in development.**

## Structure

Aplóe offers a wide range of customizable components. With just a single element, you can easily customize these components to suit your needs. Here's an example:

```vue
<CarData
  title="livecars.title"
  description="livecars.desc"
  icon="globe"
  api="https://api.example.org:12345/api/get_cars"
  fallback="1000"
  background="#c0e2de83"
  iconColor="green"
>
</CarData>
```

The example above is a simple component that displays specific content from an API. There are also other components, such as `ExternalLink` that is an component with a link to an page/website, like this:

```vue
<ExternalLink
  title="external.title"
  description="external.desc"
  link="https://example.org"
  icon="globe"
  background="#c0e2de83"
  iconColor="green"
>
</ExternalLink>
```

All elements are designed for easy translation, with the `title` and `description` being connected to the `vue-i18n` library.

More complex components, such as the Header, Footer and other provide slots for more customization, but the basic structure is the same.

## Design

By it's words, Aplóe includes a design language, following specific styles to make the page as unified as possible. The goal of the framework is to make it as adaptive and easy to read on any devices, making sure that anyone can access the information from anywhere in the world. That's also why translation are such a big part of the project. To make the design work, much of the basic styles were taken from [Aplós](https://aplos.gxbs.me), the VitePress theme. With that creating simple blend cards as elements to create a visually appiling for of an website.

::: details Example of such an layout
![An example of such an layout](/LayoutExample.png) {#layout}
:::

## Template

Aplóe is still in heavy development, once it's mature enough, and gets a stable release, a template will be created to make it easier to start a project with Aplóe. The template will include all the necessary files and configurations to start a project with Aplóe, and it will be easy to customize and extend. The template will also include a basic example of how to use the components and styles provided by Aplóe. More information about the template will be provided once it's ready.

## Sponsors

<section class="usedby">

- [![Boekestijn](https://soferii.md/images/boekestijn-transport.svg#no-border#static)](https://boekestijn.md)
- [Gabs](https://gxbs.me/) { #myself }

</section>

---

## Other Project Information

- It uses the [Semantic Versioning](https://semver.org/) system (once it hits the stable release, `v1.0.0`).
- It's licensed under the [MIT License](https://opensource.org/licenses/MIT).

### Roadmap

- [x] Create the basic structure of the project.
- [x] Create the basic components.
- [x] Create the basic styles.
- [ ] Remove all junk styles and classes
- [ ] Support Dark Mode.
- [ ] Create a template for the project.
- [ ] Create configuration file for the project.
- [ ] Create a documentation for the project.
