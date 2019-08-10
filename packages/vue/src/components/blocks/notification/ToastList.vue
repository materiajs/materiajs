<template>
  <div class="mat-toast-list">
    <transition-group
      name="list-complete" tag="p">
      <toast
        v-for="message in messages"
        :color="message.color"
        :key="message.id"
        class="list-complete-item"
        @close="popMessage"
      >
        <mat-fa space="right" :icon="message.icon"></mat-fa>
        {{ message.text }}
      </toast>
    </transition-group>
  </div>
</template>

<script>
import t from 'vue-types';
import Toast from './Toast.vue';

export default {
  name: 'ToastList',
  components: {
    Toast,
  },
  props: {
    value: t.array,
    intervalTime: t.number.def(5000),
  },
  data: () => ({
    interval: null,
    looping: false,
  }),
  watch: {
    value: {
      handler(messages) {
        if (!this.looping && messages.length) {
          this.looping = true;
          this.interval = setInterval(this.popMessage, this.intervalTime);
        }
      },
      immediate: true,
      deep: true,
    },
  },
  computed: {
    messages() {
      if (this.value.length) {
        return [this.value[0]];
      }
      return [];
    },
  },
  methods: {
    popMessage() {
      if (this.interval) {
        const newMessages = [...this.value].slice(1, this.value.length);
        clearInterval(this.interval);
        this.looping = false;
        this.$emit('input', newMessages);
      }
    },
  },
};
</script>

<style scoped lang="scss">
  .mat-toast-list {
    display: flex;
    height: 0;
    position: absolute;
    >* {
      margin-bottom: 15px;
    }
    .list-complete-item {
      transition: all .4s;
      transition-delay: .4s;
      position: fixed;
      top: 70px;
      left: 50%;
      transform: translate(-50%, 0);
    }
    .list-complete-enter,
    .list-complete-leave-to
      /* .list-complete-leave-active below version 2.1.8 */ {
      opacity: 0;
      transform: translate(-50%, -30px);
      transition-delay: 0s;
    }
    .list-complete-leave-active {
      position: fixed;
    }
  }
</style>
