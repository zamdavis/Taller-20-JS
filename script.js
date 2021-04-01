/* var randomNumber = 50; Variable global puede ser accedida de diferentes lugares del codigo.*/ 
 let randomNumber = Math.floor(Math.random()*100)+1; /* Let=Variable local puede ser accedida solo en la seccion del codigo done la creo. (Math.floor(Math.random()*100)+1;)=Numero entero aleatorio entre 1 y 100, ya que math.random solo da un numero etre 0 y 1. el math.floor redondea. y el+1 incluye el 100*/ 
/*const randomNumber = 50; Variable constante*/ 
const guesses = document.querySelector('.guesses'); /*Va al HTML busca un elemento que tenga la clase guesses, de esta forma guarda en el JS la referencia de ese campo permitiendo manejar el elemento, cambiar propiedades y elementos.*/
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess(){
    let userGuess= Number(guessField.value); /*Al poner Number() se maneja como numero*/
    if(guessCount === 1){ /*Al usar 2 iguales se compara solo el contenido al usar 3 se compara el contenido y tipo (caracter, entero, etc..)*/ 
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent+= userGuess + ''; /*El += siginifica i.e: x=x+y (x+=y)*/
    if(userGuess === randomNumber) { /*Si gano*/ 
        lastResult.textContent = 'Congratulations! You got it!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = 'Game Over :(';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Guess too low...'
    } else {
      lowOrHi.textContent = 'Guess too high...'
    }
  }

  guessCount ++;
  guessField.value = '';
  guessField.focus();
}

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  const allPs = document.querySelectorAll('.resultParas p');
  for (let i = 0; i < allPs.length; i ++) {
    allPs[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}

guessSubmit.addEventListener('click', checkGuess);