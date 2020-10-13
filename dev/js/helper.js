export default class Helper {
    constructor(gm) {
        this.heightCut = window.innerHeight / 100 * 20;
        this.size = Math.min(window.innerWidth, window.innerHeight - this.heightCut) - 15;
        this.gm = gm;
    }
    
    setSize(...canvas) {
        let {gm , size} = this;
        let interfaceEL = document.getElementById('interface').style;
        let ws = Math.floor(size / gm[0].length);
        let hs = Math.floor(size / gm.length);
        let fullWs = ws * gm[0].length;
        let fullHs = hs * gm.length;

        let interfaceHeight = fullHs + this.heightCut;
        interfaceEL.width = fullWs + 'px';
        interfaceEL.height = interfaceHeight + 'px';
        document.querySelector('.panel_middle').style.height = `${fullHs}px`;
        interfaceEL.setProperty('--height-edge', `${(interfaceHeight - fullHs) / 2}px`);

        canvas.map(el => {
            el.width = fullWs;
            el.height = fullHs;
        });
        return [ws, hs];
    }
}

