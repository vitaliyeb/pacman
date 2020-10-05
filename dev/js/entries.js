


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

    render() {
        this.paintGhost();
        this.move();
        this.touchPacman();
    }

    move() {
        let { mapCoordiante:[row, column], nexMapCoord:[nextRow, nextColumn], xSteep, ySteep } = this;
        if ( column != nextColumn ) this.updateCoord( 1, nextColumn, xSteep );
        if ( row != nextRow ) this.updateCoord( 0, nextRow, ySteep );
        this.calcFactualSituation();
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
        let { isLocked } = this;
        if(isLocked) return this.lockedNextCoord();

        let turn = this.ifTurn();

        let turnOtside = turn.filter(el=> el.nc[posCoord] === nextMapCoordInt);
        if (!turnOtside.length) return this.proceedMotion();

        switch (this.type){
            case 'chase':   
                return this.chase(turn);
            case 'diffusion':
                return this.diffusion(turn);
            case 'fright':
                return this.fright(turn);
            case 'goOutside':
                return this.goOutside(turn);
            case 'goToHome':
                return this.goToHome(turn);   
        }
    }


    goToHome(turn){
        let { nexMapCoord: [row, col], name, toInput } = this;
        if(!toInput && (row !== 14 || col !== 9)) return this.goToThePoint(turn, 14, 9);
        this.toInput = true;
        
        let [rowTarget, colTarget] = _configCanvas.positionGoToHome[name];
        if(row !== rowTarget || col !== colTarget) return this.goToThePoint(turn, rowTarget, colTarget);

        this.toInput = false;
        this.eaten = true;
        return this.type = 'goOutside';
    }

    lockedNextCoord() {
        let { direction: [ rowDirection], nexMapCoord: [row, col] } = this;

        if( _configCanvas.game.eaten >= _configCanvas.counterEatinOutside[this.name] || _configCanvas.game.level > 3 ){
            return this.exitLocked();
        }
         
        rowDirection < 0 ? 
            this.setNewParamsMove([1,0], [row + 2, col], [row, col] ) : 
            this.setNewParamsMove([-1,0], [row - 2, col], [row, col] ) ;
    }

    exitLocked() {
        this.isLocked = false;
        this.type = 'goOutside';
    }

    goOutside(turn) {
        let { nexMapCoord: [row, col] } = this;
        if(row === 14 && col === 9) {
            if(_configCanvas.game.fright) {
                this.changeColor();
                return this.type = 'fright';
            }

            return this.type = _configCanvas.game.currentGlobalType;
        }
        this.goToThePoint(turn, 14, 9);
    }

    proceedMotion() {
        let { nexMapCoord: [ nextRow, nextCol ], direction: [yDirect, xDirect] } = this;
        this.nexMapCoord = [nextRow + yDirect, nextCol + xDirect];
        this.mapCoordiante = [nextRow, nextCol];
    }


    chase(turn) {
        let { nextMapCoord, mapCoord, stope } = entities['pacman'];
        let [ pacmanRow, pacmanCol ] = stope ? mapCoord : nextMapCoord;
        this.goToThePoint(turn, pacmanRow, pacmanCol);
    }

    fright(turn) {
        let { mapCoordiante: [row, col] } = this;
        turn = turn.filter((el)=> el.nc[0] !== row || el.nc[1] !== col);
        let nextPath = turn[Math.floor(Math.random()*turn.length)];
        return this.setNewParamsMove(nextPath.d, nextPath.nc, this.nexMapCoord)
    }

    diffusion(turn) {
        let { diffusionPaintInMap:[tr, tc] } = this;
        this.goToThePoint(turn, tr, tc );
    }

    goToThePoint(turn, targetRow, targetColumn) {
        let { nexMapCoord: [ghostRow, ghostColumn], changeType, mapCoordiante: [row, col] } = this;

        let isBottom = ghostRow < targetRow;
        let isLeft = ghostColumn > targetColumn;

        let vPath;
        let gPath;
        if (!changeType) turn = turn.filter((el)=> el.nc[0] !== row || el.nc[1] !== col);

        if (targetRow === ghostRow){
            gPath = this.gorizontalPath(turn,isLeft, ghostColumn, targetColumn);

            if (gPath.length) return this.setNewParamsMove(gPath[0].d, gPath[0].nc, this.nexMapCoord);
            return this.hitTheWall(turn, 1, ghostColumn);
        }

        if(ghostColumn === targetColumn){
            vPath = this.verticalPath(turn, isBottom, ghostRow, targetRow);
            if (vPath.length) return this.setNewParamsMove(vPath[0].d, vPath[0].nc, this.nexMapCoord);
            return this.hitTheWall(turn, 0, ghostRow);
        }

        gPath = this.gorizontalPath(turn, isLeft, ghostColumn, targetColumn);

        vPath = this.verticalPath(turn, isBottom, ghostRow, targetRow);
        let paths = [...gPath, ...vPath];

        if (paths.length){
            let path = paths[Math.floor(Math.random()*paths.length)];
            return this.setNewParamsMove(path.d, path.nc, this.nexMapCoord);
        }

        let transition = turn.filter((el)=> el.nc[0] !== row || el.nc[1] !== col);
        return this.setNewParamsMove(transition[0].d, transition[0].nc, this.nexMapCoord);
    }

    hitTheWall(turn, pos, gsc) {
        let variableNextCoord = this.filtrCurrentPlane(turn, pos, gsc);
        let nextPath = variableNextCoord[Math.floor(Math.random()*variableNextCoord.length)];
        if (nextPath) return this.setNewParamsMove(nextPath.d, nextPath.nc, this.nexMapCoord)
        return this.setNewParamsMove(turn[0].d, turn[0].nc, this.nexMapCoord)
    }

    setNewParamsMove(direction, nextCoord, currentCoord) {
        this.mapCoordiante = currentCoord;
        this.nexMapCoord = nextCoord;
        this.direction = direction;
    }

    checkElementPermeability(element) {
        return element === '@' || element === 'E' || element === '#' || 
        ((this.type === 'goOutside' || this.type === 'goToHome') && element === '┅');
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

    touchPacman() {
       let { actualSituation: [rowGhost, colGhost] } = this;
       let { pacman : {actualSituation : [rowPac, colPac]} } = entities;

       if( rowGhost === rowPac && colGhost === colPac ){
        if (_configCanvas.game.fright){
            _configCanvas.game.score += 200;
            return this.type = 'goToHome';
       }
       _configCanvas.game.play = false;
       }
    }



    changeColor() {
        _configCanvas.timeId.ghosts[this.name].fright = setInterval(()=>{
            if (!_configCanvas.game.fright){
                clearInterval( _configCanvas.timeId.ghosts[this.name].fright);
                this.type = _configCanvas.game.currentGlobalType;
                return this.color = this.originColor;
            }
            this.color = this.color === this.originColor ? '#5d5db2' : this.originColor;
        }, 300);
    }

    calcFactualSituation() {
        let { coordinate: [y, x], xSteep, ySteep, direction: [yd, xd] } = this;
        let p = xd === 0 ? [y, ySteep, 0] : [x, xSteep, 1];
        this.actualSituation[p[2]] = Math.floor(p[0] / p[1]) + (p[0] % p[1] > p[1] / 2 ? 1 : 0);
    }

    paintGhost(){
        let { contextGame, coordinate: [y, x], color, xSteep, ySteep, type } = this;

        if (this.type !== 'goToHome'){
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
        }

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
        contextGame.closePath();
    }

    paintPointHelper(row, col) {
        let { contextGame, xSteep, ySteep } = this;
        contextGame.beginPath();
        contextGame.fillStyle = '#red';
        contextGame.fillRect(col * xSteep, row * ySteep, xSteep, ySteep);
        contextGame.closePath();
    }

}