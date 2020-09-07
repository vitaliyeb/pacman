


export default class Entries {



    ifTurn() {
        let { nexMapCoord:[nextColumn, nextRow], map, direction: [xDirect, yDirect] } = this;

        return [
            [nextRow - 1, nextColumn],
            [nextRow, nextColumn + 1],
            [nextRow + 1, nextColumn],
            [nextRow, nextColumn - 1],
        ].filter((el)=>{
            let mapElem = map[el[0]][el[1]];
            return mapElem === '@' || mapElem === '#';
        });
    }

    move() {
        let { mapCoordiante:[column, row], nexMapCoord:[nextColumn, nextRow], xSteep, ySteep } = this;
        if ( column != nextColumn ) this.updateCoord( 0, nextColumn, xSteep );
        if ( row != nextRow ) this.updateCoord( 1, nextRow, ySteep );

    }

    updateCoord( posCoord, nextMapCoord, steep ) {
        let { speed, coordinate, direction } = this;
        let currentCoord = coordinate[posCoord];
        let nexCoordInt = nextMapCoord * steep;
        let directionInt = direction[posCoord];

        if (nexCoordInt != currentCoord) return this.coordinate[posCoord] = currentCoord + speed * directionInt;

        this.setNextCoord(1 - posCoord, nextMapCoord);

    }

    setNextCoord(posCoord, nextMapCoordInt) {
        let turn = this.ifTurn();
        let turnOtside = turn.filter(el=> el[posCoord] === nextMapCoordInt);
        if (!turnOtside.length) return this.proceedMotion();

        switch (this.type){
            case 'chase':
                return this.chase(turn);
        }
    }

    proceedMotion() {
        let { mapCoordiante:[column, row], nexMapCoord: [ nextCol, nextRow ], direction: [xDirect, yDirect] } = this;
        this.nexMapCoord = [nextCol + xDirect, nextRow + yDirect];
        this.mapCoordiante = [nextCol, nextRow];
    }


    chase(turn) {
        let { nextMapCoord, mapCoord, stope } = entities['pacman'];
        let pacmanCord = stope ? mapCoord : nextMapCoord;

        console.log(turn)


    }




    paintGhost(){
        let { contextGame, coordinate: [x, y], color, xSteep, ySteep } = this;

        contextGame.beginPath();
        contextGame.fillStyle = color;

        let fx = xSteep / 8,
            yf = ySteep / 5;
        contextGame.moveTo(x + 2, y + ySteep / 3);
        contextGame.quadraticCurveTo( x + xSteep / 2, y, x + xSteep - 2, y + ySteep / 3);
        contextGame.lineTo( x + xSteep, y + ySteep)
        let isBottom = false;
        for (let i = 1; i <= 8; i++){
            contextGame.lineTo(x + (xSteep - fx *  i), y + ySteep - ( isBottom ? 0 : yf))
            isBottom = !isBottom;
        }
        contextGame.fill();

        let eyeW = xSteep / 5;

        [1, -1].map(i => {
            contextGame.save();
            contextGame.fillStyle = '#fff';
            contextGame.beginPath()
            contextGame.translate(x + xSteep / 2 + (i * eyeW), y + ySteep / 2);
            contextGame.scale( 1, 1.3 );
            contextGame.arc( 0, 0, ySteep / 8, 0, Math.PI * 2 );
            contextGame.fill();
            contextGame.beginPath()
            contextGame.fillStyle = '#000';
            contextGame.arc( 0, 0, ySteep / 8 / 2, 0, Math.PI * 2 );
            contextGame.fill();
            contextGame.restore();

        });
    }

}