!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){},function(t,e){window._configCanvas={w:window.innerWidth,h:window.innerHeight,ghostPosition:{shadow:[14,9]},game:{play:!0}}},function(t,e,n){"use strict";n.r(e);n(0),n(1);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function(){function t(e,n,i,o,s,h,u,c,l){var f=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,"setPropertyOnClick",(function(t,e,n){var i=f.stope,o=(f.gameMap,r(f.nextMapCoord,2)),a=o[0],s=o[1],h=r(f.direction,2),u=(h[0],h[1],r(f.mapCoord,2)),c=u[0],l=u[1],y=f.endChangeDirection;if(t){if(y===e||y===n)return;f.checkPassage(a+n,s+e)&&(f.direction=[e,n],f.nextMapCoord=[a+n,s+e],f.mapCoord=[a,s],f.endChangeDirection=0===e?n:e)}else{var d=i?[c+n,l+e]:[a+n,s+e];if(f.checkPassage.apply(f,d))return f.changeCourse=[e,n]}})),a(this,"clearPacman",(function(){var t=f.c;f.x,f.y,f.xs,f.ys,f.r;t.clearRect(0,0,1e3,1e3)})),this.c=e,this.xs=n,this.counterMounth=void 0,this.gameMap=c,this.contextMap=l,this.maxX=(c[0].length-1)*n,this.ys=i,this.x=o,this.y=s,this.nextMapCoord=[h,u+1],this.mapCoord=[h,u],this.speed=1,this.angleOpenMounth=Math.PI/50*(n/4*3)/2,this.changeCourse=void 0,this.aa=Math.PI/2,this.direction=[1,0],this.anglePacman=0,this.throughData=void 0,this.openMounth=!0,this.stope=!1,this.endChangeDirection=void 0,this.color="#ffff00",this.isThrough=!1,this.name="pac man",this.r=n<i?Math.floor(n/2):Math.floor(i/2),this.createCounterMounth(),this.keyEventId=window.addEventListener("keydown",(function(t){var e=t.code,n=r(f.direction,2),i=n[0],o=n[1],a=f.setPropertyOnClick;if(!f.isThrough)switch(e){case"ArrowUp":return a(0!=o?1:0,0,-1);case"ArrowLeft":return a(0!=i?1:0,-1,0);case"ArrowRight":return a(0!=i?1:0,1,0);case"ArrowDown":return a(0!=o?1:0,0,1)}}))}var e,n,i;return e=t,(n=[{key:"createCounterMounth",value:function(){var t=this;this.counterMounth=setInterval((function(){t.openMounth=!t.openMounth}),200)}},{key:"coolision",value:function(t,e){var n=this.stope,i=r(this.mapCoord,2),o=i[0],a=i[1],s=this.gameMap,h=(this.c,r(this.nextMapCoord,2)),u=h[0],c=h[1],l=this.changeCourse,f=this.isThrough;if(f&&this.through(),this.checkPassage(u,c))return n&&(this.createCounterMounth(),this.stope=!1),this[t]+=e;if("X"===s[o][a]&&!f)return this.through();if(l){var y=r(l,2),d=y[0],p=y[1];this.nextMapCoord=[o+p,a+d],this.direction=l,this.changeCourse=void 0}n||f||this.stopePacman()}},{key:"through",value:function(){var t=this.isThrough,e=r(this.direction,1)[0],n=r(this.mapCoord,1)[0],i=this.ys,o=this.xs,a=this.speed;t||this.createTroughConfig(o,e>0);var s=this.throughData,h=s.startPositionPaint,u=s.endTrough;if(this.throughData.startPositionPaint+=e*a,this.x+=e*a,h===u)return this.endTrough(u,o);this.paintPac(h,n*i)}},{key:"createTroughConfig",value:function(t,e){var n=this.maxX;this.throughData={startPositionPaint:e?-t:n+t,endTrough:e?0:n},this.isThrough=!0}},{key:"endTrough",value:function(t){var e=r(this.mapCoord,2),n=e[0],i=(e[1],this.gameMap);return this.x=t,this.mapCoord=[n,0===t?0:i[0].length-1],this.nextMapCoord=[n,0===t?1:i[0].length-2],this.isThrough=!1}},{key:"checkPassage",value:function(t,e){var n=this.gameMap[t][e];return"@"===n||"P"===n||"#"===n||"X"===n}},{key:"updateCoords",value:function(t,e,n,i){var o=r(this.nextMapCoord,2),a=o[0],s=o[1],h=r(this.direction,2),u=h[0],c=h[1];if(this[i]!==e)return this.coolision(i,n);if(this.changeCourse||(this.nextMapCoord=[a+c,s+u]),this.changeCourse){var l=r(this.changeCourse,2),f=l[0],y=l[1];this.nextMapCoord=[a+y,s+f],this.direction=this.changeCourse,this.changeCourse=void 0}this.mapCoord=[a,s],this.endChangeDirection=void 0}},{key:"move",value:function(){var t=this.x,e=this.y,n=r(this.direction,2),i=n[0],o=n[1],a=this.speed,s=this.xs,h=this.ys,u=r(this.mapCoord,2),c=u[0],l=u[1],f=r(this.nextMapCoord,2),y=f[0],d=f[1];return l!==d?this.updateCoords(t,s*d,a*i,"x"):c!==y?this.updateCoords(e,h*y,a*o,"y"):void 0}},{key:"stopePacman",value:function(){this.stope=!0,clearInterval(this.counterMounth),this.openMounth=!1}},{key:"ifEatElem",value:function(){var t=r(this.mapCoord,2),e=t[0],n=t[1],i=this.gameMap,o=this.contextMap,a=this.xs,s=this.ys;"@"===i[e][n]&&(i[e][n]="#",o.beginPath(),o.fillStyle="#000",o.fillRect(a*n,s*e,a,s),o.closePath())}},{key:"renderPacMan",value:function(){this.clearPacman(),this.move(),this.paintPac(this.x,this.y),this.ifEatElem()}},{key:"paintPac",value:function(t,e){var n=this.c,i=this.xs,o=this.ys,a=this.color,s=this.r,h=this.angleOpenMounth,u=this.aa,c=this.openMounth,l=r(this.direction,2),f=l[0],y=l[1],d=t+Math.floor(i/2),p=e+Math.floor(o/2),v=0===f?y<0?3:1:f<0?2:0;n.fillStyle=a,n.beginPath(),n.moveTo(d,p),c?n.arc(d,p,s,h+u*v,u*v-h):n.arc(d,p,s,0,2*Math.PI),n.fill()}}])&&o(e.prototype,n),i&&o(e,i),t}();function h(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||c(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(t,e)||c(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=g(t);if(e){var i=g(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return m(this,n)}}function m(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(o,t);var e,n,r,i=v(o);function o(t,e,n,r,a,s,h,u){var c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(c=i.call(this)).contextGame=t,c.coordinate=[s,a],c.mapCoordiante=[h,u],c.nexMapCoord=[h+1,u],c.xSteep=e,c.ySteep=n,c.speed=1,c.map=r,c.color="#ff0000",c.direction=[1,0],c.type="chase",c.changeType=!1,c}return e=o,(n=[{key:"render",value:function(){this.paintGhost(),this.move(),this.touchPacman()}}])&&d(e.prototype,n),r&&d(e,r),o}(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,(n=[{key:"ifTurn",value:function(){var t=this,e=u(this.nexMapCoord,2),n=e[0],r=e[1],i=this.map;return[{nc:[n-1,r],d:[-1,0]},{nc:[n,r+1],d:[0,1]},{nc:[n+1,r],d:[1,0]},{nc:[n,r-1],d:[0,-1]}].filter((function(e){return t.checkElementPermeability(i[e.nc[0]][e.nc[1]])}))}},{key:"move",value:function(){var t=u(this.mapCoordiante,2),e=t[0],n=t[1],r=u(this.nexMapCoord,2),i=r[0],o=r[1],a=this.xSteep,s=this.ySteep;n!=o&&this.updateCoord(1,o,a),e!=i&&this.updateCoord(0,i,s)}},{key:"updateCoord",value:function(t,e,n){var r=this.speed,i=this.coordinate,o=this.direction,a=i[t],s=e*n,h=o[t];if(s!=a)return this.coordinate[t]=a+r*h;this.setNextCoord(t,e)}},{key:"setNextCoord",value:function(t,e){var n=this.ifTurn();if(!n.filter((function(n){return n.nc[t]===e})).length)return this.proceedMotion();switch(this.type){case"chase":return this.chase(n)}}},{key:"proceedMotion",value:function(){var t=u(this.nexMapCoord,2),e=t[0],n=t[1],r=u(this.direction,2),i=r[0],o=r[1];this.nexMapCoord=[e+i,n+o],this.mapCoordiante=[e,n]}},{key:"chase",value:function(t){var e=entities.pacman,n=e.nextMapCoord,r=e.mapCoord,i=u(e.stope?r:n,2),o=i[0],a=i[1];this.goToThePoint(t,o,a)}},{key:"goToThePoint",value:function(t,e,n){var r,i,o=u(this.nexMapCoord,2),a=o[0],s=o[1],c=this.changeType,l=u(this.mapCoordiante,2),f=l[0],y=l[1],d=a<e,p=s>n;if(c||(t=t.filter((function(t){return t.nc[0]!==f||t.nc[1]!==y}))),e===a)return(i=this.gorizontalPath(t,p,s,n)).length?this.setNewParamsMove(i[0].d,i[0].nc,this.nexMapCoord):this.hitTheWall(t,1,s);if(s===n)return(r=this.verticalPath(t,d,a,e)).length?this.setNewParamsMove(r[0].d,r[0].nc,this.nexMapCoord):this.hitTheWall(t,0,a);i=this.gorizontalPath(t,p,s,n),r=this.verticalPath(t,d,a,e);var v=[].concat(h(i),h(r));if(v.length){var m=v[Math.floor(Math.random()*v.length)];return this.setNewParamsMove(m.d,m.nc,this.nexMapCoord)}var g=t.filter((function(t){return t.nc[0]!==f||t.nc[1]!==y}));return this.setNewParamsMove(g[0].d,g[0].nc,this.nexMapCoord)}},{key:"hitTheWall",value:function(t,e,n){var r=this.filtrCurrentPlane(t,e,n),i=r[Math.floor(Math.random()*r.length)];return i?this.setNewParamsMove(i.d,i.nc,this.nexMapCoord):this.setNewParamsMove(t[0].d,t[0].nc,this.nexMapCoord)}},{key:"setNewParamsMove",value:function(t,e,n){this.mapCoordiante=n,this.nexMapCoord=e,this.direction=t}},{key:"checkElementPermeability",value:function(t){return"@"===t||"#"===t}},{key:"filtrCurrentPlane",value:function(t,e,n){return t.filter((function(t){return t.nc[e]===n}))}},{key:"verticalPath",value:function(t,e,n){return e?t.filter((function(t){var e=u(t.nc,1)[0];return n<e})):t.filter((function(t){var e=u(t.nc,1)[0];return n>e}))}},{key:"gorizontalPath",value:function(t,e,n){return e?t.filter((function(t){var e=u(t.nc,2)[1];return n>e})):t.filter((function(t){var e=u(t.nc,2)[1];return n<e}))}},{key:"touchPacman",value:function(){var t=u(this.coordinate,2),e=t[0],n=t[1],r=this.xSteep,i=this.ySteep,o=entities.pacman,a=o.x,s=o.y;e+i>s&&e<s+i&&n+r>a&&n<a+r&&(_configCanvas.game.play=!1)}},{key:"paintGhost",value:function(){var t=this.contextGame,e=u(this.coordinate,2),n=e[0],r=e[1],i=this.color,o=this.xSteep,a=this.ySteep;t.beginPath(),t.fillStyle=i;var s=o/8,h=a/5;t.moveTo(r+2,n+a/3),t.quadraticCurveTo(r+o/2,n,r+o-2,n+a/3),t.lineTo(r+o,n+a);for(var c=!1,l=1;l<=8;l++)t.lineTo(r+(o-s*l),n+a-(c?0:h)),c=!c;t.fill();var f=o/5;[1,-1].map((function(e){t.save(),t.fillStyle="#fff",t.beginPath(),t.translate(r+o/2+e*f,n+a/2),t.scale(1,1.3),t.arc(0,0,a/8,0,2*Math.PI),t.fill(),t.beginPath(),t.fillStyle="#000",t.arc(0,0,a/8/2,0,2*Math.PI),t.fill(),t.restore()}))}}])&&f(e.prototype,n),r&&f(e,r),t}());function x(t){return function(t){if(Array.isArray(t))return C(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return C(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var M=function(){function t(e,n,r,i,o,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.gameMap=i,this.c=r,this.entities=a,this.cg=o,this.xs=e,this.ys=n,this.cy=n/2,this.cx=e/2,this.dy=n/8,this.dx=e/8,this.ew=e/5,this.eh=n/5,this.exhs=e/2-this.ew/2,this.eyhs=n/2-this.eh/2,this.lineWidth=4,this.colorLine="#1b1bcd"}var e,n,r;return e=t,(n=[{key:"@",value:function(t,e,n,r){var i=this.c,o=this.ew,a=this.eh,s=this.exhs,h=this.eyhs;this.eatItem,i.fillStyle="#ffb8ae",i.fillRect(t+s,e+h,o,a)}},{key:"#",value:function(){}},{key:"X",value:function(){}},{key:"=",value:function(t,e){return this.rdl(t,e,!0)}},{key:"P",value:function(t,e,n,r){var i=this.cg,o=this.xs,a=this.ys,h=this.gameMap,u=this.c;this.entities.pacman=new s(i,o,a,t,e,n,r,h,u)}},{key:"║",value:function(t,e){return this.rdl(t,e,!1)}},{key:"╬",value:function(){return this.rda.apply(this,Array.prototype.slice.call(arguments).concat([!0]))}},{key:"╪",value:function(){return this.rda.apply(this,Array.prototype.slice.call(arguments).concat([!1]))}},{key:"┅",value:function(t,e){var n=this.c,r=this.cx,i=this.ys,o=this.lineWidth;n.strokeStyle="#ffb8ff",n.lineWidth=o,n.moveTo(t+r,e),n.lineTo(t+r,e+i)}},{key:"|",value:function(t,e){return this.rsl(t,e,!1)}},{key:"-",value:function(t,e){return this.rsl(t,e,!0)}},{key:"L",value:function(t,e){var n=this.xs,r=this.cx,i=this.cy;return this.rsa([t+r,e],[t+r,e+i,t+n,e+i])}},{key:"╕",value:function(t,e){var n=this.xs,r=this.ys,i=this.cx,o=this.cy,a=this.dx,s=this.dy;return this.rdla(t,e+o+s,t+i-a,e+o+s,t+i,e+r,t,e+o-s,e+o-s,t+n)}},{key:"╒",value:function(t,e){var n=this.xs,r=this.ys,i=this.cx,o=this.cy,a=this.dx,s=this.dy;return this.rdla(t+n,e+o+s,t+i+a,e+o+s,t+i,e+r,t,e+o-s,e+o-s,t+n)}},{key:"┏",value:function(t,e){var n=this.xs,r=this.ys,i=this.cx,o=this.cy;return this.rsa([t+i,e+r],[t+i,e+o,t+n,e+o])}},{key:"┛",value:function(t,e){this.xs,this.ys;var n=this.cx,r=this.cy;return this.rsa([t,e+r],[t+n,e+r,t+n,e])}},{key:"┓",value:function(t,e){this.xs;var n=this.ys,r=this.cx,i=this.cy;return this.rsa([t,e+i],[t+r,e+i,t+r,e+n])}},{key:"╓",value:function(t,e){var n=this.xs,r=this.ys,i=this.cx,o=this.cy,a=this.dx,s=this.dy;return this.rdla(t+i+a,e+r,t+i+s,e+o-s,t+n,e+o,t+i-a,e,e+r)}},{key:"╙",value:function(t,e){var n=this.xs,r=this.ys,i=this.cx,o=this.cy,a=this.dx,s=this.dy;return this.rdla(t+i+a,e,t+i+a,e+o+s,t+n,e+o,t+i-a,e,e+r)}},{key:"╜",value:function(t,e){this.xs;var n=this.ys,r=this.cx,i=this.cy,o=this.dx,a=this.dy;return this.rdla(t+r-o,e,t+r-a,e+i,t,e+i,t+r+o,e,e+n)}},{key:"╖",value:function(t,e){var n=this.xs,r=this.ys,i=this.cx,o=this.cy,a=this.dx,s=this.dy;return this.rdla(t+i-a,e+r,t+i-a,e+o-s,t,e+o,t+i+a,e,e+n)}},{key:"rdla",value:function(t,e,n,r,i,o,a,s,h,u){var c=this.c,l=this.colorLine,f=this.lineWidth;c.strokeStyle=l,c.lineWidth=f,c.moveTo(t,e),c.quadraticCurveTo(n,r,i,o),c.moveTo(a,s),c.lineTo(u||a,h)}},{key:"rsa",value:function(t,e){var n=this.c;n.moveTo.apply(n,x(t)),n.quadraticCurveTo.apply(n,x(e))}},{key:"rsl",value:function(t,e,n){var r=this.c,i=this.cy,o=this.cx,a=this.xs,s=this.ys,h=this.colorLine,u=this.lineWidth;r.strokeStyle=h,r.lineWidth=u,n?(r.moveTo(t,e+i),r.lineTo(t+a,e+i)):(r.moveTo(t+o,e),r.lineTo(t+o,e+s))}},{key:"rda",value:function(t,e,n,r,i){var o=this.xs,a=this.ys,s=this.cx,h=this.cy,u=this.dy,c=this.dx,l=this.c,f=this.gameMap,y=this.colorLine,d=this.lineWidth,p=[];l.strokeStyle=y,l.lineWidth=d,n+1==f.length||"="!==f[n+1][r]&&"║"!==f[n+1][r]||p.push([t+s,e+a]),0==n||"="!==f[n-1][r]&&"║"!==f[n-1][r]||p.push([t+s,e]),r+1==f[n].length||"="!==f[n][r+1]&&"║"!==f[n][r+1]||p.push([t+o,e+h]),0==r||"="!==f[n][r-1]&&"║"!==f[n][r-1]||p.push([t,e+h]);var v=p[0],m=p[1],g=v[0],b=v[1],x=m[0],C=m[1],w=g<x?C>b?-1:1:C>b?1:-1,M=g<x?-1:1;[-1,1].map((function(t){l.moveTo(g+c*t,b),i?l.quadraticCurveTo(x+s*M+c*t,C+u*t*w,x,C+u*t*w):(l.lineTo(x+s*M+c*t,C+u*t*w),l.lineTo(x,C+u*t*w))}))}},{key:"rdl",value:function(t,e,n){var r=this.c,i=this.cy,o=this.cx,a=this.dx,s=this.dy,h=this.xs,u=this.ys,c=this.colorLine,l=this.lineWidth;r.strokeStyle=c,r.lineWidth=l,n?(r.moveTo(t,e+i-s),r.lineTo(t+h,e+i-s),r.moveTo(t,e+i+s),r.lineTo(t+h,e+i+s),r.stroke()):(r.moveTo(t+o-a,e),r.lineTo(t+o-a,e+u),r.moveTo(t+o+a,e),r.lineTo(t+o+a,e+u),r.stroke())}}])&&w(e.prototype,n),r&&w(e,r),t}();function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var P=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.size=e,this.gm=n}var e,n,r;return e=t,(n=[{key:"setSize",value:function(){for(var t=this.gm,e=this.size,n=Math.floor(e/t[0].length),r=Math.floor(e/t.length),i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return o.map((function(e){e.width=n*t[0].length,e.height=r*t.length})),[n,r]}}])&&k(e.prototype,n),r&&k(e,r),t}();function T(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return S(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}!function(){var t=document.getElementById("map");window.entities={pacman:{}};var e,n,r,i=document.getElementById("game"),o=window.innerWidth>window.innerHeight?window.innerHeight-15:window.innerWidth-15,a=t.getContext("2d"),s=i.getContext("2d"),h=[["╬","=","=","=","=","=","=","=","=","=","=","=","=","╕","╒","=","=","=","=","=","=","=","=","=","=","=","=","╬"],["║","@","@","@","@","@","@","@","@","@","@","@","@","|","|","@","@","@","@","@","@","@","@","@","@","@","@","║"],["║","@","┏","-","-","┓","@","┏","-","-","-","┓","@","|","|","@","┏","-","-","-","┓","@","┏","-","-","┓","@","║"],["║","@","|","#","#","|","@","|","#","#","#","|","@","|","|","@","|","#","#","#","|","@","|","#","#","|","@","║"],["║","@","L","-","-","┛","@","L","-","-","-","┛","@","L","┛","@","L","-","-","-","┛","@","L","-","-","┛","@","║"],["║","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","║"],["║","@","┏","-","-","┓","@","┏","┓","@","┏","-","-","-","-","-","-","┓","@","┏","┓","@","┏","-","-","┓","@","║"],["║","@","L","-","-","┛","@","|","|","@","L","-","-","┓","┏","-","-","┛","@","|","|","@","L","-","-","┛","@","║"],["║","@","@","@","@","@","@","|","|","@","@","@","@","|","|","@","@","@","@","|","|","@","@","@","@","@","@","║"],["╬","=","=","=","=","╬","@","|","L","-","-","┓","@","|","|","@","┏","-","-","┛","|","@","╬","=","=","=","=","╬"],["#","#","#","#","#","║","@","|","┏","-","-","┛","@","L","┛","@","L","-","-","┓","|","@","║","#","#","#","#","#"],["#","#","#","#","#","║","@","|","|","@","@","@","@","@","@","@","@","@","@","|","|","@","║","#","#","#","#","#"],["#","#","#","#","#","║","@","|","|","@","╪","=","=","=","=","=","=","╪","@","|","|","@","║","#","#","#","#","#"],["=","=","=","=","=","╬","@","L","┛","@","║","#","#","#","#","#","#","║","@","L","┛","@","╬","=","=","=","=","="],["X","#","#","#","#","#","@","@","@","@","┅","#","#","#","#","#","#","║","@","@","@","@","#","#","#","#","#","X"],["=","=","=","=","=","╬","@","┏","┓","@","║","#","#","#","#","#","#","║","@","┏","┓","@","╬","=","=","=","=","="],["#","#","#","#","#","║","@","|","|","@","╪","=","=","=","=","=","=","╪","@","|","|","@","║","#","#","#","#","#"],["#","#","#","#","#","║","@","|","|","@","@","@","@","@","@","@","@","@","@","|","|","@","║","#","#","#","#","#"],["#","#","#","#","#","║","@","|","|","@","┏","-","-","-","-","-","-","┓","@","|","|","@","║","#","#","#","#","#"],["╬","=","=","=","=","╬","@","L","┛","@","L","-","-","┓","┏","-","-","┛","@","L","┛","@","╬","=","=","=","=","╬"],["║","@","@","@","@","@","@","@","@","@","@","@","@","|","|","@","@","@","@","@","@","@","@","@","@","@","@","║"],["║","@","┏","-","-","┓","@","┏","-","-","-","┓","@","|","|","@","┏","-","-","-","┓","@","┏","-","-","┓","@","║"],["║","@","L","-","┓","|","@","L","-","-","-","┛","@","L","┛","@","L","-","-","-","┛","@","|","┏","-","┛","@","║"],["║","@","@","@","|","|","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","@","|","|","@","@","@","║"],["╙","-","┓","@","|","|","@","┏","┓","@","┏","-","-","-","-","-","-","┓","@","┏","┓","@","|","|","@","┏","-","╜"],["╓","-","┛","@","L","┛","@","|","|","@","L","-","-","┓","┏","-","-","┛","@","|","|","@","L","┛","@","L","-","╖"],["║","@","@","@","@","@","@","|","|","@","@","@","@","|","|","@","@","@","@","|","|","@","@","@","@","@","@","║"],["║","@","┏","-","-","-","-","┛","L","-","-","┓","@","|","|","@","┏","-","-","┛","L","-","-","-","-","┓","@","║"],["║","@","L","-","-","-","-","-","-","-","-","┛","@","L","┛","@","L","-","-","-","-","-","-","-","-","┛","@","║"],["║","@","@","@","@","@","@","@","@","@","@","@","@","P","@","@","@","@","@","@","@","@","@","@","@","@","@","║"],["╬","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","=","╬"]],u=T(new P(o,h).setSize(t,i),2),c=u[0],l=u[1],f=new M(c,l,a,h,s,entities);function y(){var t=entities,e=t.pacman,n=t.shadow;_configCanvas.game.play&&(e.renderPacMan(),n.render(),requestAnimationFrame(y))}h.map((function(t,e){t.map((function(t,n){a.beginPath(),f[t](c*n,l*e,e,n),a.stroke()}))})),e=T(_configCanvas.ghostPosition.shadow,2),n=e[0],r=e[1],entities.shadow=new b(s,c,l,h,c*r,l*n,n,r),y()}()}]);