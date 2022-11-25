<script setup>
// import defineProps from 'vue'
import { ref } from "vue";
import { defineProps } from "vue";
import { useStepperStore } from "@/Stores/StepperStore";
import Step from "@/Applications/Gospel/Step.vue";
import Layout from '@/Layouts/Layout.vue';
const stepperStore = useStepperStore();

defineProps({
    name: {
        type: String,
        required: false,
    }
});
</script>

<template>
    <Layout>
        <div
            class="flex-1 flex flex-col items-center lg:justify-start justify-between lg:pt-10 lg:p-10 py-5"
        >
            <div class="wrapper w-full max-w-2xl flex justify-center">
                <div class="main-card p-4 flex flex-col space-y-4">
                    <Step :name="name"/>
                </div>
            </div>
            <button
                v-if="stepperStore.history.length"
                @click="stepperStore.goBack()"
                class="border-b-2 border-dashed border-gray-800"
            >
                Back
            </button>
        </div>
    </Layout>
</template>

<style scoped>
.wrapper {
    min-height: 28rem;
}
.main-card {
    min-height: 18rem;
    height: 100%;
}
</style>
