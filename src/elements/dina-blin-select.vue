<template>
  <div
    class="relative inline-block rounded-lg"
    :class="border"
  >
    <div
      v-click-outside="() => isOpen = false"
      class="p-1.5 rounded-lg flex items-center content-between cursor-pointer select-none"
      @click="() => isOpen = !isOpen"
    >
      <span class="grow">
        <slot
          v-if="customTemplate"
          name="option-content"
          :content="currentValue.content"
        />
        <template v-else>
          {{ currentValue.content }}
        </template>
      </span>
      <font-awesome-icon
        :icon="['fas', 'chevron-up']"
        class="w-3 transition-all ml-2"
        :class="{ 'rotate-180': isOpen }"
      />
    </div>
    <div
      class="absolute top-[110%] block w-full rounded-lg bg-inherit transition-all z-50 [border: inherit] overflow-hidden"
      :class="[{
        'opacity-100 visible': isOpen,
        'translate-y-3 opacity-0 invisible': !isOpen
      }, border]"
    >
      <div
        v-for="(option) in valuesList"
        :key="option.value"
        class="cursor-pointer select-none transition-all px-2 py-1 hover:bg-gray-500/25"
        :class="{
          'bg-gray-800/10': currentValue.value === option.value
        }"
        @click="() => handleOptionClick(option)"
      >
        <slot
          v-if="customTemplate"
          name="option-content"
          v-bind="option"
        />
        <template v-else>
          {{ option.content }}
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { OptionProps } from "@globalTypes/props.ts";

interface SelectProps {
  currentValue: OptionProps;
  valuesList: OptionProps[];
  onChange(option: OptionProps): void;
  border?: string;
  customTemplate?: boolean;
}

const props = defineProps<SelectProps>();
const isOpen = ref(false);

const handleOptionClick = (option: OptionProps) => {
  isOpen.value = false;
  props.onChange(option)
}
</script>
