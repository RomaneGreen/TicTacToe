export default (function checkIfWon() {

  var r0 = document.getElementById("rocky0");
  var r1 = document.getElementById("rocky1");
  var r2 = document.getElementById("rocky2");
  var r3 = document.getElementById("rocky3");
  var r4 = document.getElementById("rocky4");
  var r5 = document.getElementById("rocky5");
  var r6 = document.getElementById("rocky6");
  var r7 = document.getElementById("rocky7");
  var r8 = document.getElementById("rocky8");

  if (r0.innerHTML == 'X' && r1.innerHTML == 'X' && r2.innerHTML == 'X' ||
    r0.innerHTML == 'O' && r1.innerHTML == 'O' && r2.innerHTML == 'O' ||
    r3.innerHTML == 'X' && r4.innerHTML == 'X' && r5.innerHTML == 'X' ||
    r3.innerHTML == 'O' && r4.innerHTML == 'O' && r5.innerHTML == 'O' ||
    r6.innerHTML == 'X' && r7.innerHTML == 'X' && r8.innerHTML == 'X' ||
    r6.innerHTML == 'O' && r7.innerHTML == 'O' && r8.innerHTML == 'O' ||
    r0.innerHTML == 'X' && r3.innerHTML == 'X' && r6.innerHTML == 'X' ||
    r0.innerHTML == 'O' && r3.innerHTML == 'O' && r6.innerHTML == 'O' ||
    r1.innerHTML == 'X' && r4.innerHTML == 'X' && r7.innerHTML == 'X' ||
    r1.innerHTML == 'O' && r4.innerHTML == 'O' && r7.innerHTML == 'O' ||
    r2.innerHTML == 'X' && r5.innerHTML == 'X' && r8.innerHTML == 'X' ||
    r2.innerHTML == 'O' && r5.innerHTML == 'O' && r8.innerHTML == 'O' ||
    r0.innerHTML == 'X' && r4.innerHTML == 'X' && r8.innerHTML == 'X' ||
    r0.innerHTML == 'O' && r4.innerHTML == 'O' && r8.innerHTML == 'O' ||
    r2.innerHTML == 'X' && r4.innerHTML == 'X' && r6.innerHTML == 'X' ||
    r2.innerHTML == 'O' && r4.innerHTML == 'O' && r6.innerHTML == 'O'

  ) {

    document.getElementById('options').innerHTML = 'Game Over ' + document.turn + " wins";
    alert('Game Over ' + document.turn + " wins");
    location.reload();
    return true;
  } else {

    return false;
  }
});