const game = () => {
    let pScore = 0;
    let cScore = 0;

    //start game
    const startGame = () => {
        const playButton = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");
        
        playButton.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //play match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        const computerOptions = ["rock", "paper", "scissors"];
    
        options.forEach(options => {
            options.addEventListener("click", function() {

                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

            //calling compare hands
            compareHands(this.textContent, computerChoice)
            
            //updating images
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoice}.png`;
            });
        });
    }; 

    const updateScore = () => {
        const playerScore = document.querySelector (".player-score p");
        const computerScore = document.querySelector (".computer-score p");

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        const message = document.querySelector(".message")
         if(playerChoice === computerChoice){
            message.textContent = "tie";
            return;
        }
        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                message.textContent = "you win";
                pScore++;
                updateScore();
                return;
            }else{
                message.textContent = "boss wins";
                cScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === "paper"){
            if(computerChoice === "scissors"){
                message.textContent = "you win";
                pScore++;
                updateScore();
                return;
            }else{
                message.textContent = "boss wins";
                cScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === "scissors"){
            if(computerChoice === "paper"){
                message.textContent = "you win";
                pScore++;
                updateScore();
                return;
            }else{
                message.textContent = "boss wins";
                cScore++;
                updateScore();
                return;
            };
        };
    }
    startGame();
    playMatch();
};
game();


