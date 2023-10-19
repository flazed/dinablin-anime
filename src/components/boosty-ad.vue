<i18n>
{
  "ru": {
    "adLink": "Ты еще не на Boosty?! Заходи!"
  },
  "ua": {
    "adLink": "Ти ще не на Boosty? Заходь!"
  },
  "en": {
    "adLink": "Are you not on Boosty yet?! Come in!"
  }
}
</i18n>

<template>
  <div class="flex flex-col relative justify-center items-center rounded-2xl overflow-hidden h-min">
    <div class="w-full brightness-[0.45]">
      <dina-blin-slider
        skey="boosty-ad"
        :items="boostyAdImagesList"
      >
        <template #content="item: {src: string}">
          <dina-blin-link
            is-external-link
            ignore-settings
            :link="socialsLinks.boosty"
          >
            <img
              :src="item.src"
              alt=""
            >
          </dina-blin-link>
        </template>
      </dina-blin-slider>
    </div>
    <dina-blin-link
      is-external-link
      ignore-settings
      :link="socialsLinks.boosty"
      class="flex justify-center items-center grow absolute z-10 w-full h-full"
    >
      <span class="text-[#f15f2c] animate-pulse">{{ t('adLink') }}</span>
    </dina-blin-link>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

import DinaBlinLink from "@elements/dina-blin-link.vue";
import DinaBlinSlider from "@elements/dina-blin-slider.vue";

import { boostyAdImagesList, socialsLinks } from "@/global.consts.ts";

const { t } = useI18n();
</script>
