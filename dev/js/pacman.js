
export default class Pacman {
    constructor(c, xs, ys, x, y, ir, ic, gameMap) {
        this.c = c;
        this.xs = xs; 
        this.counterMounth = undefined;
        this.gameMap = gameMap;
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
        this.openMounth = true;
        this.stope = false;
        this.endChangeDirection = undefined;
        this.color = '#ffff00';
        this.name = 'pac man';
        this.r = xs < ys ? Math.floor(xs / 2) - 1 : Math.floor(ys / 2) - 1;
        this.createCounterMounth();
        this.keyEventId = window.addEventListener('keydown', ({code})=>{
            let { direction: [xd , yd], setPropertyOnClick } = this;
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
        let { stope, mapCoord:[mapCoordY, mapCoordX] ,gameMap, c, nextMapCoord: [nextMapY, nextMapX], changeCourse } = this;

        if(this.checkPassage(nextMapY, nextMapX)){
            if(stope) {
                this.createCounterMounth();
                this.stope = false;
            }
            return this[v] += shift;
        }

        if(changeCourse){
            let [changeX, changeY] = changeCourse;
            this.nextMapCoord = [mapCoordY + changeY , mapCoordX + changeX];
            this.direction = changeCourse;
            this.changeCourse = undefined;
        }
        if(!stope) this.stopePacman();
    }

    setPropertyOnClick = (isDirection, x, y) => {
        let { stope, gameMap, nextMapCoord:[ir , ic], direction: [dx , dy], mapCoord: [r, c], endChangeDirection } = this;
        if(isDirection){
            if(endChangeDirection === x || endChangeDirection === y) return;
            if(this.checkPassage(ir + y, ic + x)){
                this.direction = [x , y];
                this.nextMapCoord = [ir + y , ic + x]
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
        if( checkElem === '@' || checkElem === 'P' || checkElem === '#' ) return true;
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

    renderPacMan() {
        this.clearPacman();
        this.move();
        let { c, xs, ys, x, y, color, r, angleOpenMounth, aa, openMounth, direction: [xd, yd]} = this;
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
        c.clearRect(x, y-1, xs, ys);
    }
}