import CreateMap from './map';
import RenderMapElements from './mapElement';



(()=>{
    

    let canvas = document.getElementById('game');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');
    let gameMap = CreateMap();
    let xSteep = _configCanvas.w/gameMap[0].length;
    let ySteep = _configCanvas.h/gameMap.length;
    let renderMapElements = new RenderMapElements(xSteep, ySteep, context, gameMap);
  
    

    function renderMap (){
        gameMap.map((elRow, ir)=>{
            elRow.map((elCol, ic)=>{
                context.beginPath();
                renderMapElements[elCol](xSteep*ic, ySteep*ir, ir, ic) 
                context.stroke();
            })
        })
    }

    renderMap();


})()