<template>
  <div class="relative inline-block min-w-[70px] rounded-lg">
    <div
      v-click-outside="() => isOpen = false"
      class="p-1.5 rounded-lg flex items-center content-between cursor-pointer select-none"
      @click="() => isOpen = !isOpen"
    >
      <span class="grow">{{ currentValue.content }}</span>
      <font-awesome-icon
        :icon="['fas', 'chevron-up']"
        :class="{ 'rotate-180': isOpen }"
        class="w-3 transition-all ml-2"
      />
    </div>
    <div
      class="absolute top-[110%] block w-full p-1.5 rounded-lg bg-inherit transition-all"
      :class="{
        'opacity-100 visible': isOpen,
        'translate-y-3 opacity-0 invisible': !isOpen
      }"
    >
      <div
        v-for="option in valuesList"
        :key="option.value"
        class="cursor-pointer select-none rounded transition-all px-1 my-0.5 hover:bg-black/30"
        :class="{ 'bg-black/30': currentValue.value === option.value }"
        @click="() => handleOptionClick(option)"
      >
        {{ option.content }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { OptionProps } from "@globalTypes/props.ts";
import { ref } from "vue";

interface SelectProps {
  currentValue: OptionProps;
  valuesList: OptionProps[];
  onChange(option: OptionProps): void;
}

const props = defineProps<SelectProps>()

const isOpen = ref(false);

const handleOptionClick = (option: OptionProps) => {
  isOpen.value = false;
  props.onChange(option)
}
</script>
