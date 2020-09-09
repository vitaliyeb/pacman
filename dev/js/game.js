import CreateMap from './map';
import RenderMapElements from './mapElement';
import Helper from './helper';
import { ShadowGhost } from './ghost';

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

                
                mapContext.beginPath();
                renderMapElements[col](xs * ic, ys * ir, ir, ic) 
                mapContext.stroke();
            });
        });
    }

    function initGhost() {
        let { ghostPosition: { shadow:[ ir, ic] }  } = _configCanvas;
        entities['shadow'] = new ShadowGhost(gameContext, xs, ys, gameMap, xs*ic, ys*ir, ir, ic);
    }
    
    function loop() {
        let { pacman, shadow } = entities;
        pacman.renderPacMan();
        shadow.render();

        requestAnimationFrame(loop);
    }

    function init() {
        renderMap();
        initGhost();
        loop();
    }

    init();
})()



