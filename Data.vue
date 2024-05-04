<template>
  <section id="data" :style="'background-color:' + background">
    <span class="material-symbols-rounded icon" :style="'color:' + iconColor">
      {{ dataIcon }}
    </span>
    <h2>{{ $t(dataTitle) }}</h2>
    <p>{{ $t(dataDescription) }}</p>
    <span id="apiData">{{ apiData }}</span>
  </section>
</template>

<script>
export default {
  name: "LiveTrucks",
  props: {
    title: {
      type: String,
      default: "data.title",
    },
    description: {
      type: String,
      default: "data.desc",
    },
    api: {
      type: String,
      default: "https://api.boekestijntransport.com:50125/api/get_trucks",
    },
    fallback: {
      type: String,
      default: "1000",
    },
    icon: {
      type: String,
      default: "car",
    },
    background: {
      type: String,
      default: "#fff",
    },
    iconColor: {
      type: String,
      default: "#000",
    },
  },
  computed: {
    dataTitle() {
      return this.title;
    },
    dataDescription() {
      return this.description;
    },
    dataApi() {
      return this.api;
    },
    dataFallback() {
      return this.fallback;
    },
    dataBackground() {
      return this.background;
    },
    dataIcon() {
      return this.icon;
    },
  },
  data() {
    return {
      apiData: "",
    };
  },
  mounted() {
    this.fetchTruckData();
  },
  methods: {
    fetchTruckData() {
      fetch(this.dataApi)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.data) {
            this.apiData = data.data;
          } else {
            this.apiData = this.dataFallback;
          }
          console.log("data: " + this.apiData);
        })
        .catch((error) => {
          console.error("Error fetching truck data:", error);
          this.apiData = this.dataFallback;
        });
    },
  },
};
</script>

<style lang="scss">
#data {
  color: var(--black);
  display: grid;
  place-items: center;
  gap: 0px;
  padding: 60px;
  animation: fadeInAnimation ease 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  text-align: center;
  margin: 20px 0;
  border-radius: 20px;

  h2 {
    font-size: 30px;
  }

  p {
    font-size: 18px;
    margin-bottom: 30px;
  }

  #apiData {
    margin: 0 auto;
    padding: 5px 45px;
    border-radius: 40px;
    font-size: 30px;
    font-weight: 900;
    background-color: #2b2b2b;
    color: #fff;
    display: inline-block;
  }

  .icon {
    font-size: 60px;
    margin-bottom: 10px;
    cursor: default;
  }
}

.icon {
  font-size: 55px;
  margin-bottom: 10px;
  cursor: default;
}
</style>
