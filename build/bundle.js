!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=2)}([function(t,e,i){},function(t,e){window._configCanvas={w:window.innerWidth,h:window.innerHeight}},function(t,e,i){"use strict";i.r(e);i(0),i(1);function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var i=[],n=!0,r=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(i.push(s.value),!e||i.length!==e);n=!0);}catch(t){r=!0,o=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function o(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var s=function(){function t(e,i,n,r,o,s,a,h){var u,c,l,f=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l=function(){var t=f.c,e=f.x,i=f.y,n=f.xs,r=f.ys;f.r,t.clearRect(e,i-1,n,r)},(c="clearPacman")in(u=this)?Object.defineProperty(u,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):u[c]=l,this.c=e,this.xs=i,this.counterMounth=void 0,this.gameMap=h,this.ys=n,this.x=r,this.y=o,this.mapCoord=[s,a],this.speed=1,this.angleOpenMounth=Math.PI/50*(i/4*3)/2,this.aa=Math.PI/2,this.direction=[0,0],this.anglePacman=0,this.openMounth=!0,this.color="#ffff00",this.name="pac man",this.r=i<n?Math.floor(i/2)-1:Math.floor(n/2)-1,this.createCounterMounth()}var e,i,r;return e=t,(i=[{key:"createCounterMounth",value:function(){var t=this;this.counterMounth=setInterval((function(){t.openMounth=!t.openMounth}),200)}},{key:"coolision",value:function(t,e,i,n,r,o,s,a){this.gameMap;var h=t/r,u=e/o;console.log(h,u)}},{key:"move",value:function(){var t=this.x,e=this.y,i=n(this.direction,2),r=i[0],o=i[1],s=this.speed,a=this.xs,h=this.ys,u=t+s*r,c=e+s*o,l=this.coolision(t,e,u,c,a,h,o,r);l&&(this.x=u,this.y=c)}},{key:"renderPacMan",value:function(){this.move();var t=this.c,e=this.xs,i=this.ys,n=this.x,r=this.y,o=this.color,s=this.r,a=this.angleOpenMounth,h=this.anglePacman,u=this.aa,c=this.openMounth;(0,this.clearPacman)();var l=n+Math.floor(e/2),f=r+Math.floor(i/2);t.fillStyle=o,t.beginPath(),t.moveTo(l,f),c?t.arc(l,f,s,a+u*h,u*h-a):t.arc(l,f,s,0,2*Math.PI),t.fill()}}])&&o(e.prototype,i),r&&o(e,r),t}();function a(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return h(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function u(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c=function(){function t(e,i,n,r,o,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.gameMap=r,this.c=n,this.entities=s,this.cg=o,this.xs=e,this.ys=i,this.cy=i/2,this.cx=e/2,this.dy=i/8,this.dx=e/8,this.ew=e/5,this.eh=i/5,this.exhs=e/2-this.ew/2,this.eyhs=i/2-this.eh/2,this.lineWidth=4,this.colorLine="#1b1bcd"}var e,i,n;return e=t,(i=[{key:"@",value:function(t,e){var i=this.c,n=this.ew,r=this.eh,o=this.exhs,s=this.eyhs;i.fillStyle="#ffb8ae",i.fillRect(t+o,e+s,n,r)}},{key:"#",value:function(){}},{key:"=",value:function(t,e){return this.rdl(t,e,!0)}},{key:"P",value:function(t,e,i,n){var r=this.cg,o=this.xs,a=this.ys,h=this.gameMap;this.entities.pacman=new s(r,o,a,t,e,i,n,h)}},{key:"║",value:function(t,e){return this.rdl(t,e,!1)}},{key:"╬",value:function(){return this.rda.apply(this,Array.prototype.slice.call(arguments).concat([!0]))}},{key:"╪",value:function(){return this.rda.apply(this,Array.prototype.slice.call(arguments).concat([!1]))}},{key:"┅",value:function(t,e){var i=this.c,n=this.cy,r=this.xs,o=this.lineWidth;i.strokeStyle="#ffb8ff",i.lineWidth=o,i.moveTo(t,e+n),i.lineTo(t+r,e+n)}},{key:"|",value:function(t,e){return this.rsl(t,e,!1)}},{key:"-",value:function(t,e){return this.rsl(t,e,!0)}},{key:"L",value:function(t,e){var i=this.xs,n=this.cx,r=this.cy;return this.rsa([t+n,e],[t+n,e+r,t+i,e+r])}},{key:"╕",value:function(t,e){var i=this.xs,n=this.ys,r=this.cx,o=this.cy,s=this.dx,a=this.dy;return this.rdla(t,e+o+a,t+r-s,e+o+a,t+r,e+n,t,e+o-a,e+o-a,t+i)}},{key:"╒",value:function(t,e){var i=this.xs,n=this.ys,r=this.cx,o=this.cy,s=this.dx,a=this.dy;return this.rdla(t+i,e+o+a,t+r+s,e+o+a,t+r,e+n,t,e+o-a,e+o-a,t+i)}},{key:"┏",value:function(t,e){var i=this.xs,n=this.ys,r=this.cx,o=this.cy;return this.rsa([t+r,e+n],[t+r,e+o,t+i,e+o])}},{key:"┛",value:function(t,e){this.xs,this.ys;var i=this.cx,n=this.cy;return this.rsa([t,e+n],[t+i,e+n,t+i,e])}},{key:"┓",value:function(t,e){this.xs;var i=this.ys,n=this.cx,r=this.cy;return this.rsa([t,e+r],[t+n,e+r,t+n,e+i])}},{key:"╓",value:function(t,e){var i=this.xs,n=this.ys,r=this.cx,o=this.cy,s=this.dx,a=this.dy;return this.rdla(t+r+s,e+n,t+r+a,e+o-a,t+i,e+o,t+r-s,e,e+n)}},{key:"╙",value:function(t,e){var i=this.xs,n=this.ys,r=this.cx,o=this.cy,s=this.dx,a=this.dy;return this.rdla(t+r+s,e,t+r+s,e+o+a,t+i,e+o,t+r-s,e,e+n)}},{key:"╜",value:function(t,e){this.xs;var i=this.ys,n=this.cx,r=this.cy,o=this.dx,s=this.dy;return this.rdla(t+n-o,e,t+n-s,e+r,t,e+r,t+n+o,e,e+i)}},{key:"╖",value:function(t,e){var i=this.xs,n=this.ys,r=this.cx,o=this.cy,s=this.dx,a=this.dy;return this.rdla(t+r-s,e+n,t+r-s,e+o-a,t,e+o,t+r+s,e,e+i)}},{key:"rdla",value:function(t,e,i,n,r,o,s,a,h,u){var c=this.c,l=this.colorLine,f=this.lineWidth;c.strokeStyle=l,c.lineWidth=f,c.moveTo(t,e),c.quadraticCurveTo(i,n,r,o),c.moveTo(s,a),c.lineTo(u||s,h)}},{key:"rsa",value:function(t,e){var i=this.c;i.moveTo.apply(i,a(t)),i.quadraticCurveTo.apply(i,a(e))}},{key:"rsl",value:function(t,e,i){var n=this.c,r=this.cy,o=this.cx,s=this.xs,a=this.ys,h=this.colorLine,u=this.lineWidth;n.strokeStyle=h,n.lineWidth=u,i?(n.moveTo(t,e+r),n.lineTo(t+s,e+r)):(n.moveTo(t+o,e),n.lineTo(t+o,e+a))}},{key:"rda",value:function(t,e,i,n,r){var o=this.xs,s=this.ys,a=this.cx,h=this.cy,u=this.dy,c=this.dx,l=this.c,f=this.gameMap,y=this.colorLine,v=this.lineWidth,d=[];l.strokeStyle=y,l.lineWidth=v,i+1==f.length||"="!==f[i+1][n]&&"║"!==f[i+1][n]||d.push([t+a,e+s]),0==i||"="!==f[i-1][n]&&"║"!==f[i-1][n]||d.push([t+a,e]),n+1==f[i].length||"="!==f[i][n+1]&&"║"!==f[i][n+1]||d.push([t+o,e+h]),0==n||"="!==f[i][n-1]&&"║"!==f[i][n-1]||d.push([t,e+h]);var p=d[0],m=d[1],b=p[0],x=p[1],g=m[0],k=m[1],w=b<g?k>x?-1:1:k>x?1:-1,L=b<g?-1:1;[-1,1].map((function(t){l.moveTo(b+c*t,x),r?l.quadraticCurveTo(g+a*L+c*t,k+u*t*w,g,k+u*t*w):(l.lineTo(g+a*L+c*t,k+u*t*w),l.lineTo(g,k+u*t*w))}))}},{key:"rdl",value:function(t,e,i){var n=this.c,r=this.cy,o=this.cx,s=this.dx,a=this.dy,h=this.xs,u=this.ys,c=this.colorLine,l=this.lineWidth;n.strokeStyle=c,n.lineWidth=l,i?(n.moveTo(t,e+r-a),n.lineTo(t+h,e+r-a),n.moveTo(t,e+r+a),n.lineTo(t+h,e+r+a),n.stroke()):(n.moveTo(t+o-s,e),n.lineTo(t+o-s,e+u),n.moveTo(t+o+s,e),n.lineTo(t+o+s,e+u),n.stroke())}}])&&u(e.prototype,i),n&&u(e,n),t}();function l(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.size=e}var e,i,n;return e=t,(i=[{key:"setSize",value:function(){for(var t=this,e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];i.map((function(e){e.width=t.size,e.height=t.size}))}}])&&l(e.prototype,i),n&&l(e,n),t}();!function(){var t=document.getElementById("map"),e={pacman:{}},i=document.getElementById("game"),n=window.innerWidth>window.innerHeight?window.innerHeight-15:window.innerWidth-15,r=t.getContext("2d"),o=i.getContext("2d");new f(n).setSize(t,i);var s=[["╬","=","=","=","=","=","=","=","=","=","=","=","=","╕","╒","=","=","=","=","=","=","=","=","=","=","=","=","╬"],["║","@","@","@","@","@","@","@","@","@","@","@","@","|","|","@","@","@","@","@","@","@","@","@","@","@","@","║"],["║","@","┏","-","-","┓","@","┏","-","-","-","┓","@","|","|","@","┏","-","-","-","┓","@","┏","-","-","┓","@","║"],["║","@","|","#","#","|","@","|","#","#","#","|","@","|","|","@","|","#","#","#","|","@","|","#","#","|","@","║"],["║","@","L","-","-","┛","@","L","-","-","-","┛","@","L","┛","@","L","-","-","-","┛","@","L","-","-","┛","@","║"],["║","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","║"],["║","@","┏","-","-","┓","@","┏","┓","@","┏","-","-","-","-","-","-","┓","@","┏","┓","@","┏","-","-","┓","@","║"],["║","@","L","-","-","┛","@","|","|","@","L","-","-","┓","┏","-","-","┛","@","|","|","@","L","-","-","┛","@","║"],["║","@","@","@","@","@","@","|","|","@","@","@","@","|","|","@","@","@","@","|","|","@","@","@","@","@","@","║"],["╬","=","=","=","=","╬","@","|","L","-","-","┓","@","|","|","@","┏","-","-","┛","|","@","╬","=","=","=","=","╬"],["#","#","#","#","#","║","@","|","┏","-","-","┛","@","L","┛","@","L","-","-","┓","|","@","║","#","#","#","#","#"],["#","#","#","#","#","║","@","|","|","@","@","@","@","@","@","@","@","@","@","|","|","@","║","#","#","#","#","#"],["#","#","#","#","#","║","@","|","|","@","╪","=","=","┅","┅","=","=","╪","@","|","|","@","║","#","#","#","#","#"],["=","=","=","=","=","╬","@","L","┛","@","║","#","#","#","#","#","#","║","@","L","┛","@","╬","=","=","=","=","="],["#","#","#","#","#","#","@","@","@","@","║","#","#","#","#","#","#","║","@","@","@","@","#","#","#","#","#","#"],["=","=","=","=","=","╬","@","┏","┓","@","║","#","#","#","#","#","#","║","@","┏","┓","@","╬","=","=","=","=","="],["#","#","#","#","#","║","@","|","|","@","╪","=","=","=","=","=","=","╪","@","|","|","@","║","#","#","#","#","#"],["#","#","#","#","#","║","@","|","|","@","@","@","@","@","@","@","@","@","@","|","|","@","║","#","#","#","#","#"],["#","#","#","#","#","║","@","|","|","@","┏","-","-","-","-","-","-","┓","@","|","|","@","║","#","#","#","#","#"],["╬","=","=","=","=","╬","@","L","┛","@","L","-","-","┓","┏","-","-","┛","@","L","┛","@","╬","=","=","=","=","╬"],["║","@","@","@","@","@","@","@","@","@","@","@","@","|","|","@","@","@","@","@","@","@","@","@","@","@","@","║"],["║","@","┏","-","-","┓","@","┏","-","-","-","┓","@","|","|","@","┏","-","-","-","┓","@","┏","-","-","┓","@","║"],["║","@","L","-","┓","|","@","L","-","-","-","┛","@","L","┛","@","L","-","-","-","┛","@","|","┏","-","┛","@","║"],["║","@","@","@","|","|","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","|","|","@","@","@","║"],["╙","-","┓","@","|","|","@","┏","┓","@","┏","-","-","-","-","-","-","┓","@","┏","┓","@","|","|","@","┏","-","╜"],["╓","-","┛","@","L","┛","@","|","|","@","L","-","-","┓","┏","-","-","┛","@","|","|","@","L","┛","@","L","-","╖"],["║","@","@","@","@","@","@","|","|","@","@","@","@","|","|","@","@","@","@","|","|","@","@","@","@","@","@","║"],["║","@","┏","-","-","-","-","┛","L","-","-","┓","@","|","|","@","┏","-","-","┛","L","-","-","-","-","┓","@","║"],["║","@","L","-","-","-","-","-","-","-","-","┛","@","L","┛","@","L","-","-","-","-","-","-","-","-","┛","@","║"],["║","@","@","@","@","@","@","@","@","@","@","@","@","P","@","@","@","@","@","@","@","@","@","@","@","@","@","║"],["╬","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","╬"]],a=n/s[0].length,h=n/s.length,u=new c(a,h,r,s,o,e);function l(){e.pacman.renderPacMan(),requestAnimationFrame(l)}s.map((function(t,e){t.map((function(t,i){r.beginPath(),r.lineWidth=1,r.rect(a*i,h*e,a,h),r.stroke(),r.beginPath(),u[t](a*i,h*e,e,i),r.stroke()}))})),l()}()}]);