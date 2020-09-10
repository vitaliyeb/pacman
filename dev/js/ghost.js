
import Entries from "./entries";


class ShadowGhost extends  Entries {
    constructor( contextGame, xSteep, ySteep, map, x, y, ir, ic ) {
        super();
        this.diffusionPaintInMap = [1, 26];
        this.contextGame = contextGame;
        this.coordinate = [y, x];
        this.mapCoordiante = [ir, ic];
        this.nexMapCoord = [ir + 1, ic];
        this.xSteep = xSteep;
        this.ySteep = ySteep;
        this.speed = 1;
        this.map = map;
        this.color = "#ff0000";
        // this.color = "#5d5db2";
        this.direction = [ 1, 0]; //y, x
        this.type = 'chase'
        this.changeType = false;
    }

    render() {
        this.paintGhost();
        this.move();
        this.touchPacman();
    }
}

class PinkiGhost extends  Entries {
    constructor( contextGame, xSteep, ySteep, map, x, y, ir, ic ) {
        super();
        this.diffusionPaintInMap = [1, 26];
        this.contextGame = contextGame;
        this.coordinate = [y, x];
        this.mapCoordiante = [ir, ic];
        this.nexMapCoord = [ir + 1, ic];
        this.xSteep = xSteep;
        this.ySteep = ySteep;
        this.speed = 1;
        this.map = map;
        this.color = "#ffb9ff";
        // this.color = "#5d5db2";
        this.direction = [ 1, 0]; //y, x
        this.type = 'chase'
        this.changeType = false;
    }

    render() {

        this.paintGhost();
        this.move();
        this.touchPacman();
    }

    chase(turn) {
        let { nextMapCoord, mapCoord, stope, direction:[ dirX, dirY ], gameMap } = entities['pacman'];
        let [ pacmanRow, pacmanCol ] = stope ? mapCoord : nextMapCoord;
        let validCoord;
        for (let i = 4; i >= 0; i-- ) {
            let row = pacmanRow + i * dirY;
            let col = pacmanCol + i * dirX
            if (this.checkElementPermeability(gameMap[row]?.[col])) {
                validCoord = [row, col];
                break;
            }
        }
        this.goToThePoint(turn,...validCoord);
    }
}

class InkiGhost extends  Entries {
    constructor( contextGame, xSteep, ySteep, map, x, y, ir, ic ) {
        super();
        this.diffusionPaintInMap = [1, 26];
        this.contextGame = contextGame;
        this.coordinate = [y, x];
        this.mapCoordiante = [ir, ic];
        this.nexMapCoord = [ir + 1, ic];
        this.xSteep = xSteep;
        this.ySteep = ySteep;
        this.speed = 1;
        this.map = map;
        this.color = "#00ffff";
        // this.color = "#5d5db2";
        this.direction = [ 1, 0]; //y, x
        this.type = 'chase'
        this.changeType = false;
    }

    render() {
        this.paintGhost();
        this.move();
        this.touchPacman();
    }

    chase(turn) {
        let { nextMapCoord, mapCoord, stope, direction:[ dirX, dirY ], gameMap } = entities['pacman'];
        let [ pacmanRow, pacmanCol ] = stope ? mapCoord : nextMapCoord;
        let validCoord;

        for (let i = 2; i >= 0; i-- ) {
            let row = pacmanRow + i * dirY;
            let col = pacmanCol + i * dirX
            if (this.checkElementPermeability(gameMap[row]?.[col])) {
                validCoord = [row, col];
                break;
            }
        }
        this.goToThePoint(turn,...validCoord);
    }


}


export {
    ShadowGhost,
    PinkiGhost,
    InkiGhost
}