<template>
  <router-link
    v-if="!isExternalLink"
    :to="link"
    class="font-bold"
  >
    <slot />
  </router-link>
  <a
    v-else
    :href="link"
    :class="[{
      'before:bg-black': !isCustomColor,
    }, defaultClass]"
    target="_blank"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
import { toRefs } from "vue";

const props = defineProps<{
  link: string;
  isExternalLink?: boolean;
  isCustomColor?: boolean;
  ignoreSettings?: boolean
}>()

const { ignoreSettings } = toRefs(props)

const defaultClass = !ignoreSettings.value ? "font-bold relative inline-flex justify-center px-1.5 transition-colors hover:text-white hover:before:h-full before:content-[''] before:absolute before:bottom-0 before:w-full before:h-0 before:-skew-x-12 before:-z-10 before:transition-[height]" : "";
</script>
