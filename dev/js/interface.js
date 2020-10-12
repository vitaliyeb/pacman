


export default class Interface {
    constructor() {
        this.elWrapper = document.getElementById('interface');
        this.elScore = document.querySelector('.score > span');
        this.allPacmanLife = document.querySelectorAll('.life > svg');
    }

    updateScore(score) {
        let { elScore } = this;
        elScore.innerHTML = score;
    }

    removeLife(indx) {
        this.allPacmanLife[indx].style.opacity = 0;
    }



}