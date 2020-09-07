
import Entries from "./entries";


class ShadowGhost extends  Entries {
    constructor( contextGame, xSteep, ySteep, map, x, y, ir, ic) {
        super();
        this.contextGame = contextGame;
        this.coordinate = [x, y];
        this.mapCoordiante = [ic, ir];
        this.nexMapCoord = [ ic, ir + 1];
        this.xSteep = xSteep;
        this.ySteep = ySteep;
        this.speed = 1;
        this.map = map;
        this.color = "#ff0000";
        this.direction = [ 0, 1 ]; //X Y
        this.type = 'chase'
    }


    render() {

        super.paintGhost();

        super.move();

    }



}



export {
    ShadowGhost
}