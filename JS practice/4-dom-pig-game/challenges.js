/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var score, roundScore, activePlayer,gamePlaying;
//var lastDice;
init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if(gamePlaying){
        
          // 1. Random Number
    
            var dice = Math.floor(Math.random() * 6) + 1;
            var diceNew = Math.floor(Math.random() * 6) + 1;

        // 2. Display the Result
            var diceDOM = document.querySelector('.dice-0');
            var diceDOMnew = document.querySelector('.dice-1');
        
            diceDOM.style.display = 'block';
            diceDOMnew.style.display = 'block';
        
            diceDOM.src = 'dice-'+ dice +'.png';
            diceDOMnew.src = 'dice-'+ diceNew +'.png'
            
        
        // 3. Update the Round Score IF the rolled number was NOT 1 
            
           /* if(dice ===6 && lastDice === 6)
                {
                    //player loses score
                    scores[activePlayer] = 0;
                    document.querySelector('#score-'+activePlayer).textContent ='0';
                    nextPlayer();
                }
*/        
            if (dice !== 1 && diceNew !== 1)
                {
                    //Add score
                    var totDice = dice + diceNew;
                    roundScore += totDice;
                    document.querySelector('#current-'+activePlayer).textContent = roundScore;
                }
            else
                {
                   nextPlayer();    
                }
        //lastDice = dice;
    }
    
  });

document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if(gamePlaying){            
        
         //Add Current score in the globel score
        scores[activePlayer] += roundScore;

        //Update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; 

        // check if player won the game
       
       // document.getElementById('win-score').textContent = winScore;
        var winScore = document.querySelector('.win-score').value;
        var finalScore;
        
        if(winScore){
            finalScore  = winScore ;
        }else{
            finalScore = 100;
        }

        if(scores[activePlayer] >= finalScore)
           {
                document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
                document.querySelector('.dice-0').style.display = 'none';
                document.querySelector('.dice-1').style.display = 'none';
               document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
               document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
               gamePlaying = false;
           }
        else{
            //next player
        nextPlayer();
        }
    }
   
    
});


function nextPlayer()
{
    activePlayer === 0 ? activePlayer =1 : activePlayer = 0;
                roundScore = 0;
                
                document.getElementById('current-0').textContent = '0';
                document.getElementById('current-0').textContent = '0';
                
                document.querySelector('.player-0-panel').classList.toggle('active');
                document.querySelector('.player-1-panel').classList.toggle('active');
                
                document.querySelector('.dice-0').style.display = 'none';
                document.querySelector('.dice-1').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click',init);

function init()
{
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    
    gamePlaying = true;
    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
//document.querySelector('#current-'+activePlayer).textContent = dice;

//var x = document.querySelector('#score-0').textContent;
//console.log(x);