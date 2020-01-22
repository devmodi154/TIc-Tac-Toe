// Restart Game Button
var restart= document.querySelector("#b")

// Grabs all the squares
var squares= document.querySelectorAll('td')

//Players
var marked=0;
var game_on=true;

var currentPlayer=1;



// Clear all the squares

function clearBoard(){
	
	for(var i=0;i<squares.length;i++)
	{
		squares[i].textContent= '';
	}
	marked=0;
	game_on=true;
	currentPlayer=1;
}

restart.addEventListener('click',clearBoard);


function winCheck()
{

	if((squares[0].textContent==squares[4].textContent && squares[0].textContent==squares[8].textContent && squares[0].textContent!=='')|| (squares[2].textContent==squares[4].textContent && squares[2].textContent==squares[6].textContent && squares[2].textContent!==''))
	{
		console.log("Diag-2");
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
				$('h3').text("Player-2, it's your turn.");
			}
			else
			{
				this.textContent='O';
				currentPlayer=1;
				$('h3').text("Player-1, it's your turn.");
			}
			marked++;
			
			if(winCheck())
			{

				$('h3').text("Player-"+(currentPlayer%2+1)+" won!!");	
				game_on=false;
			}
			else if(marked==9)
			{
				$('h3').text("Draw!");
			}
		}
	}
	
}

// loop to add event listeners to all the squares


for(var i=0;i<squares.length;i++)
{
	squares[i].addEventListener('click',changeMarker);
}