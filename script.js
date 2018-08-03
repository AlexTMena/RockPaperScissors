	var cScore = Number()
	var pScore = Number()

function chooseRock() {
	var comp = Math.floor(Math.random()*30/10)+1
	var plyr = 1
	document.getElementById('player-turn').src = "rock.jpg"
	var x = document.getElementById("choosePap");
    x.style.display = "none";
	var y = document.getElementById("chooseSci");
    y.style.display = "none";

    document.getElementById("chooseRoc").disabled = true;


    if (comp == 1) {
    	aiPick = document.getElementById('computer-turn').src = "rock.jpg"
    } else if (comp == 2) {
    	aiPick = document.getElementById('computer-turn').src = "paper.jpg"
    } else {
    	aiPick = document.getElementById('computer-turn').src = "scissors.jpg"
    }

    if ( plyr == comp) {
    	document.getElementById('winner').innerHTML = "Draw!"
    } else if ( comp == 2  ) {
    	document.getElementById('winner').innerHTML = "Computer!"
    	cScore = cScore+1
    	document.getElementById('comp-score').innerHTML = cScore
    } else {
   		document.getElementById('winner').innerHTML = "Player!"
   		pScore = pScore+1
   		document.getElementById('plyr-Score').innerHTML = pScore
    }

    if ( pScore == 5) {
    	alert("Game Over! Winner: Player!")
        document.getElementById('choosePap').style.display = "none"
        document.getElementById('chooseRoc').style.display = "none"
        document.getElementById('chooseSci').style.display = "none"
        document.getElementById('newRnd').style.display = "none"
    } else if ( cScore == 5) {
        alert("Game Over! Winner: Computer!")
        document.getElementById('choosePap').style.display = "none"
        document.getElementById('chooseRoc').style.display = "none"
        document.getElementById('chooseSci').style.display = "none"
        document.getElementById('newRnd').style.display = "none"
    }

}
function choosePaper() {
	var comp = Math.floor(Math.random()*30/10)+1
	var plyr = 2
	document.getElementById('player-turn').src = "paper.jpg"
	var x = document.getElementById("chooseRoc");
	x.style.display = "none";
	var y = document.getElementById("chooseSci");
    y.style.display = "none";

    document.getElementById("choosePap").disabled = true;

	if (comp == 1) {
    	aiPick = document.getElementById('computer-turn').src = "rock.jpg"
    } else if (comp == 2) {
    	aiPick = document.getElementById('computer-turn').src = "paper.jpg"
    } else {
    	aiPick = document.getElementById('computer-turn').src = "scissors.jpg"
    }

    if ( plyr == comp) {
    	document.getElementById('winner').innerHTML = "Draw!"
    } else if ( comp == 3  ) {
    	document.getElementById('winner').innerHTML = "Computer!"
 		cScore = cScore+1
    	document.getElementById('comp-score').innerHTML = cScore
    } else {
   		document.getElementById('winner').innerHTML = "Player!"
   		pScore = pScore+1
   		document.getElementById('plyr-Score').innerHTML = pScore
    }

    if ( pScore == 5) {
        alert("Game Over! Winner: Player!")
        document.getElementById('choosePap').style.display = "none"
        document.getElementById('chooseRoc').style.display = "none"
        document.getElementById('chooseSci').style.display = "none"
        document.getElementById('newRnd').style.display = "none"
    } else if ( cScore == 5) {
        alert("Game Over! Winner: Computer!")
        document.getElementById('choosePap').style.display = "none"
        document.getElementById('chooseRoc').style.display = "none"
        document.getElementById('chooseSci').style.display = "none"
        document.getElementById('newRnd').style.display = "none"
    }

}
function chooseScissors() {
	var comp = Math.floor(Math.random()*30/10)+1
	var plyr = 3
	document.getElementById('player-turn').src = "scissors.jpg"
	var x = document.getElementById("choosePap");
	x.style.display = "none";
	var y = document.getElementById("chooseRoc");
    y.style.display = "none";

    document.getElementById("chooseSci").disabled = true;

	if (comp == 1) {
    	aiPick = document.getElementById('computer-turn').src = "rock.jpg"
    } else if (comp == 2) {
    	aiPick = document.getElementById('computer-turn').src = "paper.jpg"
    } else {
    	aiPick = document.getElementById('computer-turn').src = "scissors.jpg"
    }

    if ( plyr == comp) {
    	document.getElementById('winner').innerHTML = "Draw!"
    } else if ( comp == 1  ) {
    	document.getElementById('winner').innerHTML = "Computer!"
		cScore = cScore+1
    	document.getElementById('comp-score').innerHTML = cScore
    } else {
   		document.getElementById('winner').innerHTML = "Player!"
   		pScore = pScore+1
   		document.getElementById('plyr-Score').innerHTML = pScore
    }

    if ( pScore == 5) {
        alert("Game Over! Winner: Player!")
        document.getElementById('choosePap').style.display = "none"
        document.getElementById('chooseRoc').style.display = "none"
        document.getElementById('chooseSci').style.display = "none"
        document.getElementById('newRnd').style.display = "none"
    } else if ( cScore == 5) {
        alert("Game Over! Winner: Computer!")
        document.getElementById('choosePap').style.display = "none"
        document.getElementById('chooseRoc').style.display = "none"
        document.getElementById('chooseSci').style.display = "none"
        document.getElementById('newRnd').style.display = "none"

    }
}

function nextRnd(){
	document.getElementById('choosePap').style.display = "block"
	document.getElementById('chooseRoc').style.display = "block"
	document.getElementById('chooseSci').style.display = "block"
	var rst = document.getElementById('winner').innerHTML = ""
    document.getElementById("chooseRoc").disabled = false;
    document.getElementById("choosePap").disabled = false;
    document.getElementById("chooseSci").disabled = false;
}

function nwGame() {
    cScore = Number(0)
    pScore = Number(0)
    document.getElementById('comp-score').innerHTML = 0
    document.getElementById('plyr-Score').innerHTML = 0
    document.getElementById('winner').innerHTML = ""
    document.getElementById('choosePap').style.display = "block"
    document.getElementById('chooseRoc').style.display = "block"
    document.getElementById('chooseSci').style.display = "block"
    document.getElementById('newRnd').style.display = "block"
    document.getElementById("chooseRoc").disabled = false;
    document.getElementById("choosePap").disabled = false;
    document.getElementById("chooseSci").disabled = false;
    document.getElementById("nextRnd").disabled = false;
    document.getElementById('computer-turn').src = "pre-game.jpg"
    document.getElementById('player-turn').src = "pre-game.jpg"
}