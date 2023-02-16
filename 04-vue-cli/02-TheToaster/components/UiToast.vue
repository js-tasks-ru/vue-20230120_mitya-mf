<template>
    <div class="toast" :class="toast.statusClass">
        <UiIcon class="toast__icon" :icon="toast.icon" />
        <span>{{ toast.message }}</span>
    </div>
</template>

<script>
import UiIcon from './UiIcon.vue';

export default {
    name: 'UiToast',
    components: { UiIcon },
    props: {
        toast: {
            type: Object
        }
    },
    emits: ['removeEl'],
    mounted() {
        setTimeout(this.destroy, 5000)
    },
    methods: {
        destroy() {
            this.$emit('removeEl', '')
        }
    },
    components: { UiIcon }
}


</script>


<style>

</style>