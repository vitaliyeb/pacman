


export default class Entries {



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