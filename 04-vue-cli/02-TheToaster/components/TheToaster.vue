<template>
  <div class="toasts">
    <UiToast v-for="toast in toasts" :toast="toast" @removeEl="remove()" :key="toast.id" />

  </div>
</template>

<script>

import UiToast from './UiToast.vue';

export default {
  name: 'TheToaster',
  data() {
    return {
      toasts: [],
      id: 0
    }
  },
  methods: {
    success(msg) {
      this.toasts.push({
        message: msg,
        statusClass: 'toast_success',
        icon: 'check-circle',
        id: ++this.id
      })
      
    },
    error(msg) {
      this.toasts.push({
        message: msg,
        statusClass: 'toast_error',
        icon: 'alert-circle',
        id: ++this.id
      })
    
    },
    remove() {
      this.toasts.shift()
    }
  },

  components: { UiToast },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}
.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}


.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}


</style>