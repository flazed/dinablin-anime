<template>
  <dina-blin-select
    :values-list="langList"
    :current-value="currentLang"
    :on-change="handleChangeLang"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

import DinaBlinSelect from "@elements/dina-blin-select.vue";

import { OptionProps } from "@/types/props.ts";

const { locale } = useI18n()

const langList = <OptionProps[]>[
  { value: "ru", content: "RU" },
  { value: "ua", content: "UA" },
  { value: "en", content: "EN" }
]
const currentLang = ref<OptionProps>(langList[0]);

const handleChangeLang = (lang: OptionProps) => {
  locale.value = lang.value;
  currentLang.value = lang;
}
</script>
