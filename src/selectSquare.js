// Add move to actual gameboard



function makeMove() {

  switchxy();
  if (checkIfWon() == true) {
    window.location.reload();
  } else
  if (this.innerHTML == '') {
    this.innerHTML = document.turn;
  } else {
    alert('already chosen');
  }
}