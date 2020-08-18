import CreateMap from './map';



(()=>{
    


    let canvas = document.getElementById('game');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');
    let gameMap = CreateMap();
    let xSteep = _configCanvas.w/gameMap[0].length;
    let ySteep = _configCanvas.h/gameMap.length;
    
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
            context.lineWidth = 2;
            context.moveTo(x, y+cy-divisionSize);
            context.lineTo(x+xSteep, y+cy-divisionSize);
            context.moveTo(x, y+cy+divisionSize);
            context.lineTo(x+xSteep, y+cy+divisionSize);
            context.stroke();
            context.lineWidth = 1;
        }
    }

    function trainingRenderId3 (){
        //угол
        let cx = xSteep/2;
        let cy = ySteep/2;
        let divisionSizeY = cy/4; 
        let divisionSizeX = cx/4;

        return (x, y)=>{
            context.strokeStyle = '#1b1bcd';
            context.lineWidth = 2;
            context.moveTo(x+cx-divisionSizeX, y);
            context.quadraticCurveTo(x+cx-divisionSizeX, y+cy+divisionSizeY, x+xSteep, y+cy+divisionSizeY);
            context.moveTo(x+cx+divisionSizeX, y);
            context.quadraticCurveTo(x+cx+divisionSizeX, y+cy-divisionSizeY, x+xSteep, y+cy-divisionSizeY);
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
            context.lineWidth = 3;
            context.moveTo(x+cx-divisionSize, y);
            context.lineTo(x+cx-divisionSize, y+ySteep);
            context.moveTo(x+cx+divisionSize, y);
            context.lineTo(x+cx+divisionSize, y+ySteep);
            context.stroke();
            context.lineWidth = 1;
        }
    }

    function trainingRenderId5 (){
        //угол
        let cx = xSteep/2;
        let cy = ySteep/2;
        let divisionSizeY = cy/4; 
        let divisionSizeX = cx/4;

        return (x, y)=>{
            context.strokeStyle = '#1b1bcd';
            context.lineWidth = 2;
            context.moveTo(x+cx-divisionSizeX, y);
            context.quadraticCurveTo(x+cx-divisionSizeX, y+cy-divisionSizeY, x, y+cy-divisionSizeY);
            context.moveTo(x+cx+divisionSizeX, y);
            context.quadraticCurveTo(x+cx+divisionSizeX, y+cy+divisionSizeY, x, y+cy+divisionSizeY);
            context.stroke();
            context.lineWidth = 1;
        }
    }
    function trainingRenderId6 (){
        //угол
        let cx = xSteep/2;
        let cy = ySteep/2;
        let divisionSizeY = cy/4; 
        let divisionSizeX = cx/4;

        return (x, y)=>{
            context.strokeStyle = '#1b1bcd';
            context.lineWidth = 2;
            context.moveTo(x+cx-divisionSizeX, y);
            context.quadraticCurveTo(x+cx-divisionSizeX, y+cy-divisionSizeY, x, y+cy-divisionSizeY);
            // context.moveTo(x+cx+divisionSizeX, y);
            // context.quadraticCurveTo(x+cx+divisionSizeX, y+cy+divisionSizeY, x, y+cy+divisionSizeY);
            context.stroke();
            context.lineWidth = 1;
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
            context.lineWidth = 2;

            if(r != 0 && (gameMap[r-1][c] === 2 || gameMap[r-1][c] === 4)) params.push([x+cx, y]);
            if(r+1 != gameMap.length && (gameMap[r+1][c] === 2 || gameMap[r+1][c] === 4)) params.push([x+cx, y+ySteep]);
            if(c != 0 && (gameMap[r][c-1] === 2 || gameMap[r][c-1] === 4)) params.push([x, y+cy]);
            if(c+1 != gameMap[r].length && (gameMap[r][c+1] === 2 || gameMap[r][c+1] === 4)) params.push([x+xSteep, y+cy]);

            let s = params[0], e = params[1];
            let sx = s[0], sy = s[1], ex = e[0], ey = e[1];
            for (let i = 0; i < 2; i++) {
                
                context.moveTo(x+cx-divisionSizeX, y);
                context.quadraticCurveTo(x+cx-divisionSizeX, y+cy-divisionSizeY, x, y+cy-divisionSizeY);
            }


            context.stroke();
            context.lineWidth = 1;
        }
    }


    function renderMap (){
        let renderId1 = trainingRenderId1();
        let renderId2 = trainingRenderId2();
        let renderId3 = trainingRenderId3();
        let renderId4 = trainingRenderId4();
        let renderId5 = trainingRenderId5();
        let renderId6 = trainingRenderId6();
        let renderDubleAngle = trainingDubleAngle();
        
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
                    case 1:
                        return renderId1(x, y);
                    case 2:
                        return renderId2(x, y)
                    case 3:
                        return renderId3(x, y)
                    case 4:
                        return renderId4(x, y)
                    case 5:
                        return renderId5(x, y)
                    case 6:
                        return renderDubleAngle(x, y, ir, ic)    
                }


            })
        })
    }

    renderMap();

    window.onresize = ()=>{
        let w = window.innerWidth;
        let h = window.innerHeight
        _configCanvas.w = w;
        _configCanvas.h = h;
        canvas.width = w;
        canvas.height = h;
        renderMap();
    }

})()