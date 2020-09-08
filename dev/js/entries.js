


export default class Entries {



    ifTurn() {
        let { nexMapCoord:[nextRow, nextColumn], map } = this;

        return [
            [nextRow - 1, nextColumn],
            [nextRow, nextColumn + 1],
            [nextRow + 1, nextColumn],
            [nextRow, nextColumn - 1],
        ].filter((el)=> this.checkElementPermeability(map[el[0]][el[1]]));
    }

    move() {
        let { mapCoordiante:[row, column], nexMapCoord:[nextRow, nextColumn], xSteep, ySteep } = this;
        if ( column != nextColumn ) this.updateCoord( 1, nextColumn, xSteep );
        if ( row != nextRow ) this.updateCoord( 0, nextRow, ySteep );

    }

    updateCoord( posCoord, nextMapCoord, steep ) {
        let { speed, coordinate, direction } = this;
        let currentCoord = coordinate[posCoord];
        let nexCoordInt = nextMapCoord * steep;
        let directionInt = direction[posCoord];

        if (nexCoordInt != currentCoord) return this.coordinate[posCoord] = currentCoord + speed * directionInt;

        this.setNextCoord(posCoord, nextMapCoord);

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
        let { nexMapCoord: [ nextRow, nextCol ], direction: [yDirect, xDirect] } = this;
        this.nexMapCoord = [nextRow + yDirect, nextCol + xDirect];
        this.mapCoordiante = [nextRow, nextCol];
    }


    chase(turn) {
        let { mapCoordiante, nexMapCoord: [ghostRow, ghostColumn], map, direction: [rowDirect, colDirect]  } = this;
        let { nextMapCoord, mapCoord, stope } = entities['pacman'];
        let [ pacmanRow, pacmanCol ] = stope ? mapCoord : nextMapCoord;
        let isBottom = ghostRow < pacmanRow;
        let isLeft = ghostColumn > pacmanCol;

        let vPath;
        let gPath;

        if (pacmanRow === ghostRow){
            gPath = isLeft ? this.gorizontalPath(turn,false, ghostColumn, pacmanCol) : this.gorizontalPath(turn, true, ghostColumn, pacmanCol);
            if (gPath.length) return this.setNewParamsMove(isLeft ? [0, -1] : [0, 1], ...gPath, this.nexMapCoord);
            let variableNextCoord = this.filtrCurrentPlane(turn, 1, ghostColumn);
            let nextPath = variableNextCoord[Math.floor(Math.random()*variableNextCoord.length)];
            this.setNewParamsMove(nextPath[0] > ghostRow ? [1, 0] : [-1, 0], nextPath, this.nexMapCoord)
        }

        if(ghostColumn === pacmanCol){
            vPath = isBottom ? this.verticalPath(turn, true, ghostRow, pacmanRow) : this.verticalPath(turn, false, ghostRow, pacmanRow);
            if (vPath.length) return this.setNewParamsMove(isBottom ? [1, 0] : [-1, 0], ...vPath, this.nexMapCoord);
            let variableNextCoord = this.filtrCurrentPlane(turn, 0, ghostRow);
            let nextPath = variableNextCoord[Math.floor(Math.random()*variableNextCoord.length)];
            this.setNewParamsMove(nextPath[1] > ghostColumn ? [0, 1] : [0, -1], nextPath, this.nexMapCoord)
        }

    }

    setNewParamsMove(direction, nextCoord, currentCoord) {
        this.mapCoordiante = currentCoord;
        this.nexMapCoord = nextCoord;
        this.direction = direction;
    }

    checkElementPermeability(element) {
        return element === '@' || element === '#';
    }

    filtrCurrentPlane(turn, pos, verifiable) {
        return turn.filter(turn => turn[pos] === verifiable)
    }

    verticalPath(turn, isBottom, ghostRow) {
        return isBottom ? turn.filter(([r]) => ghostRow < r) : turn.filter(([r]) => ghostRow > r);
    }

    gorizontalPath(turn, isLeft, ghostColumn) {
        return isLeft ? turn.filter(([, c]) => ghostColumn < c) : turn.filter(([, c]) => ghostColumn > c);
    }


    paintGhost(){
        let { contextGame, coordinate: [y, x], color, xSteep, ySteep } = this;

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