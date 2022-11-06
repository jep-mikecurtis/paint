<script setup>
        import {useStepperStore} from "@/Stores/StepperStore";
        import QuickButton from "@/Components/QuickButton.vue";
        import QuickHeading from "@/Components/QuickHeading.vue";
        const stepperStore = useStepperStore();
</script>

<template>
    <template  v-if="stepperStore.step == 1">
        <QuickHeading>
            Great We Would Love To Paint Your Home! <br>
            Will You Be Painting The Interior Or Exterior?
        </QuickHeading>
        <div class="flex">
            <QuickButton class="flex-1" @click="stepperStore.nextStep('type', 'interior')">Interior</QuickButton>
            <QuickButton class="flex-1" @click="stepperStore.nextStep('type', 'exterior')">Exterior</QuickButton>
        </div>
    </template>
    <template v-if="stepperStore.step == 2">
        <QuickHeading>
            Do you know the square feet that will be painted?
        </QuickHeading>
        <div class="flex">
            <QuickButton class="flex-1" @click="stepperStore.nextStep('know_sqft', true, 3)">Yes</QuickButton>
            <QuickButton class="flex-1" @click="stepperStore.nextStep('know_sqft', false, 4)">No</QuickButton>
        </div>
    </template>
    <template  v-if="stepperStore.step == 3">
        <QuickHeading>
            How many square feet will be painted?
        </QuickHeading>
        <input required type="number" min="0" :value="stepperStore.calcVal('sqft')" @input="stepperStore.setValue('sqft', $event.target.value)">
        <QuickButton @click="stepperStore.continue()">Continue</QuickButton>
    </template>
    <template v-if="stepperStore.step == 4">
        <QuickHeading>
            How many rooms will be painted?
        </QuickHeading>
        <input type="number" min="0" :value="stepperStore.calcVal('rooms')" @input="stepperStore.setValue('rooms', $event.target.value)">
        <QuickButton @click="stepperStore.continue">Continue</QuickButton>
    </template>
    <template>
        <QuickHeading>
            If interior, will the ceiling be painted?
        </QuickHeading>
        <div class="flex">
            <QuickButton class="flex-1" @click="stepperStore.nextStep('ceiling', true)">Yes</QuickButton>
            <QuickButton class="flex-1" @click="stepperStore.nextStep('ceiling', false)">No</QuickButton>
        </div>
    </template>
</template>
