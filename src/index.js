import {
    makeMove,
    switchxy
} from './switchPlayer';
import checkIfWon from './checkWinner';
import createGameBoard from './gameBoard';
require('./main.scss');


// make turns switch between X and O
document.turn = 'X';

// iterate over each square calling makeMove fucnction
var boxes = document.getElementsByClassName('rocks');
for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', makeMove);

}

// Check for winner every seconds
var myVar = setInterval(function () {
    checkIfWon();
}, 1000);