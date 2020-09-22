
import Entries from "./entries";


class ShadowGhost extends  Entries {
    constructor( contextGame, xSteep, ySteep, map, x, y, ir, ic ) {
        super();
        this.diffusionPaintInMap = [1, 26];
        this.contextGame = contextGame;
        this.coordinate = [y, x];
        this.mapCoordiante = [ir, ic];
        this.nexMapCoord = [ir + 1, ic];
        this. isLocked = false,
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
        this.nexMapCoord = [ir - 1, ic];
        this.xSteep = xSteep;
        this.ySteep = ySteep;
        this.speed = 1;
        this.map = map;
        this.color = "#ffb9ff";
        this.isLocked = true,
        // this.color = "#5d5db2";
        this.direction = [ -1, 0]; //y, x
        this.type = 'chase'
        this.changeType = false;
        setTimeout(()=>{
            this.exitLocked();
        }, 1500);
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
        this.isLocked = true,
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
        let { nexMapCoord:[shadowRow, shadowCol] } = entities['shadow'];
        let [ pacmanRow, pacmanCol ] = stope ? mapCoord : nextMapCoord;
        let validCoord = [pacmanRow, pacmanCol];

        pacmanRow = pacmanRow + dirY*2 - 1;
        pacmanCol = pacmanCol + dirX*2 - 1;

        let hm = shadowCol > pacmanCol ? [-3, 1] : [3, -1];
        let vm = shadowRow < pacmanRow ? [3, -1] : [-3, 1];

        rowIter: for (let j = vm[0]; j !== 0; j += vm[1] ) {
            for (let i = hm[0]; i !== 0; i += hm[1] ) {
                let row = pacmanRow + j, col = pacmanCol + i;
                if (this.checkElementPermeability(gameMap[pacmanRow + j]?.[pacmanCol + i])) {
                    validCoord = [row, col];
                    break rowIter;
                }
            }
        }
        this.goToThePoint(turn,...validCoord);
    }


}

class KlaydGhost extends  Entries {
    constructor( contextGame, xSteep, ySteep, map, x, y, ir, ic ) {
        super();
        this.diffusionPaintInMap = [29, 1];
        this.contextGame = contextGame;
        this.coordinate = [y, x];
        this.mapCoordiante = [ir, ic];
        this.nexMapCoord = [ir - 1, ic];
        this.xSteep = xSteep;
        this.ySteep = ySteep;
        this.speed = 1;
        this.map = map;
        this.isLocked = true,
        this.color = "#ffb951";
        // this.color = "#5d5db2";
        this.direction = [ -1, 0]; //y, x
        this.type = 'chase'
        this.changeType = false;
    }

    render() {
        this.paintGhost();
        this.move();
        this.touchPacman();
    }

    chase(turn) {
        let { nextMapCoord, mapCoord, stope} = entities['pacman'];
        let { mapCoordiante:[rowGhost, colGhost] } = this;
        let [ pacmanRow, pacmanCol ] = stope ? mapCoord : nextMapCoord;

        if (Math.abs(pacmanRow - rowGhost) < 8 && Math.abs(colGhost - pacmanCol) < 8) return this.diffusion(turn);
        this.goToThePoint(turn, pacmanRow, pacmanCol);
    }
}


export {
    ShadowGhost,
    PinkiGhost,
    InkiGhost,
    KlaydGhost
}