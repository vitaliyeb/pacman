

(() => {
    window._configCanvas = {
        w: window.innerWidth,
        h: window.innerHeight,
        pacmanPosition: [29, 13],
        ghostPosition: {
            shadow: [14, 9],
            pinki: [14, 12],
            inki: [14, 14],
            klayd: [14, 16],
        },
        positionGoToHome: {
            shadow: [14, 12],
            pinki: [14, 12],
            inki: [14, 14],
            klayd: [14, 16],
        },
        timeId : {
            globalTypeTimer: null,
            fructTime: null,
            ghosts: {
                shadow: {
                    goOutsideHomeGhosts: null,
                    fright: null
                },
                pinki: {
                    goOutsideHomeGhosts: null,
                    fright: null
                },
                inki: {
                    goOutsideHomeGhosts: null,
                    fright: null
                },
                klayd: {
                    goOutsideHomeGhosts: null,
                    fright: null
                },
            },
            frightTimer: {
                period: [5000, 3000, 1000],
                timer: null,
            }
        },
        timeTable: [
            [
                {type: 'diffusion', time: 3000},
                {type: 'chase', time: 20000},
                {type: 'diffusion', time: 7000},
                {type: 'chase', time: 20000},
                {type: 'diffusion', time: 5000},
                {type: 'chase', time: 20000},
                {type: 'diffusion', time: 5000},
                {type: 'chase', time: false},
            ],
            [
                {type: 'diffusion', time: 7000},
                {type: 'chase', time: 20000},
                {type: 'diffusion', time: 7000},
                {type: 'chase', time: 20000},
                {type: 'diffusion', time: 5000},
                {type: 'chase', time: 1033000},
                {type: 'diffusion', time: 3000},
                {type: 'chase', time: false},
            ],
            [
                {type: 'diffusion', time: 7000},
                {type: 'chase', time: 20000},
                {type: 'diffusion', time: 7000},
                {type: 'chase', time: 20000},
                {type: 'diffusion', time: 5000},
                {type: 'chase', time: 1037000},
                {type: 'diffusion', time: 2000},
                {type: 'chase', time: false},
            ]
        ],
        counterEatinOutside: {
            shadow: 0,
            pinki: 0,
            inki: 30,
            klayd: 60,
        },
        game: {
            play: true,
            pause: true,
            restartLevel: false,
            currentGlobalType: 'diffusion',
            fright: false,
            frutisEaten: false,
            fructs: 3,
            countPeriod: 0,
            allEatElement: 0,
            hp: 3,
            level: 1,
            eaten: 0,
            _score: 0,
            set score (score) {
                console.log(score);
                this._score+= score;
                ih.updateScore(this._score);
            },
            get score () { return this._score }
        }
    }
})()