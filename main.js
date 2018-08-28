window.addEventListener('load', init);
// Globals

// Available Levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 1
};

// To change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'ace',
  'amazing',
  'astonishing',
  'astounding',
  'awe-inspiring',
  'awesome',
  'badass',
  'beautiful',
  'bedazzling',
  "bee's knees",
  'best',
  'breathtaking',
  'brilliant',
  "cat's meow",
  "cat's pajamas",
  'classy',
  'cool',
  'dandy',
  'dazzling',
  'delightful',
  'divine',
  'doozie',
  'epic',
  'excellent',
  'exceptional',
  'exquisite',
  'extraordinary',
  'fabulous',
  'fantastic',
  'fantabulous',
  'fine',
  'finest',
  'first-class',
  'first-rate',
  'flawless',
  'funkadelic',
  'geometric',
  'glorious',
  'gnarly',
  'good',
  'grand',
  'great',
  'groovy',
  'groundbreaking',
  'hunky-dory',
  'impeccable',
  'impressive',
  'incredible',
  'kickass',
  'kryptonian',
  'laudable',
  'legendary',
  'lovely',
  'luminous',
  'magnificent',
  'majestic',
  'marvelous',
  'mathematical',
  'mind-blowing',
  'neat',
  'outstanding',
  'peachy',
  'perfect',
  'phenomenal',
  'pioneering',
  'polished',
  'posh',
  'praiseworthy',
  'premium',
  'priceless',
  'prime',
  'primo',
  'rad',
  'remarkable',
  'riveting',
  'scrumtrulescent',
  'sensational',
  'shining',
  'slick',
  'smashing',
  'solid',
  'spectacular',
  'splendid',
  'splendiferous',
  'stellar',
  'striking',
  'stunning',
  'stupendous',
  'stylish',
  'sublime',
  'super',
  'super-duper',
  'super-excellent',
  'superb',
  'superior',
  'supreme',
  'sweet',
  'swell',
  'terrific',
  'tiptop',
  'top-notch',
  'transcendent',
  'tremendous',
  'ultimate',
  'unreal',
  'well-made',
  'wicked',
  'wonderful',
  'wondrous',
  'world-class'
];

//
/* fetch(
  'https://raw.githubusercontent.com/words/an-array-of-english-words/master/words.json'
)
  .then(response => response.json())
  .then(data => {
    const result = [];
    for (let i = 0; i < data.length; i++) {
      result.push(data[i]);
    }
    resul
    return result;
  })
  .catch(err => console.log(err));

console.log(result[1]); */

// Initialize Game
function init() {
  // Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start maching on word input
  wordInput.addEventListener('input', startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 15);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Pick and show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output the random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = 0;
  }
}
