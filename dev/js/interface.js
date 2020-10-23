


export default class Interface {
    constructor() {
        this.elWrapper = document.getElementById('interface');
        this.elScore = document.querySelector('.score > span');
        this.level = document.querySelector('.level > span');
        this.allPacmanLife = document.querySelectorAll('.life > svg');
        this.allFruct = document.querySelectorAll('.fructs > svg');
    }

    updateScore(score) {
        let { elScore } = this;
        elScore.innerHTML = score;
    }

    removeLife(indx) {
        this.allPacmanLife[indx].style.opacity = 0;
    }

    levelUp(leveNew) {
        this.level.innerHTML = leveNew;
    }

    removeFruct(indx) {
        this.allFruct[indx].style.opacity = 0;
        console.log('s')
    }

}