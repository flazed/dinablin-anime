<template>
  <global-header />
  <router-view class="grow" />
  <global-footer />
</template>

<script setup lang="ts">
import GlobalFooter from "@components/global/global-footer.vue";
import GlobalHeader from "@components/global/global-header.vue";
</script>
