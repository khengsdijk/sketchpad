function genDivs(v){ 
      var e = document.body; // whatever you want to append the rows to: 
      for(var i = 0; i < v; i++){ 
        var row = document.createElement("div"); 
        row.className = "row"; 
        for(var x = 1; x <= v; x++){ 
            var cell = document.createElement("div"); 
            cell.setAttribute("onmouseover", "changeColour(this)");
            cell.className = "gridsquare";
            cell.id = "kaka";
            row.appendChild(cell); 
        } 
        e.appendChild(row); 
      } 
      //document.getElementById("code").innerText = e.innerHTML;
}

function changeColour(x){
	x.style.backgroundColor = "#4286f4";
	
}

$(document).ready(function(){
	
})