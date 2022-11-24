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
            class="flex flex-col space-y-4 items-center justify-center lg:pt-10 lg:p-10 py-5"
        >
            <div class="wrapper flex w-full max-w-2xl">
                <div class="main-card p-4 flex flex-col space-y-4 lg:shadow flex-1 bg-white">
                    <Step :name="name"/>
                </div>
            </div>
            <button
                v-if="stepperStore.history.length"
                @click="stepperStore.goBack()"
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
