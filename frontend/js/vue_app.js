new Vue({
    el: '#app',
    data: {
        darkMode: false,
        dose: null,
        weight: null,
        timeOfEffect: null
    },
    methods: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
        },
        calculateTimeOfEffect() {
            if (this.dose && this.weight) {
                this.timeOfEffect = (this.dose / this.weight * 10).toFixed(2);
            }
        }
    }
});