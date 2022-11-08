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
        <QuickButton @click="stepperStore.continue(5)">Continue</QuickButton>
    </template>
    <template v-if="stepperStore.step == 4">
        <QuickHeading>
            Please estimate what you think the square feet will need to be painted.
        </QuickHeading>
        <div class="flex flex-col space-y-2">
            <QuickButton class="flex-1" @click="stepperStore.nextStep('sqft', 1500, 5)">1,000 - 1,500</QuickButton>
            <QuickButton class="flex-1" @click="stepperStore.nextStep('sqft', 2500, 5)">2,000 - 2,500</QuickButton>
            <QuickButton class="flex-1" @click="stepperStore.nextStep('sqft', 3500, 5)">3,000 - 3,500</QuickButton>
            <QuickButton class="flex-1" @click="stepperStore.nextStep('sqft', 4500, 5)">4,000 - 4,500</QuickButton>
            <QuickButton class="flex-1" @click="stepperStore.nextStep('sqft', 10000, 5)">10,000 or more</QuickButton>
        </div>
    </template>
    <template v-if="stepperStore.step == 5">
        <QuickHeading>
            Will the ceilings be painted?
        </QuickHeading>
        <div class="flex">
            <QuickButton class="flex-1" @click="stepperStore.nextStep('ceiling', true, 6)">Yes</QuickButton>
            <QuickButton class="flex-1" @click="stepperStore.nextStep('ceiling', false, 6)">No</QuickButton>
        </div>
    </template>
    <template v-if="stepperStore.step == 6">
        <QuickHeading>
            Will the trim, doors, and jambs be painted?
        </QuickHeading>
        <div class="flex">
            <QuickButton class="flex-1" @click="stepperStore.nextStep('trim', true, 7)">Yes</QuickButton>
            <QuickButton class="flex-1" @click="stepperStore.nextStep('trim', false, 7)">No</QuickButton>
        </div>
    </template>

    <template v-if="stepperStore.step == 7">
        <QuickHeading>
            Your quote is <span>${{ stepperStore.getPrice() }}</span>
        </QuickHeading>
        <h2 class="text-center">If you would like to continue with your quote please submit your information below.</h2>
        <div class="flex flex-col space-y-2">
            <label for="customer_name">Name</label>
            <input class="flex-1 text-sm p-1" type="text" :value="stepperStore.calcVal('customer_name')" @input="stepperStore.setValue('customer_name', $event.target.value)">
            <label for="customer_email">Email</label>
            <input class="flex-1 text-sm p-1" type="email" :value="stepperStore.calcVal('customer_email')" @input="stepperStore.setValue('customer_email', $event.target.value)">
            <label for="customer_phone">Phone</label>
            <input class="flex-1 text-sm p-1" type="email" :value="stepperStore.calcVal('customer_phone')" @input="stepperStore.setValue('customer_phone', $event.target.value)">
            <QuickButton class="flex-1">Submit</QuickButton>
        </div>
    </template>
</template>
