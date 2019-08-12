
export default {
  computed: {
    isMobile() {
      const { $mq } = this;
      return ['xs', 'sm', 'md'].includes($mq);
    },
  },
};
