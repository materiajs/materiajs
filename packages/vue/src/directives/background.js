const getValue = s => (s.includes('#') ? s : `var(--${s})`);

export default {
  bind(el, binding) {
    if (binding.value) {
      const value = `linear-gradient(${binding.arg ? `${binding.arg},` : ''} ${getValue(binding.value[0])}, ${getValue(binding.value[1] || binding.value[0])}`;
      el.style['background-image'] = value;
      el.style.color = `var(--${binding.value[0]}-text)`;
    }
  },
  update(el, binding) {
    if (binding.value) {
      const value = `linear-gradient(${binding.arg ? `${binding.arg},` : ''} ${getValue(binding.value[0])}, ${getValue(binding.value[1] || binding.value[0])}`;
      el.style['background-image'] = value;
      el.style.color = `var(--${binding.value[0]}-text)`;
    }
  },
};
