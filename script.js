function genDivs(v){ 
      for(var i = 0; i < v; i++){         
        for(var x = 0; x < v; x++){  
            $(".container").append("<div class = 'gridsquare' onmouseover='changeColour(this)'></div>");
        } 
        $('.gridsquare').width(800/x);
        $('.gridsquare').height(800/x); 
      } 
      
}


function changeColour(x){
	x.style.backgroundColor = "#4286f4";
	
}

$(document).ready(function(){

$(".sketchButton").click(function(){
	var a = prompt("how many squares would you like the grid to be?");
	clearGrid();
	genDivs(a);
});

function clearGrid() {
  $(".gridsquare").remove();
};

});