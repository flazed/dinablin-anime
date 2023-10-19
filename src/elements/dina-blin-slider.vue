<template>
  <swiper-container v-bind="sliderProps ? sliderProps : defaultSettings">
    <swiper-slide
      v-for="(item, index) in items"
      :key="`${skey}#${index}`"
    >
      <slot
        name="content"
        v-bind="item"
      />
    </swiper-slide>
  </swiper-container>
</template>

<script setup lang="ts" generic="T">
import { register } from "swiper/element/bundle";
import { SwiperOptions } from "swiper/types";
register();

defineProps<{
  skey: string;
  items: T[];
  sliderProps?: SwiperOptions,
}>();

const defaultSettings: SwiperOptions = {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
}
</script>
