const iconWidth = 80;
const iconHeight = 80;
const numberOfIcons = 9;
const indexes = [0,0,0];
const speed = 100;

const rollBtn = document.getElementById("rollBtn");


function roll (reel, offset = 0) {
    const randomiser = Math.round(Math.random() * numberOfIcons)
    const delta = (offset + 2) * numberOfIcons + randomiser;
    const style = getComputedStyle(reel)
    const backgroundPos = parseFloat(style["background-position-y"]);

    reel.style.transition = `background-position-y ${8 + delta * speed}`;
    reel.style.backgroundPos = `${backgroundPos + delta * speed}px`;
};


rollBtn.addEventListener('click', () => {
    const reelList = document.querySelectorAll('.slots > .reel');
    [...reelList].map((reel, i) => {
        console.log(reel);
        roll(reel,i)
    });

    console.log(reelList);
})
