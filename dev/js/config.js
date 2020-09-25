

(() => {
    window._configCanvas = {
        w: window.innerWidth,
        h: window.innerHeight,
        ghostPosition: {
            shadow: [14, 9],
            pinki: [14, 12],
            inki: [14, 14],
            klayd: [14, 16],
        },
        timeId : {
            ghosts: {
                shadow: {
                    goOutsideHomeGhosts: null
                },
                pinki: {
                    goOutsideHomeGhosts: null
                },
                inki: {
                    goOutsideHomeGhosts: null
                },
                klayd: {
                    goOutsideHomeGhosts: null
                },
            }
        },
        timeTable: [
            [
                {type: 'diffusion', time: 7000},
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
            currentGlobalType: 'diffusion',
            countPeriod: 0,
            level: 1,
            eaten: 0,
            score: 0
        }
    }
})()