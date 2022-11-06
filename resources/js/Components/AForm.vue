<script setup>
    import { defineProps } from 'vue';
    import { useForm } from '@inertiajs/inertia-vue3';

    const props = defineProps({
        action: {
            type: String,
            required: true,
        },
        method: {
            type: String,
            required: true,
        },
    });
</script>

<template>
    <form :action="action" :method="method" @submit.prevent>
        <slot />
    </form>
</template>
