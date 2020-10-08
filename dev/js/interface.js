


export default class Interface {
    constructor() {
        this.elWrapper = document.getElementById('interface');
        this.elScore = document.querySelector('.score > span');
    }

    updateScore(score) {
        let { elScore } = this;
        elScore.innerHTML = score;
    }

}