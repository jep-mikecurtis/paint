<script setup>
    const props = defineProps({
        type: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        error: {
            type: String,
            required: false,
        },
    });
</script>

<template>
    <div class="flex flex-col space-y-1">
        <label :for="name" v-text="label" class="text-md"></label>
        <input :type="type" class="border text-sm p-1 border-gray-400 rounded">
        <small v-text="error"></small>
    </div>
</template>
