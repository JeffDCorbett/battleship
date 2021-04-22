let eightBall = {
    index: 0,
    advice: ["Absolutely", "HA HA HA! Yeah Right!", "Potentially, but don't get your hopes up.", "Ever heard the song, Dream On?"],
    shake: function () {
        // this.index = this.index + 1;
        // if (this.index >= this.advice.length) {
        //     this.index = 0;
        this.index = Math.floor(Math.random() * 4);
        // }
    },
    look: function () {
        return this.advice[this.index];
    }
};

eightBall.shake();
console.log(eightBall.look());
