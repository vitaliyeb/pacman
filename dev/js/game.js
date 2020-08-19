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
    let renderMapElements = new RenderMapElements(xSteep, ySteep);
    
    console.log(renderMapElements);
    
    function trainingRenderId1 (){
        //розовая еда пакамена
        let w = xSteep/5;
        let h = ySteep/5;
        let cx = xSteep/2 - w/2;
        let cy = ySteep/2 - h/2;

        return (x, y)=>{
            context.fillStyle  = '#ffb8ae';
            context.fillRect(x+cx, y+cy, w, h)
        }
    }

    function trainingRenderId2 (){
        //горизонтальная линия вокруг карты
        let cy = ySteep/2;
        let divisionSize = cy/4;

        return (x, y)=>{
            context.strokeStyle = '#1b1bcd';
            context.lineWidth = 4;
            context.moveTo(x, y+cy-divisionSize);
            context.lineTo(x+xSteep, y+cy-divisionSize);
            context.moveTo(x, y+cy+divisionSize);
            context.lineTo(x+xSteep, y+cy+divisionSize);
            context.stroke();
        }
    }

    function trainingRenderSoloLine (){
        // одинарная линия
        let cy = ySteep/2;
        let cx = xSteep/2;

        return (x, y, isHorizontal)=>{
            context.strokeStyle = '#1b1bcd';
            
            if(isHorizontal){
                context.lineWidth = 4;
                context.moveTo(x,  y + cy);
                context.lineTo(x + xSteep, y + cy);
            }else {
                context.lineWidth = 5;
                context.moveTo(x + cx,  y);
                context.lineTo(x + cx, y + ySteep); 
            }
            
            context.stroke();
            context.lineWidth = 1;
        }
    }

    
    function trainingRenderSoloAngle (){
        // одинарный угол
        let cy = ySteep/2;
        let cx = xSteep/2;
        let dy = cy/4; 
        let dx = cx/4;
        function dbHelper(x, y, xq, yq, x1,y1,x2,y2,y3){
            context.moveTo(x, y);
            context.quadraticCurveTo(xq, yq, x1,y1);
            context.stroke();
            context.beginPath();
            context.lineWidth = 5;
            context.moveTo(x2,y2);
            context.lineTo(x2,y3);
            context.stroke();

        }
        return (x, y, modify)=>{
            let params = [];
            context.strokeStyle = '#1b1bcd';
            context.lineWidth = 4;
            switch(modify){
                case 'str':
                    params.push([x+cx, y], [x+cx, y+cy ,x+xSteep, y+cy])
                break;
                case 'sbr':
                    params.push([x+cx, y+ySteep], [x+cx, y+cy ,x+xSteep, y+cy])
                break;
                case 'slb':
                    params.push([x, y+cy], [x+cx, y+cy ,x+cx, y+ySteep])
                break;
                case 'slt':
                    params.push([x, y+cy], [x+cx, y+cy ,x+cx, y])
                break;
                case 'drb':
                    return dbHelper(x+cx+dx, y+ySteep, x+cx+dy, y+cy-dy, x+xSteep, y+cy, x+cx-dx, y, y+ySteep);
                    break;
                case 'drt':
                    return dbHelper(x+cx+dx, y, x+cx+dx, y+cy+dy, x+xSteep, y+cy, x+cx-dx, y, y+ySteep);
                    break;   
                case 'dtl':
                    return dbHelper(x+cx-dx, y, x+cx-dy, y+cy, x, y+cy, x+cx+dx, y, y+ySteep);
                    break;
                case 'dbl':
                    return dbHelper(x+cx-dx, y+ySteep, x+cx-dx, y+cy-dy, x, y+cy, x+cx+dx, y, y+ySteep);
                    break;     
            }
            
            context.moveTo(...params[0]);
            context.quadraticCurveTo(...params[1]);
            context.stroke();
            context.lineWidth = 1;
        }
    }

    function trainingRenderId4 (){
        //Вертикальная линия вокруг карты
        let cx = xSteep/2;
        let divisionSize = cx/4;

        return (x, y)=>{
            context.strokeStyle = '#1b1bcd';
            context.lineWidth = 5;
            context.moveTo(x+cx-divisionSize, y);
            context.lineTo(x+cx-divisionSize, y+ySteep);
            context.moveTo(x+cx+divisionSize, y);
            context.lineTo(x+cx+divisionSize, y+ySteep);
            context.stroke();
        }
    }

    function trainingDubleAngle (){
        //угол
        let cx = xSteep/2;
        let cy = ySteep/2;
        let dy = cy/4; 
        let dx = cx/4;
        return (x, y, r, c) => {
            let params = [];

            context.strokeStyle = '#1b1bcd';
            context.lineWidth = 4;

            if(r+1 != gameMap.length && (gameMap[r+1][c] === 2 || gameMap[r+1][c] === 4)) params.push([x+cx, y+ySteep]);
            if(r != 0 && (gameMap[r-1][c] === 2 || gameMap[r-1][c] === 4)) params.push([x+cx, y]);
            if(c+1 != gameMap[r].length && (gameMap[r][c+1] === 2 || gameMap[r][c+1] === 4)) params.push([x+xSteep, y+cy]);
            if(c != 0 && (gameMap[r][c-1] === 2 || gameMap[r][c-1] === 4)) params.push([x, y+cy]);

            let [s, e] = params;
            let sx = s[0], sy = s[1], ex = e[0], ey = e[1];
            let my = sx < ex ? ey > sy ? -1 : 1 : ey > sy ? 1 : -1;
            let mqx = sx < ex ? -1 : 1;
            [-1, 1].map((k)=>{
                context.moveTo(sx + (dx*k), sy);
                context.quadraticCurveTo(ex + (cx * mqx) + (dx * k), ey + (dy * k * my), ex, ey + (dy * k * my));
            });
            context.stroke()
        }
    }

    function trainingRenderDubleAcuteAngle(){
                //угол острый
                let cx = xSteep/2;
                let cy = ySteep/2;
                let dy = cy/4; 
                let dx = cx/4;
                return (x, y, r, c) => {
                    let params = [];
        
                    context.strokeStyle = '#1b1bcd';
                    context.lineWidth = 4;
        
                    if(r+1 != gameMap.length && (gameMap[r+1][c] === 2 || gameMap[r+1][c] === 4)) params.push([x+cx, y+ySteep]);
                    if(r != 0 && (gameMap[r-1][c] === 2 || gameMap[r-1][c] === 4)) params.push([x+cx, y]);
                    if(c+1 != gameMap[r].length && (gameMap[r][c+1] === 2 || gameMap[r][c+1] === 4)) params.push([x+xSteep, y+cy]);
                    if(c != 0 && (gameMap[r][c-1] === 2 || gameMap[r][c-1] === 4)) params.push([x, y+cy]);
        
                    let [s, e] = params;
                    let sx = s[0], sy = s[1], ex = e[0], ey = e[1];
                    let my = sx < ex ? ey > sy ? -1 : 1 : ey > sy ? 1 : -1;
                    let mqx = sx < ex ? -1 : 1;
                    [-1, 1].map((k)=>{
                        context.moveTo(sx + (dx*k), sy);
                        context.lineTo(ex + (cx * mqx) + (dx * k), ey + (dy * k * my),);
                        context.lineTo(ex, ey + (dy * k * my));
                    });
                    context.stroke()
                }
    }

    function trainingRenderId16 (){
        //горизонтальная линия у дома монстров
        let cy = ySteep/2;

        return (x, y)=>{
            context.strokeStyle = '#ffb8ff';
            context.lineWidth = 4;
            context.moveTo(x, y+cy);
            context.lineTo(x+xSteep, y+cy);

            context.stroke();
        }
    }

    function renderMap (){
        let renderId1 = trainingRenderId1();
        let renderId2 = trainingRenderId2();
        let renderId4 = trainingRenderId4();
        let renderDubleAngle = trainingDubleAngle();
        let renderSoloLine = trainingRenderSoloLine();
        let renderSoloAngle = trainingRenderSoloAngle();
        let renderDubleAcuteAngle = trainingRenderDubleAcuteAngle();
        let renderId16 = trainingRenderId16();

        
        gameMap.map((elRow, ir)=>{
            elRow.map((elCol, ic)=>{
                let x = xSteep*ic;
                let y = ySteep*ir;
                // if(elCol !== 1){
                //     context.beginPath();
                //     context.strokeStyle = '#fff';
                //     context.strokeRect(xSteep*ic, ySteep*ir,xSteep, ySteep);
                // }

                context.beginPath();
                switch(elCol){
                    case 0: 
                        break;
                    case 1:
                        return renderId1(x, y);
                    case 2:
                        return renderId2(x, y)
                    case 3:
                        return renderDubleAngle(x, y, ir, ic) 
                    case 4:
                        return renderId4(x, y) 
                    case 5:
                        return renderSoloLine(x, y, true) 
                    case 6:
                        return renderSoloLine(x, y, false)  
                    case 7:
                        return renderSoloAngle(x, y, 'str' );  
                    case 8:
                        return renderSoloAngle(x, y, 'sbr' ); 
                    case 9:
                        return renderSoloAngle(x, y, 'slt' );  
                    case 10:
                        return renderSoloAngle(x, y, 'slb' );   
                    case 11:
                        return renderSoloAngle(x, y, 'drb' ); 
                    case 12:
                        return renderSoloAngle(x, y, 'drt' );    
                    case 13:
                        return renderSoloAngle(x, y, 'dtl' ); 
                    case 14:
                        return renderSoloAngle(x, y, 'dbl' ); 
                    case 15:
                        return renderDubleAcuteAngle(x, y, ir, ic) 
                    case 15:
                        return renderDubleAcuteAngle(x, y, ir, ic) 
                    case 16:
                        return renderId16(x, y)                                          
                }


            })
        })
    }

    renderMap();


})()