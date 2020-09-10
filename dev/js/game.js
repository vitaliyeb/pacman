import CreateMap from './map';
import RenderMapElements from './mapElement';
import Helper from './helper';
import { ShadowGhost, PinkiGhost, InkiGhost, KlaydGhost } from './ghost';

(() => {
    let canvasMap = document.getElementById('map');
    window.entities = {
        pacman: {}
    };
    let canvasGame = document.getElementById('game');
    let size = window.innerWidth >  window.innerHeight ? window.innerHeight - 15 : window.innerWidth - 15;
    let mapContext = canvasMap.getContext('2d');
    let gameContext = canvasGame.getContext('2d');
    let gameMap = CreateMap();
    let helper = new Helper(size, gameMap);
    let [xs, ys] =  helper.setSize(canvasMap, canvasGame);
    let renderMapElements = new RenderMapElements(xs, ys, mapContext, gameMap, gameContext, entities);


    function renderMap() {
        gameMap.map((row, ir) => {
            row.map((col, ic) => {
                // mapContext.beginPath();
                // mapContext.lineWidth = 1;
                // mapContext.rect(xs * ic, ys * ir, xs, ys);
                // mapContext.stroke();

                // console.log(ir, ic)

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
            inki: [irInki, icInki]
        }  } = _configCanvas;

        entities['shadow'] = new ShadowGhost(gameContext, xs, ys, gameMap, xs*icShadow, ys*irShadow, irShadow, icShadow);
        entities['pinki'] = new PinkiGhost(gameContext, xs, ys, gameMap, xs*icPinki, ys*irPinki, irPinki, icPinki);
        entities['inki'] = new InkiGhost(gameContext, xs, ys, gameMap, xs*icInki, ys*irInki, irInki, icInki);
        entities['klayd'] = new KlaydGhost(gameContext, xs, ys, gameMap, xs*icInki, ys*irInki, irInki, icInki);
    }
    
    function loop() {
        let { pacman, shadow, pinki, inki, klayd } = entities;
        if (!_configCanvas.game.play) return;
        pacman.renderPacMan();
        // shadow.render();
        // pinki.render();
        // inki.render();
        klayd.render();

        requestAnimationFrame(loop);
    }

    function init() {
        renderMap();
        initGhost();
        loop();
    }

    init();
})()



