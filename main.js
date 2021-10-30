// button
const nextLevel = document.querySelector('.next-level');

// levels
const levelOne = document.querySelector('.level-one');
const levelTwo = document.querySelector('.level-two');

// ui 
const uiLevel = document.querySelector('.ui-level');
const uiMessage = document.querySelector('.ui-message');

// end game
const picture = document.querySelector('.picture');
const sound = document.querySelector('.sound');

// checks position of mouse
const collisionCheck = (position) =>
{
    if (position === 'border') alert('you lost bruh.');
    if (position === 'finish')
    {
        nextLevel.style.opacity = 1;
        nextLevel.style.pointerEvents = 'all';
        levelOne.style.pointerEvents = 'none';
    }
    if (position === 'end-game')
    {
        sound.play(); // this triggers the sound
        picture.style.display = 'block'; // displays the picture
        document.body.style.background = 'black';
        console.log('did u get scared?');
    }
}

// actively calls check function
window.addEventListener('mousemove', (e) =>
{
    let checkPosition = e.target.classList.value;
    console.log(checkPosition);
    collisionCheck(checkPosition);
});

// button click functionality
nextLevel.addEventListener('click', () =>
{
    levelOne.style.display = 'none';
    levelTwo.style.display = 'block';
    nextLevel.style.opacity = 0;
    nextLevel.style.pointerEvents = 'none';
    uiLevel.textContent = 'Level 2';
    uiMessage.textContent = 'one more to go...';
})


