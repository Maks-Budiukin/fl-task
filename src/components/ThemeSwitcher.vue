<template>
    <div class="w-[90px] h-[52px] border border-[var(--border-color)] rounded-full">
        <div class="w-[50px] h-[50px] bg-[var(--bg-color)] border border-[var(--border-color)] rounded-full flex justify-center items-center cursor-pointer duration-200"
            :class="{ 'translate-x-[80%]': currentTheme === 'dark' }" @click="setTheme">
            <p v-if="currentTheme === 'light'" class="text-[30px]">&#9788;</p>
            <p v-else class="text-[30px]">&#9789;</p>
        </div>
    </div>
</template>

<script setup>
import { useTheme } from '../composables/useTheme.js'

const { currentTheme, setTheme } = useTheme()

</script>