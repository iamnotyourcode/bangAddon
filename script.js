let deck = [];
let deckSize = 17;

function createDeck() {
  deck = [];
  for (let i = 1; i <= deckSize; i++) {
    deck.push(`${i}.png`);
  }
}

function shuffleDeck() {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

// function drawCard() {
//   if (deck.length === 1) {
//     // Если осталась последняя карта
//     document.getElementById("deck").style.visibility = "hidden"; // Скрываем рубашку
//   }
//   if (deck.length > 0) {
//     const cardImageName = deck.pop();
//     displayCard(cardImageName);
//   }
// }
function drawCard() {
  if (deck.length > 0) {
    const cardImageName = deck.pop();
    displayCard(cardImageName);
  } else {
    resetGame(); // Автоматический сброс игры, если в колоде не осталось карт
  }
}

function displayCard(cardImageName) {
  const deckElement = document.getElementById("deck");
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.style.backgroundImage = `url('img/${cardImageName}')`;
  cardElement.style.position = "absolute"; // Абсолютное позиционирование
  cardElement.style.top = "0"; // Размещаем карту поверх колоды
  cardElement.style.left = "0"; // Можно добавить смещение, если нужно
  deckElement.appendChild(cardElement);

  /**
   * function displayCard(cardImageName) {
  // Предполагаем, что #deck уже имеет position: relative в CSS
  
}
  const openCardsContainer = document.getElementById("openCards");
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.style.backgroundImage = `url('img/${cardImageName}')`;
  openCardsContainer.appendChild(cardElement);

  if (deck.length === 0) {
    // Если это была последняя карта
    cardElement.addEventListener("clic
   */
}

// function resetGame() {
//   document.getElementById("openCards").innerHTML = "";
//   document.getElementById("deck").style.visibility = "visible"; // Показываем рубашку снова
//   createDeck();
//   shuffleDeck();
// }
function resetGame() {
  const deckElement = document.getElementById("deck");
  deckElement.innerHTML = ""; // Очистить колоду от карт
  createDeck();
  shuffleDeck();
  // После сброса колоды устанавливаем изображение рубашки снова
  deckElement.style.backgroundImage = "url('img/back.png')";
}

document.getElementById("deck").style.backgroundImage = "url('img/back.png')";
document.getElementById("deck").addEventListener("click", drawCard);

resetGame();
