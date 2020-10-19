import Pacman from './pacman';
import { ShadowGhost } from './ghost';

export default class RenderMapElements {
    constructor (xs, ys, contextMap, gameMap, contextGame, entities) {
        this.gameMap = gameMap;
        this.c = contextMap; 
        this.entities = entities;
        this.cg = contextGame;
        this.xs = xs;
        this.ys = ys;
        this.cy = ys / 2;
        this.cx = xs / 2;
        this.dy = ys / 8;
        this.dx = xs / 8;
        this.ew = xs / 5;
        this.eh = ys / 5;
        this.exhs = xs / 2 - this.ew / 2;
        this.eyhs = ys / 2 - this.eh / 2;
        this.lineWidth = Math.floor(Math.min(window.innerWidth, window.innerHeight) / 300);
        this.colorLine = '#1b1bcd';
    }

    '@'(x, y, mr, mc) {
        let { c, ew, eh, exhs, eyhs, eatItem } = this;
        _configCanvas.game.allEatElement++;
        c.fillStyle  = '#ffb8ae';
        c.fillRect(x + exhs, y + eyhs, ew, eh);
    }
    'E'(x, y) {
        let { c, cy, cx } = this;
        _configCanvas.game.allEatElement++;
        c.fillStyle = 'ffb8ae';
        c.arc(x + cx, y + cy, cy < cx ? cy : cx, 0, Math.PI * 2);
        c.fill();
        c.beginPath();
    }

    '#'() {
        return;
    }

    'X'() {
        return;
    }

    '='(x, y) {
        return this.rdl(x, y, true);
    }

    '║'(x, y) {
        return this.rdl(x, y, false);
    }

    '╬'() {
        return this.rda(...arguments, true);
    }

    '╪'() {
        return this.rda(...arguments, false);
    }

    '┅'(x, y) {
        let { c, cx, ys, lineWidth } = this;
        c.strokeStyle = '#ffb8ff';
        c.lineWidth = lineWidth;
        c.moveTo(x + cx, y);
        c.lineTo(x + cx, y + ys);
    }

    '|'(x, y) {
        return this.rsl(x, y, false);
    }

    '-'(x, y) {
        return this.rsl(x, y, true);
    }

    'L'(x, y) {
        let { xs, cx, cy } = this;
        return this.rsa([x + cx, y], [x + cx, y + cy ,x + xs, y + cy]);
    }

    '╕'(x, y) {
        let { xs, ys, cx, cy, dx, dy } = this;
        return this.rdla(x, y + cy + dy, x + cx - dx, y + cy + dy, x + cx, y + ys, x, y + cy - dy, y + cy - dy, x + xs);
    }

    '╒'(x, y) {
        let { xs, ys, cx, cy, dx, dy } = this;
        return this.rdla(x + xs, y + cy + dy, x + cx + dx, y + cy + dy, x + cx, y + ys, x, y + cy - dy, y + cy - dy, x + xs);
    }
    
    '┏'(x, y) {
        let { xs, ys, cx, cy } = this;
        return this.rsa([x + cx, y + ys], [x + cx, y + cy ,x + xs, y + cy]);
    }

    '┛'(x, y) {
        let { xs, ys, cx, cy } = this;
        return this.rsa([x, y + cy], [x + cx, y + cy ,x + cx, y]);
    }

    '┓'(x, y) {
        let { xs, ys, cx, cy } = this;
        return this.rsa([x, y + cy], [x + cx, y + cy ,x + cx, y + ys]);
    }

