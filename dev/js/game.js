import CreateMap from './map';
import RenderMapElements from './mapElement';
import Helper from './helper';
import { ShadowGhost, PinkiGhost, InkiGhost, KlaydGhost } from './ghost';
import Interface from "./interface";
import Pacman from "./pacman";


(() => {
    let canvasMap = document.getElementById('map');
    window.entities = {
        pacman: {}
    };

    window.resetLevel = function (){
        beforeStart();
    };

    window.levelUp = function (){
        ih.levelUp(++_configCanvas.game.level);
        _configCanvas.game.restartLevel = true;
        _configCanvas.game.allEatElement = 0;
        _configCanvas.game.eaten = 0;
        gameMap = CreateMap();
        renderMap();
    };

    window.createFrutis = function() {
        clearTimeout(_configCanvas.timeId.fructTime);
        let mc = mapContext,
            row = 14, //14
            col = 18, //18
            x = xs * col,
            y = ys * row,
            xdf = xs / 4,
            ydf =  ys / 4,
            minRadCherry = Math.min(xdf, ydf);
        if (gameMap[row][col] === '@') _configCanvas.game.frutisEaten = true;
        gameMap[row][col] = 'F';

        mc.beginPath();
        mc.fillStyle = '#000';
        mc.fillRect(x, y, xs, ys);
        [-1, 0.3].map((i, ind)=>{
            mc.beginPath();
            mc.fillStyle = 'red';
            mc.strokeStyle = '#000';
            mc.lineWidth = 1;
            let xm = x + xs / 2 +  xdf * i,
                ym = y + ys - ydf;
            mc.arc(xm, ym, minRadCherry, 0, Math.PI * 2);
            mc.fill();
            mc.stroke();
            mc.beginPath();
            mc.strokeStyle = '#7b592c';
            mc.lineWidth = 2;
            mc.moveTo(xm, ym - ydf / 3);
            mc.lineTo(x + xs / 2, y + ydf );
            if(ind === 1) mc.lineTo(x + xs / 1.5, y + ys / 6);
            mc.stroke();
        })
        mc.beginPath();
        _configCanvas.timeId.fructTime = setTimeout(
            ()=>{
                mapContext.beginPath();
                renderMapElements['O'](xs * col, ys * row);
                if (_configCanvas.game.frutisEaten){
                    gameMap[row][col] = '@';
                    mapContext.beginPath();
                    renderMapElements['@'](xs * col, ys * row, row, col)
                }else {
                    gameMap[row][col] = '#';
                }
            },5000
        );
    };

    window.ih = new Interface();
    let canvasGame = document.getElementById('game');
    let mapContext = canvasMap.getContext('2d');
    let gameContext = canvasGame.getContext('2d');
    let gameMap = CreateMap();
    let helper = new Helper(gameMap);
    let [xs, ys] =  helper.setSize(canvasMap, canvasGame);
    let renderMapElements = new RenderMapElements(xs, ys, mapContext, gameMap, gameContext, entities);


    function renderMap() {
        gameMap.map((row, ir) => {
            row.map((col, ic) => {
                // mapContext.beginPath();
                // mapContext.lineWidth = 1;
                // mapContext.rect(xs * ic, ys * ir, xs, ys);
                // mapContext.stroke();

                mapContext.beginPath();
                renderMapElements[col](xs * ic, ys * ir, ir, ic) 
                mapContext.stroke();
            });
        });
    }

    function initGhost() {
        let { ghostPosition: {
            pinki:[ irPinki, icPinki],
            shadow:[ irShadow, icShadow],
            inki: [irInki, icInki],
            klayd: [irKlayd, icKlayd]
        }  } = _configCanvas;

        entities['shadow'] = new ShadowGhost(gameContext, xs, ys, gameMap, xs*icShadow, ys*irShadow, irShadow, icShadow);
        entities['pinki'] = new PinkiGhost(gameContext, xs, ys, gameMap, xs*icPinki, ys*irPinki, irPinki, icPinki);
        entities['inki'] = new InkiGhost(gameContext, xs, ys, gameMap, xs*icInki, ys*irInki, irInki, icInki);
        entities['klayd'] = new KlaydGhost(gameContext, xs, ys, gameMap, xs*icKlayd, ys*irKlayd, irKlayd, icKlayd);
        setTypeAllGhost();
    }

    function setTypeAllGhost() {
        clearTimeout(_configCanvas.timeId.globalTypeTimer);
        let level = _configCanvas.game.level;
        let cto = _configCanvas.timeTable[level === 1 ? 0 : level >= 5 ? 2 : 1][_configCanvas.game.countPeriod++];
        if (!cto) return;
        for (let item of Object.values(entities)) {
            let it = item.type;
            if(it === 'pac man' || it === 'goOutside' || it === 'fright' || it === 'goToHome') continue;
            item.type = cto.type;
        }
        _configCanvas.game.currentGlobalType = cto.type;
        if(!cto.time) return;
        _configCanvas.timeId.globalTypeTimer = setTimeout(setTypeAllGhost, cto.time);
    }

    function allRender() {
        gameContext.clearRect(0,0,1000,1000);
        let { pacman, shadow, pinki, inki, klayd } = entities;
        pacman.renderPacMan();
        shadow.render();
        pinki.render();
        inki.render();
        klayd.render();
    }

    function loop() {
        if (!_configCanvas.game.play || _configCanvas.game.pause) return;
        allRender();
        if (_configCanvas.game.restartLevel) return beforeStart();
        requestAnimationFrame(loop);
    }

    function initPacman() {

        let [row, col] = _configCanvas.pacmanPosition;
        entities['pacman'] = new Pacman(gameContext, xs, ys, col * xs, row * ys, row, col, gameMap, mapContext, entities);
    }

    function beforeStart() {
        let ready = document.querySelector('.ready');
        initPacman();
        initGhost();
        allRender();
        _configCanvas.game.pause = true;
        ready.classList.add('ready_active');
        setTimeout(()=>{
            ready.classList.remove('ready_active');
            _configCanvas.game.pause = false;
            _configCanvas.game.restartLevel = false;
            loop();
        }, 1500);
    }

    function init() {
        renderMap();
        beforeStart();
    }

    init();
})()



