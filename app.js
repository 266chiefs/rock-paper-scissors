const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    const startGame = () => {
        const playButton = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");
        
        playButton.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
};

    const playMatch = () => {
        const choices = document.querySelector(".choices button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        const computerOptions = ["rock, paper, scissors"];
    
        choices.forEach(options => {
            choices.addEventListener("click", function() {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions [computerNumber];

                compareHands(this.textContent, computerChoice);

            playerHand.src = `${this.textContent}.png`
            copmuterHand.src = `${this.copmuterChoice}.png`
            });
        });
    };
};

    const compareHands = (playerChoice, computerChoice) = () => {
    const message = document.querySelector(".message")
    
    if(playerChoice === computerChoice)
        message.textContent = "TIE";
        return;
    }
    if(playerChoice === "rock"){
        if(computerChoice === "scissors"){
            message.textContent = "PLAYER WINS"
            return;
        } else {
            message.textContent = "COMPUTER WINS"
            return;
        }
    }
    if(playerChoice === "paper"){
        if(computerChoice === "scissors"){
            message.textContent = "PLAYER WINS";
            return;
        }else{
            message.textContent = "COMPUTER WINS";
            return;
        }
    }
    if(playerChoice === "scissors"){
        if(computerChoice === "paper"){
            message.textContent = "PLAYER WINS"
            return;
        } else {
            message.textContent = "COMPUTER WINS"
            return;
        };
    };
};

game()