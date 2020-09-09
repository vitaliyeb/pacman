


export default class Entries {



    ifTurn() {
        let { nexMapCoord:[nextRow, nextColumn], map } = this;

        return [
            {nc: [nextRow - 1, nextColumn], d:[-1, 0] },
            {nc: [nextRow, nextColumn + 1], d:[0, 1] },
            {nc: [nextRow + 1, nextColumn], d:[1, 0] },
            {nc: [nextRow, nextColumn - 1], d:[0, -1] },
        ].filter((el)=> this.checkElementPermeability(map[el.nc[0]][el.nc[1]]));
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

        let turnOtside = turn.filter(el=> el.nc[posCoord] === nextMapCoordInt);
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
        let { nexMapCoord: [ghostRow, ghostColumn], changeType, mapCoordiante: [row, col] } = this;
        let { nextMapCoord, mapCoord, stope } = entities['pacman'];
        let [ pacmanRow, pacmanCol ] = stope ? mapCoord : nextMapCoord;
        let isBottom = ghostRow < pacmanRow;
        let isLeft = ghostColumn > pacmanCol;

        let vPath;
        let gPath;

        if (!changeType) turn = turn.filter((el)=> el.nc[0] !== row || el.nc[1] !== col);

        if (pacmanRow === ghostRow){

            gPath = this.gorizontalPath(turn,isLeft, ghostColumn, pacmanCol);

            if (gPath.length) return this.setNewParamsMove(gPath[0].d, gPath[0].nc, this.nexMapCoord);
            return this.hitTheWall(turn, 1, ghostColumn);
        }

        if(ghostColumn === pacmanCol){
            vPath = this.verticalPath(turn, isBottom, ghostRow, pacmanRow);
            if (vPath.length) return this.setNewParamsMove(vPath[0].d, vPath[0].nc, this.nexMapCoord);
            return this.hitTheWall(turn, 0, ghostRow);
        }

        gPath = this.gorizontalPath(turn, isLeft, ghostColumn, pacmanCol);

        vPath = this.verticalPath(turn, isBottom, ghostRow, pacmanRow);
        let paths = [...gPath, ...vPath];

        if (paths.length){
            let path = paths[Math.floor(Math.random()*paths.length)];
            return this.setNewParamsMove(path.d, path.nc, this.nexMapCoord);
        }

        // if (changeType){
        //
        //

        let transition = turn.filter((el)=> el.nc[0] !== row || el.nc[1] !== col);
        return this.setNewParamsMove(transition[0].d, transition[0].nc, this.nexMapCoord);
    }

    hitTheWall(turn, pos, gsc) {
        let variableNextCoord = this.filtrCurrentPlane(turn, pos, gsc);
        let nextPath = variableNextCoord[Math.floor(Math.random()*variableNextCoord.length)];
        return this.setNewParamsMove(nextPath.d, nextPath.nc, this.nexMapCoord)
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
        return turn.filter(turn => turn.nc[pos] === verifiable)
    }

    verticalPath(turn, isBottom, ghostRow) {
        return isBottom ? turn.filter(({nc:[r]}) => ghostRow < r) : turn.filter(({nc:[r]}) => ghostRow > r);
    }

    gorizontalPath(turn, isLeft, ghostColumn) {
        return isLeft ? turn.filter(({nc:[, c]}) => ghostColumn > c) : turn.filter(({nc:[, c]}) => ghostColumn < c);
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