import checkIfWon from './checkWinner';

function switchxy(){
  
    var options = document.getElementById("options");
    
    if(document.turn == 'X'){
      options.innerText = "Player "+document.turn+" 's turn";
      document.turn = 'O'
      
    }else{
      options.innerText = "Player "+document.turn+" 's turn";
      document.turn = 'X'
      
    }
    
  }

  // Add move to actual gameboard



function makeMove(){
   
    switchxy();
     if(checkIfWon() == true){
       window.location.reload();
     }
     else 
    if(this.innerHTML == '') {
   this.innerHTML = document.turn;
   }else{
     alert('already chosen');
   }
  }


  export { switchxy, makeMove };