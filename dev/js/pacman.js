
export default class Pacman{
    constructor(c, xs, ys){
        this.c = c;
        this.xs = xs; 
        this.counterMounth = undefined;
        this.ys = ys;
        this.x = 0;
        this.y = 0;
        this.angleOpenMounth = (Math.PI / 50 * (xs / 4 * 3))/2;
        this.aa = Math.PI / 2;
        this.direction = [1, 0]; // x y
        this.anglePacman = 0;
        this.openMounth = true;
        this.color = '#ffff00';
        this.name = 'pac man';
        this.r = xs/2;
    }

    createCounterMounth(){
        let {counterMounth} = this;
        counterMounth = setInterval(()=>{
            this.openMounth = !this.openMounth

        }, 500);
    }

    renderPacMan(){
        // clearPacman.call(this);
        let { c, xs, ys, x, y, color, r, angleOpenMounth, anglePacman, aa, openMounth, clearPacman} = this;
        let cx = x + xs / 2, yc = y + ys/2;
        c.fillStyle = color;
        c.beginPath();
        c.moveTo(cx, yc);
        openMounth ? c.arc(cx, yc, r, angleOpenMounth + (aa*anglePacman), -angleOpenMounth+(aa*anglePacman)) : c.arc(cx, yc, r, 0, Math.PI*2 );
        c.fill();

    }

    clearPacman () {
        let {c, x, y, xs, ys} = this;
        c.clearRect(x, y, xs, ys);
    }
}