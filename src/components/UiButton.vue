<template>
    <button class="max-w-full sm:max-w-[200px] px-8 py-4 rounded font-bold duration-200"
        :class="{ 'hover:bg-[#69e073d2] hover:border-[#69e073d2] hover:text-white': variant === 'accept', 'hover:bg-[#e06969d2] hover:border-[#e06969d2] hover:text-white': variant === 'cancel' }">
        <slot />
    </button>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
    variant: {
        type: String,
        default: 'default'
    }
});
</script>

<style lang="scss" scoped></style>