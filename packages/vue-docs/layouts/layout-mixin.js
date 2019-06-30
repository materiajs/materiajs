import MainToolbar from '../components/layout/MainToolbar.vue';
import MainSidebar from '../components/layout/MainSidebar.vue';

export default {
  components: {
    MainSidebar,
    MainToolbar,
  },
  data: () => ({
    showSidebar: true,
  }),
  computed: {
    darkMode() {
      const store = this.$store;
      if (store.state && store.state.materiajs) {
        return store.state.materiajs.darkMode;
      }
      return false;
    },
  },
};
