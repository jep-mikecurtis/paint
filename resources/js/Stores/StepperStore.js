import { defineStore } from "pinia";

export const useStepperStore = defineStore("paint", {
    state: () => ({
        step: 1,
        history: [],
        json: {
            "perSqFt": 1.75
        }
    }),
    getters: {

    },
    actions: {
        continue(step = null) {
            this.setHistory(this.step);
            this.step = step ? step : this.step + 1;
        },

        nextStep(key, value, step = null) {
            this.json[key] = value
            this.setHistory(this.step);


            this.step = step ? step : this.step + 1;
        },

        setValue(key, value) {
            this.json[key] = value
        },

        calcVal(key) {
            console.log(key)
            return this.json[key] ? this.json[key] : null;
        },

        setHistory(step) {
            this.history.push(step);
        },

        goBack() {
            this.step = this.history[this.history.length - 1];
            this.history.pop();
        }
    },
});
