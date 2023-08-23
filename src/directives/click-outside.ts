type clickOutside = HTMLElement & {
  clickOutsideEvent(event: Event): void,
}

export const clickOutside = {
  beforeMount: (el: clickOutside, binding: { value(): void }) => {
    el.clickOutsideEvent = event => {
      if (!(el === event.target || el.contains(event.target as HTMLElement))) {
        binding.value();
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted: (el: clickOutside) => {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
};
