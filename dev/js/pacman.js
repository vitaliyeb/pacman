
export default class Pacman {
    constructor(c, xs, ys, x, y, ir, ic, gameMap, contextMap, entries) {
        this.c = c;
        this.xs = xs;
        this.entries = entries;
        this.counterMounth = undefined;
        this.gameMap = gameMap;
        this.contextMap = contextMap;
        this.maxX = (gameMap[0].length-1) * xs;
        this.ys = ys;
        this.x = x;
        this.y = y;
        this.nextMapCoord = [ir , ic + 1]
        this.mapCoord = [ir, ic];
        this.speed = 1;
        this.angleOpenMounth = (Math.PI / 50 * (xs / 4 * 3)) / 2;
        this.changeCourse = undefined;
        this.aa = Math.PI / 2;
        this.direction = [1, 0]; // x y
        this.anglePacman = 0;
        this.throughData = undefined;
        this.openMounth = true;
        this.stope = false;
        this.endChangeDirection = undefined;
        this.color = '#ffff00';
        this.isThrough = false;
        this.name = 'pac man';
        this.r = xs < ys ? Math.floor(xs / 2) : Math.floor(ys / 2);
        this.createCounterMounth();
        this.keyEventId = window.addEventListener('keydown', ({code})=>{
            let { direction: [xd , yd], setPropertyOnClick, isThrough } = this;
            if ( isThrough ) return;
            switch(code){
                case 'ArrowUp':
                    return yd !=0 ? setPropertyOnClick(1, 0, -1) : setPropertyOnClick(0, 0, -1);                  
                case 'ArrowLeft':
                    return xd !=0 ? setPropertyOnClick(1, -1, 0) : setPropertyOnClick(0, -1, 0);
                case 'ArrowRight':
                    return xd !=0 ? setPropertyOnClick(1, 1, 0) : setPropertyOnClick(0, 1, 0);
                case 'ArrowDown':
                    return yd !=0 ? setPropertyOnClick(1, 0, 1) : setPropertyOnClick(0, 0, 1);         
            }
        });
    }

    createCounterMounth() {
        let self = this;
        this.counterMounth = setInterval(() => {
            self.openMounth = !self.openMounth;
        }, 200);
    }

    coolision(v, shift) {
        let { stope, mapCoord:[mapCoordY, mapCoordX] ,gameMap, c, nextMapCoord: [nextMapY, nextMapX], changeCourse, isThrough } = this;

        if ( isThrough ) this.through();
        if(this.checkPassage(nextMapY, nextMapX)){
            if(stope) {
                this.createCounterMounth();
                this.stope = false;
            }
            return this[v] += shift;
        }
        if (gameMap[mapCoordY][mapCoordX] === 'X' && !isThrough) return this.through();

        if(changeCourse){
            let [changeX, changeY] = changeCourse;
            this.nextMapCoord = [mapCoordY + changeY , mapCoordX + changeX];
            this.direction = changeCourse;
            this.changeCourse = undefined;
        }
        if(!stope && !isThrough) this.stopePacman();
    }


    through(){
        let { isThrough, direction: [directionX], mapCoord:[row], ys, xs, speed } = this;
        if (!isThrough) this.createTroughConfig(xs, directionX > 0);
        let { throughData: { startPositionPaint , endTrough } } = this;

        this.throughData.startPositionPaint += directionX * speed;
        this.x += directionX * speed;

        if (startPositionPaint === endTrough) return this.endTrough(endTrough, xs);

        this.paintPac( startPositionPaint , row * ys);
    }

    createTroughConfig (xSteep, isLeft) {
        let { maxX } = this;
        this.throughData = {
            startPositionPaint: isLeft ? -xSteep : maxX + xSteep,
            endTrough: isLeft ? 0 : maxX
        }
        this.isThrough = true;
    }

    endTrough(endTrough) {
        let { mapCoord: [row, col], gameMap } = this;
        this.x = endTrough;
        this.mapCoord = [ row, endTrough === 0 ? 0 : gameMap[0].length-1]
        this.nextMapCoord = [ row, endTrough === 0 ? 1 : gameMap[0].length-2]
        return this.isThrough = false;
    }

