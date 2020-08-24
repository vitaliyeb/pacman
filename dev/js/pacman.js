
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
        this.color = '#ffff00';
        this.name = 'pac man';
        this.r = xs < ys ? Math.floor(xs / 2) - 1 : Math.floor(ys / 2) - 1;
        this.createCounterMounth();
        this.keyEventId = window.addEventListener('keydown', ({code})=>{
            switch(code){
                case 'ArrowUp':
                    return this.changeCourse = [0, -1];
                case 'ArrowLeft':
                    return this.changeCourse = [-1, 0];
                case 'ArrowRight':
                    return this.changeCourse = [1, 0];
                case 'ArrowDown':
                    return this.changeCourse = [0, 1];            
            }
        });
    }

    createCounterMounth() {
        let self = this;
        this.counterMounth = setInterval(() => {
            self.openMounth = !self.openMounth;
        }, 200);
    }

    coolision(x, y, xm, ym, xs, ys, yd, xd) {
        let { gameMap, c } = this;

        
    }

    updateCoords(c, tc, shift, v){
        let { nextMapCoord:[ir , ic], direction: [dx , dy], } = this;

        if(this[v] !== tc) return this[v] += shift;

        if(!this.changeCourse) this.nextMapCoord = [ir + dy , ic + dx];
        
        if(this.changeCourse) {
            let { changeCourse:[nx, ny] } = this;
            this.nextMapCoord = [ir + ny , ic + nx];
        }

        this.mapCoord = [ir , ic];
           
                    
        
        
    }

    move() {
        let {x, y, direction: [ dx, dy], speed, xs, ys, mapCoord: [ir, ic], nextMapCoord: [nir, nic]} = this;

        if(ic !== nic) this.updateCoords(x , xs * nic, speed * dx, 'x');
        if(ir !== nir) this.updateCoords(x , ys * nir, speed * dy, 'y');

    }


    renderPacMan() {
        this.move();
        let { c, xs, ys, x, y, color, r, angleOpenMounth, anglePacman, aa, openMounth, clearPacman } = this;
        clearPacman();
        let cx = x + Math.floor(xs / 2), yc = y + Math.floor(ys / 2);
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