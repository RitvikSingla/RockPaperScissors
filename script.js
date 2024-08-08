let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let result = document.querySelector("#result");

const userScorePara = document.querySelector("#you");
let compScorePara = document.querySelector("#computer");

let genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

let drawGame = () => {
  result.innerText = "Game was Draw. Play again.";
  // result.style.backgroundColor = "#081b31";
};

let showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    result.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    // result.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    result.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    // result.style.backgroundColor = "red";
  }
};

let playGame = (userChoice) => {
  //Generate computer choice
  let compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});