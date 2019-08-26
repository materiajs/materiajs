
export default {
  bind(el, binding) {
    console.log(binding.value);
    if (binding.value) {
      el.style['border-radius'] = `${binding.value}px`;
    }
  },
};
