
export default {
  bind(el, binding) {
    if (binding.value) {
      const value = `linear-gradient(${binding.arg ? `${binding.arg},` : ''} var(--${binding.value[0]}), var(--${binding.value[1] || binding.value[0]})`;
      el.style['background-image'] = value;
      el.style.color = `var(--${binding.value[0]}-text)`;
    }
  },
};
