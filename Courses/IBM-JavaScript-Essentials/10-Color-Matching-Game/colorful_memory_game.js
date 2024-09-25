// colors array: This array holds distinct color values in strings, representing the colors for the cards in the memory match game. These colors create pairs for the game.

// cards array: Initialized by shuffling and attaching the 'colors' array, this 'cards' array holds the color values for the cards in the game. The shuffle function employs the Fisher-Yates algorithm to randomize the order of the colors and then duplicates these colors to create pairs, forming the set of cards for gameplay.

// selectedCards: This variable acts as a temporary storage for the currently selected cards during the game. When a player clicks on a card, it gets added to this array to enable match comparisons.

// score: This variable tracks the player's score throughout the game. The score gets incremented whenever the player matches a pair of cards successfully. It's updated and displayed to reflect the player's progress and performance.

// timeLeft: It represents the time remaining for the player to complete the game. Initially set to a specific duration, it counts down as the game progresses. When it reaches zero, the game ends.

// gameInterval: This variable manages the game timer. It's utilized to control the countdown mechanism for the game's duration. The interval continuously decrements the 'timeLeft' variable, updating the displayed time and triggering the game's end when the time expires.
const colors = [
  "red",
  "blue",
  "green",
  "purple",
  "orange",
  "pink",
  "red",
  "blue",
  "green",
  "purple",
  "orange",
  "pink",
];
let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;

const startbtn = document.getElementById("startbtn");
const gameContainer = document.getElementById("game-container");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");

// Create the generateCards() function responsible for dynamically creating the card elements within the game container based on the 'cards' array that holds color values for the cards. This function creates the card elements dynamically within the game-container div. Include given code in javaScript file after previous code.
function generateCards() {
  // It utilizes a 'for…of' loop to iterate over each element (color) in the 'cards' array. For each color in the 'cards' array:
  for (const color of cards) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.color = color;
    card.textContent = "?";
    gameContainer.appendChild(card);
  }
}

// The shuffle() Function is responsible for shuffling the elements of an array in random order. It uses the Fisher-Yates shuffle algorithm, a common method for randomizing the order of elements in an array. Include given code after generateCards() function.
function shuffle(array) {
  // Shuffling process using loop through the array: The function starts by initiating a 'for' loop that iterates backward through the array starting from the last index (let i = array.length - 1; i > 0; i–).
  for (let i = array.length - 1; i > 0; i--) {
    // Within each iteration, it generates a random index 'j'
    const j = Math.floor(Math.random() * (i + 1));

    // Swapping elements: It then swaps the elements at the 'i' and 'j' indices using array destructuring assignment: [array[i], array[j]] = [array[j], array[i]]. This line efficiently swaps the values at positions 'i' and 'j' without requiring a temporary variable.
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// The handleCardClick(event) function manages the logic when a user clicks the card in the memory match game. Include given code after shuffle() function. Let's break down each step within this function:
function handleCardClick(event) {
  const card = event.target;
  if (!card.classList.contains("card") || card.classList.contains("matched")) {
    return;
  }
  card.textContent = card.dataset.color;
  card.style.backgroundColor = card.dataset.color;
  selectedCards.push(card);
  if (selectedCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  const [card1, card2] = selectedCards;
  if (card1.dataset.color === card2.dataset.color) {
    card1.classList.add("matched");
    card2.classList.add("matched");
    score += 2;
    scoreElement.textContent = `Score: ${score}`;
  } else {
    card1.textContent = "?";
    card2.textContent = "?";
    card1.style.backgroundColor = "#ddd";
    card2.style.backgroundColor = "#ddd";
  }
  selectedCards = [];
}

function startGame() {
  let timeLeft = 30;
  startbtn.disabled = true;
  score = 0; // Reset score to zero
  scoreElement.textContent = `Score: ${score}`;
  startGameTimer(timeLeft);
  cards = shuffle(colors.concat(colors));
  selectedCards = [];
  gameContainer.innerHTML = "";
  generateCards();
  gameContainer.addEventListener("click", handleCardClick);
}

function startGameTimer(timeLeft) {
  timerElement.textContent = `Time Left: ${timeLeft}`;
  gameInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `Time Left: ${timeLeft}`;

    if (timeLeft === 0) {
      clearInterval(gameInterval);
      let timeLeft = 30;
      alert("Game Over!");
      startbtn.disabled = false;
    }
  }, 1000);
}

startbtn.addEventListener("click", startGame);
