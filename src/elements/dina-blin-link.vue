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
    class="font-bold"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  link: string;
  isExternalLink?: boolean;
}>()
</script>
