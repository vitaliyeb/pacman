!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=2)}([function(t,e,i){},function(t,e){window._configCanvas={w:window.innerWidth,h:window.innerHeight}},function(t,e,i){"use strict";i.r(e);i(0),i(1);function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=function(){function t(e,i,n,r,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.c=e,this.xs=i,this.counterMounth=void 0,this.ys=n,this.x=r,this.y=s,this.angleOpenMounth=Math.PI/50*(i/4*3)/2,this.aa=Math.PI/2,this.direction=[1,0],this.anglePacman=0,this.openMounth=!0,this.color="#ffff00",this.name="pac man",this.r=Math.floor(i/2),this.createCounterMounth()}var e,i,r;return e=t,(i=[{key:"createCounterMounth",value:function(){var t=this;this.counterMounth=setInterval((function(){t.openMounth=!t.openMounth}),200)}},{key:"move",value:function(){console.log("move")}},{key:"renderPacMan",value:function(){this.move();var t=this.c,e=this.xs,i=this.ys,n=this.x,r=this.y,s=this.color,o=this.r,a=this.angleOpenMounth,h=this.anglePacman,u=this.aa,c=this.openMounth;(0,this.clearPacman)();var l=n+e/2,y=r+i/2;t.fillStyle=s,t.beginPath(),t.moveTo(l,y),c?t.arc(l,y,o,a+u*h,u*h-a):t.arc(l,y,o,0,2*Math.PI),t.fill()}},{key:"clearPacman",value:function(){var t=this.c,e=this.x,i=this.y,n=this.xs,r=this.ys;t.clearRect(e,i,n,r)}}])&&n(e.prototype,i),r&&n(e,r),t}();function s(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return o(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var h=function(){function t(e,i,n,r,s,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.gameMap=r,this.c=n,this.entities=o,this.cg=s,this.xs=e,this.ys=i,this.cy=i/2,this.cx=e/2,this.dy=i/8,this.dx=e/8,this.ew=e/5,this.eh=i/5,this.exhs=e/2-this.ew/2,this.eyhs=i/2-this.eh/2,this.lineWidth=4,this.colorLine="#1b1bcd"}var e,i,n;return e=t,(i=[{key:"@",value:function(t,e){var i=this.c,n=this.ew,r=this.eh,s=this.exhs,o=this.eyhs;i.fillStyle="#ffb8ae",i.fillRect(t+s,e+o,n,r)}},{key:"#",value:function(){}},{key:"=",value:function(t,e){return this.rdl(t,e,!0)}},{key:"P",value:function(t,e){var i=this.cg,n=this.xs,s=this.ys;this.entities.pacman=new r(i,n,s,t,e)}},{key:"║",value:function(t,e){return this.rdl(t,e,!1)}},{key:"╬",value:function(){return this.rda.apply(this,Array.prototype.slice.call(arguments).concat([!0]))}},{key:"╪",value:function(){return this.rda.apply(this,Array.prototype.slice.call(arguments).concat([!1]))}},{key:"┅",value:function(t,e){var i=this.c,n=this.cy,r=this.xs,s=this.lineWidth;i.strokeStyle="#ffb8ff",i.lineWidth=s,i.moveTo(t,e+n),i.lineTo(t+r,e+n)}},{key:"|",value:function(t,e){return this.rsl(t,e,!1)}},{key:"-",value:function(t,e){return this.rsl(t,e,!0)}},{key:"L",value:function(t,e){var i=this.xs,n=this.cx,r=this.cy;return this.rsa([t+n,e],[t+n,e+r,t+i,e+r])}},{key:"╕",value:function(t,e){var i=this.xs,n=this.ys,r=this.cx,s=this.cy,o=this.dx,a=this.dy;return this.rdla(t,e+s+a,t+r-o,e+s+a,t+r,e+n,t,e+s-a,e+s-a,t+i)}},{key:"╒",value:function(t,e){var i=this.xs,n=this.ys,r=this.cx,s=this.cy,o=this.dx,a=this.dy;return this.rdla(t+i,e+s+a,t+r+o,e+s+a,t+r,e+n,t,e+s-a,e+s-a,t+i)}},{key:"┏",value:function(t,e){var i=this.xs,n=this.ys,r=this.cx,s=this.cy;return this.rsa([t+r,e+n],[t+r,e+s,t+i,e+s])}},{key:"┛",value:function(t,e){this.xs,this.ys;var i=this.cx,n=this.cy;return this.rsa([t,e+n],[t+i,e+n,t+i,e])}},{key:"┓",value:function(t,e){this.xs;var i=this.ys,n=this.cx,r=this.cy;return this.rsa([t,e+r],[t+n,e+r,t+n,e+i])}},{key:"╓",value:function(t,e){var i=this.xs,n=this.ys,r=this.cx,s=this.cy,o=this.dx,a=this.dy;return this.rdla(t+r+o,e+n,t+r+a,e+s-a,t+i,e+s,t+r-o,e,e+n)}},{key:"╙",value:function(t,e){var i=this.xs,n=this.ys,r=this.cx,s=this.cy,o=this.dx,a=this.dy;return this.rdla(t+r+o,e,t+r+o,e+s+a,t+i,e+s,t+r-o,e,e+n)}},{key:"╜",value:function(t,e){this.xs;var i=this.ys,n=this.cx,r=this.cy,s=this.dx,o=this.dy;return this.rdla(t+n-s,e,t+n-o,e+r,t,e+r,t+n+s,e,e+i)}},{key:"╖",value:function(t,e){var i=this.xs,n=this.ys,r=this.cx,s=this.cy,o=this.dx,a=this.dy;return this.rdla(t+r-o,e+n,t+r-o,e+s-a,t,e+s,t+r+o,e,e+i)}},{key:"rdla",value:function(t,e,i,n,r,s,o,a,h,u){var c=this.c,l=this.colorLine,y=this.lineWidth;c.strokeStyle=l,c.lineWidth=y,c.moveTo(t,e),c.quadraticCurveTo(i,n,r,s),c.moveTo(o,a),c.lineTo(u||o,h)}},{key:"rsa",value:function(t,e){var i=this.c;i.moveTo.apply(i,s(t)),i.quadraticCurveTo.apply(i,s(e))}},{key:"rsl",value:function(t,e,i){var n=this.c,r=this.cy,s=this.cx,o=this.xs,a=this.ys,h=this.colorLine,u=this.lineWidth;n.strokeStyle=h,n.lineWidth=u,i?(n.moveTo(t,e+r),n.lineTo(t+o,e+r)):(n.moveTo(t+s,e),n.lineTo(t+s,e+a))}},{key:"rda",value:function(t,e,i,n,r){var s=this.xs,o=this.ys,a=this.cx,h=this.cy,u=this.dy,c=this.dx,l=this.c,y=this.gameMap,f=this.colorLine,v=this.lineWidth,d=[];l.strokeStyle=f,l.lineWidth=v,i+1==y.length||"="!==y[i+1][n]&&"║"!==y[i+1][n]||d.push([t+a,e+o]),0==i||"="!==y[i-1][n]&&"║"!==y[i-1][n]||d.push([t+a,e]),n+1==y[i].length||"="!==y[i][n+1]&&"║"!==y[i][n+1]||d.push([t+s,e+h]),0==n||"="!==y[i][n-1]&&"║"!==y[i][n-1]||d.push([t,e+h]);var p=d[0],m=d[1],x=p[0],b=p[1],g=m[0],k=m[1],w=x<g?k>b?-1:1:k>b?1:-1,L=x<g?-1:1;[-1,1].map((function(t){l.moveTo(x+c*t,b),r?l.quadraticCurveTo(g+a*L+c*t,k+u*t*w,g,k+u*t*w):(l.lineTo(g+a*L+c*t,k+u*t*w),l.lineTo(g,k+u*t*w))}))}},{key:"rdl",value:function(t,e,i){var n=this.c,r=this.cy,s=this.cx,o=this.dx,a=this.dy,h=this.xs,u=this.ys,c=this.colorLine,l=this.lineWidth;n.strokeStyle=c,n.lineWidth=l,i?(n.moveTo(t,e+r-a),n.lineTo(t+h,e+r-a),n.moveTo(t,e+r+a),n.lineTo(t+h,e+r+a),n.stroke()):(n.moveTo(t+s-o,e),n.lineTo(t+s-o,e+u),n.moveTo(t+s+o,e),n.lineTo(t+s+o,e+u),n.stroke())}}])&&a(e.prototype,i),n&&a(e,n),t}();function u(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.size=e}var e,i,n;return e=t,(i=[{key:"setSize",value:function(){for(var t=this,e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];i.map((function(e){e.width=t.size,e.height=t.size}))}}])&&u(e.prototype,i),n&&u(e,n),t}();!function(){var t=document.getElementById("map"),e={pacman:{}},i=document.getElementById("game"),n=window.innerWidth>window.innerHeight?window.innerHeight-15:window.innerWidth-15,r=t.getContext("2d"),s=i.getContext("2d");new c(n).setSize(t,i);var o=[["╬","=","=","=","=","=","=","=","=","=","=","=","=","╕","╒","=","=","=","=","=","=","=","=","=","=","=","=","╬"],["║","@","@","@","@","@","@","@","@","@","@","@","@","|","|","@","@","@","@","@","@","@","@","@","@","@","@","║"],["║","@","┏","-","-","┓","@","┏","-","-","-","┓","@","|","|","@","┏","-","-","-","┓","@","┏","-","-","┓","@","║"],["║","@","|","#","#","|","@","|","#","#","#","|","@","|","|","@","|","#","#","#","|","@","|","#","#","|","@","║"],["║","@","L","-","-","┛","@","L","-","-","-","┛","@","L","┛","@","L","-","-","-","┛","@","L","-","-","┛","@","║"],["║","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","║"],["║","@","┏","-","-","┓","@","┏","┓","@","┏","-","-","-","-","-","-","┓","@","┏","┓","@","┏","-","-","┓","@","║"],["║","@","L","-","-","┛","@","|","|","@","L","-","-","┓","┏","-","-","┛","@","|","|","@","L","-","-","┛","@","║"],["║","@","@","@","@","@","@","|","|","@","@","@","@","|","|","@","@","@","@","|","|","@","@","@","@","@","@","║"],["╬","=","=","=","=","╬","@","|","L","-","-","┓","@","|","|","@","┏","-","-","┛","|","@","╬","=","=","=","=","╬"],["#","#","#","#","#","║","@","|","┏","-","-","┛","@","L","┛","@","L","-","-","┓","|","@","║","#","#","#","#","#"],["#","#","#","#","#","║","@","|","|","@","@","@","@","@","@","@","@","@","@","|","|","@","║","#","#","#","#","#"],["#","#","#","#","#","║","@","|","|","@","╪","=","=","┅","┅","=","=","╪","@","|","|","@","║","#","#","#","#","#"],["=","=","=","=","=","╬","@","L","┛","@","║","#","#","#","#","#","#","║","@","L","┛","@","╬","=","=","=","=","="],["#","#","#","#","#","#","@","@","@","@","║","#","#","#","#","#","#","║","@","@","@","@","#","#","#","#","#","#"],["=","=","=","=","=","╬","@","┏","┓","@","║","#","#","#","#","#","#","║","@","┏","┓","@","╬","=","=","=","=","="],["#","#","#","#","#","║","@","|","|","@","╪","=","=","=","=","=","=","╪","@","|","|","@","║","#","#","#","#","#"],["#","#","#","#","#","║","@","|","|","@","@","@","@","@","@","@","@","@","@","|","|","@","║","#","#","#","#","#"],["#","#","#","#","#","║","@","|","|","@","┏","-","-","-","-","-","-","┓","@","|","|","@","║","#","#","#","#","#"],["╬","=","=","=","=","╬","@","L","┛","@","L","-","-","┓","┏","-","-","┛","@","L","┛","@","╬","=","=","=","=","╬"],["║","@","@","@","@","@","@","@","@","@","@","@","@","|","|","@","@","@","@","@","@","@","@","@","@","@","@","║"],["║","@","┏","-","-","┓","@","┏","-","-","-","┓","@","|","|","@","┏","-","-","-","┓","@","┏","-","-","┓","@","║"],["║","@","L","-","┓","|","@","L","-","-","-","┛","@","L","┛","@","L","-","-","-","┛","@","|","┏","-","┛","@","║"],["║","@","@","@","|","|","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","|","|","@","@","@","║"],["╙","-","┓","@","|","|","@","┏","┓","@","┏","-","-","-","-","-","-","┓","@","┏","┓","@","|","|","@","┏","-","╜"],["╓","-","┛","@","L","┛","@","|","|","@","L","-","-","┓","┏","-","-","┛","@","|","|","@","L","┛","@","L","-","╖"],["║","@","@","@","@","@","@","|","|","@","@","@","@","|","|","@","@","@","@","|","|","@","@","@","@","@","@","║"],["║","@","┏","-","-","-","-","┛","L","-","-","┓","@","|","|","@","┏","-","-","┛","L","-","-","-","-","┓","@","║"],["║","@","L","-","-","-","-","-","-","-","-","┛","@","L","┛","@","L","-","-","-","-","-","-","-","-","┛","@","║"],["║","@","@","@","@","@","@","@","@","@","@","@","@","P","@","@","@","@","@","@","@","@","@","@","@","@","@","║"],["╬","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","╬"]],a=n/o[0].length,u=n/o.length,l=new h(a,u,r,o,s,e);function y(){e.pacman.renderPacMan(),requestAnimationFrame(y)}o.map((function(t,e){t.map((function(t,i){r.beginPath(),l[t](a*i,u*e,e,i),r.stroke()}))})),y()}()}]);