    '╓'(x, y) {
        let { xs, ys, cx, cy, dx, dy } = this;
        return this.rdla(x + cx + dx, y + ys, x + cx + dy, y + cy - dy, x + xs, y + cy, x + cx - dx, y, y + ys);
    }
    '╙'(x, y) {
        let { xs, ys, cx, cy, dx, dy } = this;
        return this.rdla(x + cx + dx, y, x + cx + dx, y + cy + dy, x + xs, y + cy, x + cx - dx, y, y + ys);
    }
    '╜'(x, y) {
        let { xs, ys, cx, cy, dx, dy } = this;
        return this.rdla(x + cx - dx, y, x + cx - dy, y + cy, x, y + cy, x + cx + dx, y, y + ys);
    }
    '╖'(x, y) {
        let { xs, ys, cx, cy, dx, dy } = this;
        return this.rdla(x + cx - dx, y + ys, x + cx - dx, y + cy - dy, x, y + cy, x + cx + dx, y, y + xs);
    }

    'rdla'(x, y, xq, yq, x1, y1, x2, y2, y3, x3) {
        let { c, colorLine, lineWidth } = this;
        c.strokeStyle = colorLine;
        c.lineWidth = lineWidth;
        c.moveTo(x, y);
        c.quadraticCurveTo(xq, yq, x1, y1);
        c.moveTo(x2, y2);
        c.lineTo(x3 || x2, y3);
    }

    'rsa'(s, e) {
        let { c } = this; 
        c.moveTo(...s);
        c.quadraticCurveTo(...e);
    }

    'rsl'(x, y, isHorizontal) {
        let {c, cy, cx, xs, ys, colorLine, lineWidth} = this;
        c.strokeStyle = colorLine;
        c.lineWidth = lineWidth;
        if (isHorizontal) {
            c.moveTo(x,  y + cy);
            c.lineTo(x + xs, y + cy);
        } else {
            c.moveTo(x + cx, y);
            c.lineTo(x + cx, y + ys); 
        }
    }

    'rda'(x, y, r, c, isSmooth) {
        let { xs, ys, cx, cy, dy, dx, c: ctx, gameMap, colorLine, lineWidth } = this;
        let params = [];
    
        ctx.strokeStyle = colorLine;
        ctx.lineWidth = lineWidth;
    
        if (r+1 != gameMap.length && (gameMap[r+1][c] === '=' || gameMap[r+1][c] === '║')) params.push([x + cx, y + ys]);
        if (r != 0 && (gameMap[r-1][c] === '=' || gameMap[r-1][c] === '║')) params.push([x + cx, y]);
        if (c+1 != gameMap[r].length && (gameMap[r][c+1] === '=' || gameMap[r][c+1] === '║')) params.push([x + xs, y + cy]);
        if (c != 0 && (gameMap[r][c-1] === '=' || gameMap[r][c-1] === '║')) params.push([x, y + cy]);
    
        let [s, e] = params;
        let sx = s[0], sy = s[1], ex = e[0], ey = e[1];
        let my = sx < ex ? (ey > sy ? -1 : 1) : (ey > sy ? 1 : -1);
        let mqx = sx < ex ? -1 : 1;
        [-1, 1].map(k => {
            ctx.moveTo(sx + (dx * k), sy);
            if (isSmooth) {
                ctx.quadraticCurveTo(ex + (cx * mqx) + (dx * k), ey + (dy * k * my), ex, ey + (dy * k * my));
            } else {
                ctx.lineTo(ex + (cx * mqx) + (dx * k), ey + (dy * k * my));
                ctx.lineTo(ex, ey + (dy * k * my));
            }
        });
    }

    'rdl'(x, y, ih) {
        let { c, cy, cx, dx, dy, xs, ys, colorLine, lineWidth } = this;
        c.strokeStyle = colorLine;
        c.lineWidth = lineWidth;
        if (ih) {
            c.moveTo(x, y + cy - dy);
            c.lineTo(x + xs, y + cy - dy);
            c.moveTo(x, y + cy + dy);
            c.lineTo(x + xs, y + cy + dy);
            c.stroke();
        } else {
            c.moveTo(x + cx - dx, y);
            c.lineTo(x + cx - dx, y + ys);
            c.moveTo(x + cx + dx, y);
            c.lineTo(x + cx + dx, y + ys);
            c.stroke();
        }
    }

}