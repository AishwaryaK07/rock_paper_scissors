const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () =>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        
        playBtn.addEventListener('click', ()=> {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
    //Play Match
    const playMatch= () =>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });
        //Computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option=>{
            option.addEventListener('click', function(){
                //comp choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    compareHands(this.textContent, computerChoice);
                //update images
                playerHand.src = `./assests/${this.textContent}.png`;
                computerHand.src = `./assests/${computerChoice}.png`;
                }, 2000);

                //animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
        
    };

        const compareHands =(playerChoice, computerChoice) => {
            //Update text
            const winner = document.querySelector('.winner');
            if(playerChoice === computerChoice){
                winner.textContent = 'It is a tie!';
                return;
            }
            if(playerChoice === 'rock'){
                if(computerChoice === 'scissors'){
                    winner.textContent = 'Player wins';
                    pScore++;
                    updateScore();
                    return;
                }
                else{
                    winner.textContent = 'Computer wins';
                    cScore++;
                    updateScore();
                    return;
                }
            }
            if(playerChoice === 'paper'){
                if(computerChoice === 'scissors'){
                    winner.textContent = 'Computer wins';
                    cScore++;
                    updateScore();
                    return;
                }
                else{
                    winner.textContent = 'Player wins';
                    pScore++;
                    updateScore();
                    return;
                }
            }
            if(playerChoice === 'scissors'){
                if(computerChoice === 'rock'){
                    winner.textContent = 'Computer wins';
                    cScore++;
                    updateScore();
                    return;
                }
                else{
                    winner.textContent = 'Player wins';
                    pScore++;
                    updateScore();
                    return;
                }
            }
        };
        

    //is to call all the inner function
    startGame();
    playMatch();
};

//start the game function
game();
