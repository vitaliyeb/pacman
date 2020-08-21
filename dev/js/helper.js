export default class Helper {
    constructor(size) {
        this.size = size;
    }
    
    setSize(...canvas) {
        canvas.map(el => {
            el.width = this.size;
            el.height = this.size;
        });
    }
}