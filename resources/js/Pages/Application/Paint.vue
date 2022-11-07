<script setup>
    import {useStepperStore} from "@/Stores/StepperStore";
    import Step from "@/Applications/Paint/Step.vue";
    const stepperStore = useStepperStore();
</script>

<template>
    <div class="flex flex-col space-y-4 items-center justify-center pt-10 lg:p-20 ">
        <div class="main-card p-4 flex flex-col space-y-4 w-full max-w-2xl lg:shadow">
            <Step/>
        </div>
        <button v-if="stepperStore.history.length" @click="stepperStore.goBack()">Back</button>
    </div>
</template>

<style scoped>
    .main-card {
        min-height: 20rem;
        height: 100%;
    }
</style>
