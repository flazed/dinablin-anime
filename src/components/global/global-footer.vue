<template>
  <div class="border-t-2 py-3 px-2 text-center">
    <container class="grid grid-cols-1 sm:grid-cols-2 md:flex md:justify-center text-center text-lg">
      <span class="mr-2 text-orange-600">
        <font-awesome-icon :icon="['fas', 'bell']" />
        <dina-blin-link
          is-external-link
          is-custom-color
          class="ml-1.5 before:bg-orange-600"
          link="https://dinablin.com/"
        >Самая важная ссылка
        </dina-blin-link>
      </span>
      <span class="mr-2 text-[#6441a4]">
        <font-awesome-icon :icon="['fab', 'twitch']" />
        <dina-blin-link
          is-external-link
          is-custom-color
          class="ml-1.5 before:bg-[#6441a4]"
          link="https://www.twitch.tv/dinablin"
        >Twitch
        </dina-blin-link>
      </span>
      <span class="mr-2 text-[#7289DA]">
        <font-awesome-icon :icon="['fab', 'discord']" />
        <dina-blin-link
          is-external-link
          is-custom-color
          class="ml-1.5 before:bg-[#7289DA]"
          link="https://discord.com/invite/dinablin"
        >Discord
        </dina-blin-link>
      </span>
      <span class="mr-2 text-[#2AABEE]">
        <font-awesome-icon :icon="['fab', 'telegram']" />
        <dina-blin-link
          is-external-link
          is-custom-color
          class="ml-1.5 before:bg-[#2AABEE]"
          link="https://t.me/dinablin"
        >Telegram
        </dina-blin-link>
      </span>
    </container>
    <span class="inline-flex relative justify-center items-center mt-2 pt-2 before:content-[''] before:absolute before:top-0 before:w-[130%] before:h-[1px] before:bg-gray-300">
      Develop by
      <dina-blin-link
        is-external-link
        link="https://t.me/flazed"
        class="font-bold text-rose-600 mx-1 before:bg-rose-600"
      >
        flazed
      </dina-blin-link>
      with
      <font-awesome-icon
        :icon="['fas', 'heart']"
        beat
        class="ml-2 text-rose-600"
      />
    </span>
  </div>
</template>

<script setup lang="ts">
import Container from "@elements/container.vue";
import DinaBlinLink from "@elements/dina-blin-link.vue";
</script>
