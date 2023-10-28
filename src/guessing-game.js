class GuessingGame {
    constructor() {
        this.guessing;
        this.min;
        this.max;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.guessing = Math.round((this.max - this.min) / 2);
    }

    guess() {
        return this.guessing;
    }

    lower() {
        this.max = this.guessing;
        this.guessing = Math.round((this.max - this.min) / 2 + this.min);
    }

    greater() {
        this.min = this.guessing;
        this.guessing = Math.round((this.max - this.min) / 2 + this.min);
    }
}

module.exports = GuessingGame;
