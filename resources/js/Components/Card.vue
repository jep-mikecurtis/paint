<script setup>
    // define props
    const props = defineProps({
        class: {
            type: String,
            required: false,
        },
    });
</script>

<template>
    <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg" :class="class">
        <slot></slot>
    </div>
</template>