    setPropertyOnClick = (isDirection, x, y) => {
        let { stope, gameMap, nextMapCoord:[ir , ic], direction: [dx , dy], mapCoord: [r, c], endChangeDirection } = this;
        if(isDirection){
            if(endChangeDirection === x || endChangeDirection === y) return;
            if(this.checkPassage(ir + y, ic + x)){
                this.direction = [x , y];
                this.nextMapCoord = [ir + y , ic + x];
                this.mapCoord = [ir , ic];
                this.endChangeDirection = x === 0 ? y : x;
            }
        } else {
            let coords = stope ? [r + y, c + x] : [ir + y, ic + x];
            if(this.checkPassage(...coords)){
                return this.changeCourse = [x , y]
            };
        }
    }

    checkPassage(row, collumn) {
        let { gameMap } = this;
        let checkElem = gameMap[row][collumn];
        if( checkElem === '@' || checkElem === 'P' || checkElem === '#' || checkElem === 'E' || checkElem === 'X' ) return true;
        return false;
    }

    updateCoords(c, tc, shift, v){
        let { nextMapCoord:[ir , ic], direction: [dx , dy], } = this;
        if(this[v] !== tc) return this.coolision(v, shift);
        if(!this.changeCourse) this.nextMapCoord = [ir + dy , ic + dx];
        
        if(this.changeCourse) {
            let { changeCourse:[nx, ny] } = this;
            this.nextMapCoord = [ir + ny , ic + nx];
            this.direction = this.changeCourse;
            this.changeCourse = undefined;
        }

        this.mapCoord = [ir , ic];
        this.endChangeDirection = undefined;
    }

    move() {
        let {x, y, direction: [ dx, dy], speed, xs, ys, mapCoord: [ir, ic], nextMapCoord: [nir, nic]} = this;

        if(ic !== nic) return this.updateCoords(x , xs * nic, speed * dx, 'x');
        if(ir !== nir) return this.updateCoords(y , ys * nir, speed * dy, 'y');
    }

    stopePacman() {
        this.stope = true;
        clearInterval(this.counterMounth);
        this.openMounth = false;
    }

    ifEatElem() {
        let { gameMap, mapCoord:[ row, col],  } = this;
        let el = gameMap[row][col];
        if (el === 'E') return this.eatEnergyzer(row, col);
        if(el === '@') return this.eatFood(row, col);
    }

    paintRect(row, col){
        let { gameMap, contextMap: cm, xs, ys } = this;
        gameMap[row][col] = '#';
        cm.beginPath();
        cm.fillStyle = '#000';
        cm.fillRect(xs * col, ys * row, xs, ys);
        cm.closePath();
    }

    eatEnergyzer(row, col) {
        this.paintRect(row, col);
        for (let entrie of Object.values(this.entries)) {
            if(entrie.name == 'pac man' && entrie.isLocked) continue;
            entrie.type = 'fright';
        }
    }

    eatFood(row, col) {
        this.paintRect(row, col);
        _configCanvas.game.eaten++;
        _configCanvas.game.score+=10;
    }

    renderPacMan() {
        this.clearPacman();
        this.move();
        this.paintPac(this.x, this.y);
        this.ifEatElem();
    }

    paintPac(x, y) {
        let { c, xs, ys, color, r, angleOpenMounth, aa, openMounth, direction: [xd, yd]} = this;
        let cx = x + Math.floor(xs / 2), yc = y + Math.floor(ys / 2);
        let anglePacman = xd === 0 ? yd < 0 ? 3 : 1 : xd < 0 ? 2 : 0;
        c.fillStyle = color;
        c.beginPath();
        c.moveTo(cx, yc);
        openMounth ? c.arc(cx, yc, r, angleOpenMounth + (aa * anglePacman), -angleOpenMounth + (aa * anglePacman)) : c.arc(cx, yc, r, 0, Math.PI * 2);
        c.fill();
    }

    clearPacman = () => {
        let { c, x, y, xs, ys, r} = this;
        c.clearRect(0, 0, 1000, 1000);
    }
}