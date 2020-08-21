
export default class Pacman {
    constructor(c, xs, ys, x, y, ir, ic, gameMap) {
        this.c = c;
        this.xs = xs; 
        this.counterMounth = undefined;
        this.gameMap = gameMap;
        this.ys = ys;
        this.x = x;
        this.y = y;
        this.mapCoord = [ir, ic];
        this.speed = 1;
        this.angleOpenMounth = (Math.PI / 50 * (xs / 4 * 3)) / 2;
        this.aa = Math.PI / 2;
        this.direction = [0, 0]; // x y
        this.anglePacman = 0;
        this.openMounth = true;
        this.color = '#ffff00';
        this.name = 'pac man';
        this.r = xs < ys ? Math.floor(xs / 2) - 1 : Math.floor(ys / 2) - 1;
        this.createCounterMounth();
    }

    createCounterMounth() {
        let self = this;
        this.counterMounth = setInterval(() => {
            self.openMounth = !self.openMounth;
        }, 200);
    }

    coolision(x, y, xm, ym, xs, ys, yd, xd) {
        let { gameMap } = this;
        let ccol = x / xs;
        let crow = y / ys;
        // let nextEl = gameMap[crow + yd][ccol + xd];
        console.log(ccol, crow);

        // console.log(nextEl);
        // if(nextEl === '@' || nextEl === '#') return true;
        
        
   
        
    }

    move() {
        let {x, y, direction: [ dx, dy], speed, xs, ys} = this;
        let xm = x + (speed * dx), 
            ym = y + (speed * dy);
        let move = this.coolision(x, y, xm, ym, xs, ys, dy, dx );

        if(move){
            this.x = xm;
            this.y = ym;
        }
       

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