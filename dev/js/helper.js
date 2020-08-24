export default class Helper {
    constructor(size, gm) {
        this.size = size;
        this.gm = gm;
    }
    
    setSize(...canvas) {
        let {gm , size} = this;
        let ws = Math.floor(size / gm[0].length);
        let hs = Math.floor(size / gm.length);
        canvas.map(el => {
            el.width = ws * gm[0].length;
            el.height = hs * gm.length;
        });
        return [ws, hs];
    }
}