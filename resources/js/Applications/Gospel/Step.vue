<script setup>
import { useStepperStore } from "@/Stores/StepperStore";
import QuickButton from "@/Components/QuickButton.vue";
import QuickHeading from "@/Components/QuickHeading.vue";
const stepperStore = useStepperStore();
</script>

<template>
    <template v-if="stepperStore.step == 1">
        <QuickHeading>
            If today was your last day on earth are you
            <br />
            100% sure you would go to heaven?
        </QuickHeading>
        <div class="flex">
            <QuickButton
                class="flex-1"
                @click="stepperStore.nextStep('know_for_sure', true)"
                >Yes</QuickButton
            >
            <QuickButton
                class="flex-1"
                @click="stepperStore.nextStep('know_for_sure', false)"
                >No, but I would like to be</QuickButton
            >
        </div>
    </template>

    <template v-if="stepperStore.step == 2">
        <QuickHeading> 1. You must accept that you are a sinner. </QuickHeading>
        <p>
            Rom. 3:23 For all have sinned, and come short of the glory of God;
        </p>
        <p>Everyone has sinned. We are all guilty before god.</p>
        <div class="flex">
            <QuickButton
                class="flex-1"
                @click="stepperStore.nextStep('all_have_sinned', true)"
                >Continue</QuickButton
            >
        </div>
    </template>

    <template v-if="stepperStore.step == 3">
        <QuickHeading>
            2. You must accept that as a sinner, you owe a penalty.
        </QuickHeading>
        <p>
            Rom. 6:23 For the wages of sin is death...
        </p>
        <p>
            Rev. 21:8 But the fearful, and unbelieving, and the abominable, and
            murderers, and whoremongers, and sorcerers, and idolaters, and all
            liars, shall have their part in the lake which burneth with fire and
            brimstone: which is the second death.
        </p>
        <div class="flex">
            <QuickButton
                class="flex-1"
                @click="stepperStore.nextStep('all_have_sinned', true)"
                >Continue</QuickButton
            >
        </div>
    </template>

    <template v-if="stepperStore.step == 4">
        <QuickHeading>4. You must accept the fact that salvation is a free gift, not something earned by good works, baptism, etc.</QuickHeading>
        <p>
            Rom. 6:23 For the wages of sin is death; but the gift of God is
            eternal life through Jesus Christ our Lord.
        </p>
        <p>Jesus purchased your salvation from hell with His own blood, then comes to you and offers it to you, as a free gift.</p>
        <div class="flex">
            <QuickButton
                class="flex-1"
                @click="stepperStore.nextStep('all_have_sinned', true)"
                >Continue</QuickButton
            >
        </div>
    </template>
    <template v-if="stepperStore.step == 5">
        <QuickHeading>
            Your Eternity Now Hinges On One Decision
        </QuickHeading>
        <div class="flex">
            <QuickButton
                class="flex-1"
                @click="stepperStore.nextStep('all_have_sinned', true)"
                >Get Saved!</QuickButton
            >
        </div>
    </template>
    <template v-if="stepperStore.step == 6">
        <QuickHeading>
            Rom. 10:13 For whosoever shall call upon the name of the Lord shall be saved.
        </QuickHeading>

        <p>
            <b>
                Will you believe God?
            </b>
            If so, earnestly, sincerely pray this simple prayer, trusting Christ:
        </p>
        <p>
            Dear Jesus, <br>
I know I am a sinner. I know I deserve to go to Hell, but I believe You died for me, to pay the debt I owe, and I trust You, and You alone, to save me, once and for all, and take me to Heaven, when I die. Thank you for saving me today. Amen.
        </p>
        <div class="flex">
            <QuickButton
                class="flex-1"
                @click="stepperStore.nextStep('all_have_sinned', true)"
                >I Asked Jesus To Save Me!</QuickButton
            >
        </div>
    </template>
    <template v-if="stepperStore.step == 7">
        <QuickHeading>
            Thats Awesome! Doesn't it feel good to know your going to heaven!
        </QuickHeading>

        <p>
            We would love to help you find a church please leave your name and email below.
        </p>

        <div class="flex flex-col space-y-2 text-md">
            <label for="name">Name</label>
            <input class="text-sm p-1" required type="text" min="0" :value="stepperStore.calcVal('name')" @input="stepperStore.setValue('name', $event.target.value)"/>
            <label for="email">Email</label>
            <input class="text-sm p-1" required type="email" min="0" :value="stepperStore.calcVal('email')" @input="stepperStore.setValue('email', $event.target.value)"/>
        </div>
    </template>

</template>