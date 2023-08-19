<template>
  <container class="mt-5">
    {{ params.id }}
  </container>
</template>

<script setup lang="ts">
  import { useRoute } from "vue-router";

  import Container from "@elements/container.vue";

  const { params } = useRoute()
</script>
