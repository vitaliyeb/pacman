
import Entries from "./entries";


class ShadowGhost extends  Entries {
    constructor( contextGame, xSteep, ySteep, map, x, y, ir, ic) {
        super();
        this.contextGame = contextGame;
        this.coordinate = [x, y];
        this.mapCoordiante = [ic, ir];
        this.xSteep = xSteep;
        this.ySteep = ySteep;
        this.map = map;
        this.color = "#ff0000";
        this.type = 'chase'

    }


    render() {

        super.paintGhost();
    }



}



export {
    ShadowGhost
}