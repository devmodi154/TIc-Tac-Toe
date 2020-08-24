// Restart Game Button
var restart= document.querySelector("#restartButton")
var player_x= document.getElementById("x")
var player_o= document.getElementById("o")
player_x.style.color = '#00FF00';
player_o.style.color = '#333';

var result = document.getElementById('blinking');


// Grabs all the squares
var squares= document.querySelectorAll('td')

//Players
var marked=0;
var game_on=true;

var currentPlayer=1;

// Clear all the squares
function clearBoard(){
	for(var i=0;i<squares.length;i++) {
		squares[i].textContent= '';
	}
	marked=0;
	game_on=true;
	currentPlayer=1;
	result.style.visibility = 'hidden';
	$('h2').text("");
	player_x.style.color = '#00FF00';
	player_o.style.color = '#333';	

}

restart.addEventListener('click',clearBoard);


function winCheck()
{
	if((squares[0].textContent==squares[4].textContent && squares[0].textContent==squares[8].textContent && squares[0].textContent!=='')|| (squares[2].textContent==squares[4].textContent && squares[2].textContent==squares[6].textContent && squares[2].textContent!==''))
	{
		return true;
	}

	for(var i=0;i<3;i++)
	{
		if((squares[i].textContent==squares[i+3].textContent && squares[i].textContent==squares[i+6].textContent && squares[i].textContent!='') || (squares[3*i].textContent==squares[3*i+1].textContent && squares[3*i].textContent==squares[3*i+2].textContent && squares[3*i].textContent!=''))
		{
			return true;
		}
	}
	return false;

}



//Check the square marker 
function changeMarker(){

	if(marked!=9 && this.textContent==='')
	{
		if(game_on)
		{
			if(currentPlayer===1)
			{
				this.textContent='X';
				currentPlayer=2;
				player_o.style.color = "#00FF00";
				player_x.style.color = '#333';
			}
			else
			{
				this.textContent='O';
				currentPlayer=1;
				player_o.style.color = '#333';
				player_x.style.color = '#00FF00';
			}
			marked++;
			
			if(winCheck())
			{
				if( currentPlayer % 2 + 1 == 1) {
					$('h2').text("X WON!!");	
				} else {
					$('h2').text("O WON!!");	
				}
				game_on=false;
				result.style.visibility = 'visible';
			}
			else if(marked==9)
			{
				result.style.visibility = 'visible';
				$('h2').text("Draw!");
			}
		}
	}
	
}

// loop to add event listeners to all the squares
for(var i=0;i<squares.length;i++)
{
	squares[i].addEventListener('click',changeMarker);
}