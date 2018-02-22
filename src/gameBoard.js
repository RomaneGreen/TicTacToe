// make gameboard
export default (function createGameBoard () {
	for (var i = 0; i < 9; i++) {
   var td = document.createElement("td");
    var tr = document.createElement("tr");
var tx = document.createTextNode(""); 
td.setAttribute("class", "rocks");
td.id = "rocky"+i;
td.appendChild(tx);   
 document.body.appendChild(td);   
    
    if( i == 5 || i == 2 ){
     
       var td = document.createElement("td");
      

      document.body.appendChild(tr);
    }
     
}
}());
