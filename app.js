const game = () => {
    let pScore = 0;
    let cScore = 0;

    //start game fade in / fade out
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

            //calling compare hands function
            compareHands(this.textContent, computerChoice)
            
            //updating images
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoice}.png`;
            });
        });
    }; 

    const introUpdateMessage = () => {
        const message = document.querySelector(".intro h2");
        const messageOptions = [
            "It's meat puppet master theatre!", 
            "Holy sh*T where are we!?", 
            "GET OVER HERE",
            "intro m4",
            "intro m5",
            "m6",
            "m7",
            "m8",
            "m9",
            "m10",
        ];
        const messageNumber = Math.floor(Math.random() * 10);
        const messageChoice = messageOptions[messageNumber];

        message.textContent = messageChoice;
    }

    const tieUpdateMessage = () => {
        const message = document.querySelector(".message");
        const messageOptions = [
            "NO WAY", 
            "you fool", 
            "you suck",
            "you lucky fuck",
            "WHAT",
            "YOU ARE JOKING",
            "eh hello?",
            "huh",
            "i mean wtf",
            "HELLLLOOO",
        ];
        const messageNumber = Math.floor(Math.random() * 10);
        const messageChoice = messageOptions[messageNumber];

        message.textContent = messageChoice;
    }

    const computerWinsMessage = () => {
        const message = document.querySelector(".message");
        const messageOptions = [
            "We all make mistakes from time to time, and you made one just now.", 
            "brrrrrrr", 
            "brrrrrrr",
            "brrrrrrr",
            "brrrrrrr",
            "brrrrrrr",
            "brrrrrrr",
            "brrrrrrr",
            "brrrrrrr",
            "brrrrrrr",
        ];
        const messageNumber = Math.floor(Math.random() * 10);
        const messageChoice = messageOptions[messageNumber];

        message.textContent = messageChoice;
    }

    const playerWinsMessage = () => {
        const message = document.querySelector(".message");
        const messageOptions = [
            "You should've aimed for the head",
            "skrrrrrrr", 
            "skrrrrrrr",
            "skrrrrrrr",
            "skrrrrrrr",
            "skrrrrrrr",
            "skrrrrrrr",
            "skrrrrrrr",
            "skrrrrrrr",
            "skrrrrrrr",
        ];
        const messageNumber = Math.floor(Math.random() * 10);
        const messageChoice = messageOptions[messageNumber];

        message.textContent = messageChoice;
    }

    const updateScore = () => {
        const playerScore = document.querySelector (".player-score p");
        const computerScore = document.querySelector (".computer-score p");

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        const message = document.querySelector(".message")
         if(playerChoice === computerChoice){
            tieUpdateMessage()
            //message.textContent = "tie";
            return;
        }
        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                //message.textContent = "you win";
                playerWinsMessage();
                pScore++;
                updateScore();
                return;
            }else{
                //message.textContent = "boss wins";
                computerWinsMessage();
                cScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === "paper"){
            if(computerChoice === "rock"){
                //message.textContent = "you win";
                playerWinsMessage();
                pScore++;
                updateScore();
                return;
            }else{
                //message.textContent = "boss wins";
                computerWinsMessage();
                cScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === "scissors"){
            if(computerChoice === "paper"){
                //message.textContent = "you win";
                playerWinsMessage();
                pScore++;
                updateScore();
                return;
            }else{
                //message.textContent = "boss wins";
                computerWinsMessage();
                cScore++;
                updateScore();
                return;
            };
        };    
    } 
    introUpdateMessage();
    startGame();
    playMatch();

};
game();


