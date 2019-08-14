
export default {
  bind(el, binding) {
    if (binding.value) {
      const value = binding.value.toString().includes('px') ? binding.value : `${binding.value}px`;
      el.style.padding = value;
    }
  },
};
