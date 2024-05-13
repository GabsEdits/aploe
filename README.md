<div align="center">
<h1>Aplóe</h1>

Lightweight and minimalistic Vue.js components and styles for informational websites
</div>

- **🎨** Purposefully designed lightweight and minimalistic design language.
- **🏗️** Modern Components with extensive customization options.
- **📱** Mobile-friendly design language and components.
- **🖋️** Utilizes premium fonts: Inter for text and Geist Mono for code snippets.
- **🌐** Easy translations, optimized for `vue-i18n`.
- **⚙️** Simple and straightforward configuration.

## Technologies

Aplóe is meant to be quick and easy, that's why it's built for Vue.js 3 projects with Vite. The project is build with TypeScript, and it's optimized for `vue-i18n` for translations. The design is based on the Aplós theme, and it uses the Inter font for text and Geist Mono for code snippets.

The project is also designed to be mobile-friendly, with a responsive design that works on any device.

## Configuration

Aplóe is designed to be as easy to use as possible, with a simple configuration that can be easily customized. Each project based on Aplóe should provide an `aploe.config.mts` where the basic configuration is stored. (This is a work in progress)

## Structure

Aplóe consists of a collection of components that can be easily customized with just a single item, ensuring that's it's as low-maintenance as possible. Here's an example:

```vue
<CarData
    title="livecars.title"
    description="livecars.desc"
    icon="globe"
    api="https://api.example.org:12345/api/get_cars"
    fallback="1000"
    background="#c0e2de83"
    iconColor="green">
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
    iconColor="green">
</ExternalLink>
```

All elements are designed for easy translation, with the `title` and `description` being connected to the `vue-i18n` library.

More complex components, such as the Header, Footer and other provide slots for more customization, but the basic structure is the same.

## Design

By it's words, Aplóe includes a design language, following specific styles to make the page as unified as possible. The goal of the framework is to make it as adaptive and easy to read on any devices, making sure that anyone can access the information from anywhere in the world. That's also why translation are such a big part of the project. To make the design work, much of the basic styles were taken from [Aplós](https://aplos.gxbs.me), the VitePress theme. With that creating simple blend cards as elements to create a visually appiling for of an website.
