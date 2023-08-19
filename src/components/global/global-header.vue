<template>
  <div class="bg-red-600 p-2">
    <container class="flex items-center">
      <div class="w-[20%]">
        <img
          src="/logo.png"
          alt=""
          class="w-12 animate-heartbeat"
        >
      </div>
      <div class="w-[60%] text-center">
        <dina-blin-link
          link="/"
          class="font-bold text-white text-2xl font-serif tracking-widest"
        >
          DinaBlin Anime
        </dina-blin-link>
      </div>
      <div class="w-[20%] flex">
        <change-lang class="ml-auto text-white bg-red-700" />
      </div>
    </container>
  </div>
</template>

<script setup lang="ts">
import ChangeLang from "@components/settings/changeLang.vue";
import Container from "@elements/container.vue";
import DinaBlinLink from "@elements/dina-blin-link.vue";
</script>
