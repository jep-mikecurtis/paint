import { defineStore } from "pinia";

export const useStepperStore = defineStore("paint", {
    state: () => ({
        step: 1,
        history: [],
        json: {},
        interiorGallon: 350,
        exteriorGallon: 320,
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
            return this.json[key] ? this.json[key] : null;
        },

        setHistory(step) {
            this.history.push(step);
        },

        goBack() {
            this.step = this.history[this.history.length - 1];
            this.history.pop();
        },

        formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
            try {
                decimalCount = Math.abs(decimalCount);
                decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

                const negativeSign = amount < 0 ? "-" : "";

                let i = parseInt(
                    (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
                ).toString();
                let j = i.length > 3 ? i.length % 3 : 0;

                return (
                    negativeSign +
                    (j ? i.substr(0, j) + thousands : "") +
                    i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
                    (decimalCount
                        ? decimal +
                        Math.abs(amount - i)
                            .toFixed(decimalCount)
                            .slice(2)
                        : "")
                );
            } catch (e) {
                console.log(e);
            }
        },

        getPrice() {
            let base = 1.75;
            let ceiling = this.json['ceiling'] && this.json['ceiling'] == true ? 1.00 : 0;
            let trim = this.json['trim'] && this.json['trim'] == true ? 1.00 : 0;
            const sqFtPrice = base + ceiling + trim;

            return this.formatMoney(sqFtPrice * this.json['sqft'], 0);
        }
    },
});
