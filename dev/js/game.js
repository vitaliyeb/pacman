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
    }

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

                // console.log(ir, ic);
                
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
        let level = _configCanvas.game.level;
        let cto = _configCanvas.timeTable[level === 1 ? 0 : level >= 5 ? 2 : 1][_configCanvas.game.countPeriod++];
        for (let item of Object.values(entities)) {
            let it = item.type;
            if(it === 'pac man' || it === 'goOutside' || it === 'fright' || it === 'goToHome') continue;
            item.type = cto.type;
        }
        _configCanvas.game.currentGlobalType = cto.type;
        if(!cto.time) return;
        setTimeout(setTypeAllGhost, cto.time);
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
        }, 1000);
    }

    function init() {
        renderMap();
        beforeStart();
    }

    init();
})()



