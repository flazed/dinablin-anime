<template>
  <input
    v-bind="props"
    class="relative border outline-0 rounded-md p-1.5 focus:border-black"
  >
</template>

<script setup lang="ts">
import { InputHTMLAttributes } from "vue";

interface InputProps extends /* @vue-ignore */ InputHTMLAttributes {}

const props = defineProps<InputProps>()
</script>
