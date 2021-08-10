'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// const playerActive = document.querySelector('.player--active');


// starting conditions
let scores, playing, activePlayer, currentScore
const init = function(){
     scores = [0, 0];
     playing = true;
     activePlayer = 0;
     currentScore = 0;
    // restart scores
    score1El.textContent = 0;
    score0El.textContent = 0;
    // restart current score
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;
    // winner background color remove
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    // dice appear
    diceEl.classList.add('hidden');
}

init();


const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}


// Rolling btn 

btnRoll.addEventListener('click', function(){
    if(playing){
        // 1. randomiser le dé
    const dice = Math.trunc(Math.random() *6) + 1;
    console.log(dice);

    // 2. display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. check rolled 1
    if(dice !== 1){
        currentScore = currentScore + dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        // currentScore0El.textContent = currentScore;
    }else{
        // switch player
        switchPlayer();    
    }
    }
})

btnHold.addEventListener('click', function(){
    if(playing){
        // add active player score to current score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // check if player score >= 100
        if(scores[activePlayer] >= 20){
        // finish the game
        diceEl.classList.add('hidden');
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }else{
        // switch player
        switchPlayer();
        }
    }

})

btnNew.addEventListener('click', function(){
    init()
});
    
// window.onload = init();

    


   

