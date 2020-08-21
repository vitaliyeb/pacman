import CreateMap from './map';
import RenderMapElements from './mapElement';
import Helper from './helper';

(() => {
    let canvasMap = document.getElementById('map');
    let entities = {
        pacman: {}
    };
    let canvasGame = document.getElementById('game');
    let size = window.innerWidth >  window.innerHeight ? window.innerHeight - 15 : window.innerWidth - 15;
    let mapContext = canvasMap.getContext('2d');
    let gameContext = canvasGame.getContext('2d');
    let helper = new Helper(size);
    helper.setSize(canvasMap, canvasGame);
    let gameMap = CreateMap();
    let xSteep = size / gameMap[0].length;
    let ySteep = size / gameMap.length;
    let renderMapElements = new RenderMapElements(xSteep, ySteep, mapContext, gameMap, gameContext, entities);

    function renderMap() {
        gameMap.map((row, ir) => {
            row.map((col, ic) => {
                mapContext.beginPath();
                renderMapElements[col](xSteep * ic, ySteep * ir, ir, ic) 
                mapContext.stroke();
            });
        });
    }
    
    function loop() {
        let { pacman } = entities;
        pacman.renderPacMan();
        requestAnimationFrame(loop);
    }

    function init() {
        renderMap();
        loop();
    }

    init();
})()