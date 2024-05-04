<template>
  <section id="locations">
    <span class="material-symbols-rounded icon" :style="'color:' + iconColor">
      {{ icon }}
    </span>
    <h2>{{ $t(title) }}</h2>
    <p>{{ $t(description) }}</p>
    <div id="map">
      <l-map
        :zoom="11"
        :center="[46.9264883, 29.1665167]"
        :use-global-leaflet="false"
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-marker
          ref="marker"
          :lat-lng="[47.04696756913603, 28.765961248669072]"
        >
          <l-popup>
            <b>BOEKESTIJN TRANSPORT SERVICE Moldova</b><br />{{
              $t("locations.main")
            }}
          </l-popup>
        </l-marker>
        <l-marker
          ref="marker"
          :lat-lng="[46.86025884988751, 29.47809879721805]"
        >
          <l-popup>
            <b>BOEKESTIJN TRANSPORT SERVICE Moldova</b><br />{{
              $t("locations.othertwo")
            }}
          </l-popup>
        </l-marker>
      </l-map>
    </div>
  </section>
</template>

<script setup>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";

defineProps({
  title: String,
  description: String,
  icon: String,
  iconColor: String,
  mapZoom: Number,
  mapCenter: Number,
  markerOne: Number,
  markerOneText: String,
  markerOneTranslation: String,
  markerTwo: Number,
  markerTwoText: String,
  markerTwoTranslation: String,
});
</script>

<style lang="scss">
#locations {
  display: grid;
  place-items: center;
  padding-top: 40px;
  margin: 20px 0;
  border-radius: 20px;
  background-color: #e8ffdda6;

  h2 {
    font-size: 200%;
  }

  p {
    font-size: medium;
    margin-top: 0.5%;
    margin-bottom: 30px;
  }

  #other-address {
    font-weight: 500;
    font-size: 90%;
    text-align: center;
    margin: 0.5% 0;
    padding: 10px 0;
  }

  #map {
    position: relative;
    height: 700px;
    border-radius: 0 0 20px 20px;
    width: 100%;
    margin-bottom: 25px;
  }
}
</style>
