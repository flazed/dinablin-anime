import { defineStore } from "pinia";
import { ref } from "vue";

export const useVideoStore = defineStore('video', () => {
  const videos = ref({});

  return {
    videos
  }
})
