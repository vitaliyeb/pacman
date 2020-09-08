
import Entries from "./entries";


class ShadowGhost extends  Entries {
    constructor( contextGame, xSteep, ySteep, map, x, y, ir, ic ) {
        super();
        this.contextGame = contextGame;
        this.coordinate = [y, x];
        this.mapCoordiante = [ir, ic];
        this.nexMapCoord = [ir + 1, ic];
        this.xSteep = xSteep;
        this.ySteep = ySteep;
        this.speed = 1;
        this.map = map;
        this.color = "#ff0000";
        this.direction = [ 1, 0]; //y, x
        this.type = 'chase'
        this.changeType = false;
    }


    render() {

        super.paintGhost();

        super.move();

    }



}



export {
    ShadowGhost
}