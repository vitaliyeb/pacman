import CreateMap from './map';
import RenderMapElements from './mapElement';
import Helper from './helper';

(() => {
    let canvasMap = document.getElementById('map');
    let entities = {
        pacman: {}
    };
    let canvasGame = document.getElementById('game');
    let size = window.innerWidth >  window.innerHeight ? window.innerHeight - 15 : window.innerWidth - 15;
    let mapContext = canvasMap.getContext('2d');
    let gameContext = canvasGame.getContext('2d');
    let gameMap = CreateMap();
    let helper = new Helper(size, gameMap);
    let [xs, ys] =  helper.setSize(canvasMap, canvasGame);
    let renderMapElements = new RenderMapElements(xs, ys, mapContext, gameMap, gameContext, entities);

    function renderMap() {
        gameMap.map((row, ir) => {
            row.map((col, ic) => {
                // mapContext.beginPath();
                // mapContext.lineWidth = 1;
                // mapContext.rect(xs * ic, ys * ir, xs, ys);
                // mapContext.stroke();

                
                mapContext.beginPath();
                renderMapElements[col](xs * ic, ys * ir, ir, ic) 
                mapContext.stroke();
            });
        });
    }
    
    function loop() {
        let { pacman, shadow } = entities;
        pacman.renderPacMan();
        shadow.render();

        requestAnimationFrame(loop);
    }

    function init() {
        renderMap();
        loop();
    }

    init();
})()









var time = 0;
var data = [];
var st = setInterval( ()=>{
    time +=1;
    window.scrollBy( 0, 1000);
    if(time === 15) return getFullFriends();
}, 500)



getFullFriends();

async function getFullFriends() {
    let data = Array.from(document.querySelectorAll('.friends_field.friends_field_title > a')).map((el)=>{
        return {
            name: el.innerHTML,
            link: el.href
        }
    });

    new Promise((res)=>openMsg(res))
        .then(()=> openDialog())

}

function openMsg(resolve) {
    let cu = location.href;
    obsUrl(cu, resolve)
    document.querySelector('#l_msg > a').click();

}

async function openDialog(){
    let allD = document.querySelectorAll('._im_dialog_link');
    let i = Array.from(allD).find(el => el.textContent.trim() === 'Виталик Бурдин');
    console.log(i)
    i.click();
}

function obsUrl(cu, resolve){
    let id;
    function t(){
        if (location.href !== cu){
            resolve();
            return cancelAnimationFrame(id);

        }
        id = requestAnimationFrame(t);
    }
    t();
}