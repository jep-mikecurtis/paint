<script setup>
    import {useStepperStore} from "@/Stores/StepperStore";
    import Step from "@/Applications/Paint/Step.vue";
    const stepperStore = useStepperStore();
</script>

<template>
    <div class="flex flex-col space-y-4 items-center justify-center pt-10 lg:p-20 ">
        <div class="wrapper flex w-full max-w-2xl">
            <div class="main-card p-4 flex flex-col space-y-4 lg:shadow flex-1">
                <Step/>
            </div>
        </div>
        <button v-if="stepperStore.history.length" @click="stepperStore.goBack()">Back</button>
    </div>
</template>

<style scoped>
.wrapper {
    min-height: 24rem;
}
    .main-card {
        min-height: 18rem;
        height: 100%;
    }
</style>
