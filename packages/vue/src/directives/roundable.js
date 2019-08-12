
export default {
  bind(el, binding) {
    if (binding.value) {
      el.style['border-radius'] = `${binding.value}px`;
    }
  },
};
