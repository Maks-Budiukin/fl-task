<template>
    <Teleport to="body">
        <transition name="fade">
            <div v-if="show" class="fixed inset-0 z-[9] opacity-60 bg-[#000]/[0.9] cursor-pointer"
                @click="hideOnBackdropClick ? emit('close') : null">
            </div>
        </transition>

        <transition :name="'fade'">
            <div v-if="show"
                class="fixed z-[10] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full sm:w-[50vw] max-h-screen rounded bg-[var(--bg-color)] border border-[var(--border-color)] p-4"
                role="dialog">


                <div class="max-h-screen">
                    <div class="flex items-center justify-between border-b border-[var(--border-color)] pb-4">
                        <div class="text-xl font-bold">
                            <slot name="header" />
                        </div>
                        <div v-if="closeButton" class="ml-auto">
                            <UiButton @click="emit('close')">X</UiButton>
                        </div>
                    </div>

                    <div class="py-12">
                        <slot name="default" />
                    </div>

                    <slot name="footer" />
                </div>
            </div>
        </transition>

    </Teleport>
</template>

<script setup>
import UiButton from './UiButton.vue'
const emit = defineEmits(['close'])
// eslint-disable-next-line no-unused-vars
const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },
    closeButton: {
        type: Boolean,
        default: false
    },
    hideOnBackdropClick: {
        type: Boolean,
        default: false
    },
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s cubic-bezier(0.5, 0, 0.5, 1);
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>