// Hangman 90's movie edition game

// Get a random movie from the list
function randomMovieTitle() {
    return movieTitles[Math.floor(Math.random() * movieTitles.length)];
}

// show properly guessed letters, and _ in rest
function blanksFromSolution( solutionMovieTitle ) {  
    var result = ""; 
    for ( i in solutionMovieTitle ) {
        result = "_" + result;
    }
    return result;
}

function alterAt( n, c, originalString ) {
    return originalString.substr( 0, n) + c + originalString.substr( n + 1, originalString.length);
}

// check player guess against solution
function guessLetter( letter, shown, solution ) {
    var checkIndex = 0;
    
    checkIndex = solution.indexOf(letter);
    while ( checkIndex >= 0 ) {
        shown = alterAt( checkIndex, letter, shown );
        checkIndex = solution.indexOf(letter, checkIndex + 1);
    }
    return shown;
}

// reset the game
function resetGame() {
    resetUI();
    gameSolution = randomMovieTitle();
    gameRevealedSolution = blanksFromSolution(gameSolution);
    hangmanState = 0;
    drawMovieTitle(gameRevealedSolution);    
}

$(document).ready(resetGame);
function win() { alert('You Won! It was: ' + gameSolution );  resetGame() ;}
function lose() { alert('You Lost! It was: ' + gameSolution); resetGame(); }
function doKeypress() {
    var tempChar = $('#letter-input').val().toLowerCase();
    var tempString = "";
    $('#letter-input').val("");

 
//Check if Win/Loss
    tempString = guessLetter( tempChar, gameRevealedSolution, gameSolution );
    if ( tempString != gameRevealedSolution ) {
        updateMovieTitle( tempString );
        gameRevealedSolution = tempString;
        if ( gameRevealedSolution === gameSolution ) {
            win();
            location.reload(); // reload after game
        }
    } else {
        wrongLetter(tempChar);
        drawSequence[ hangmanState++ ]();
        if ( hangmanState === drawSequence.length ) {
            lose();
            location.reload(); // reload after game
        }
    }  
}
$('#letter-input').keyup( doKeypress );

function drawLine(moveToX, moveToY, lineToX, lineToY) {
    var canvas=document.getElementById("gameCanvas");
    var context=canvas.getContext("2d");
    context.moveTo(moveToX,moveToY);
    context.lineTo(lineToX,lineToY);
    context.stroke();
}

function drawGallows() {
    drawLine(0,150,150,150);
    drawLine(10,0,10,150);    
    drawLine(0,5,70,5);    
    drawLine(60,5,60,15);            
}

function drawHead() {
    var canvas = document.getElementById('gameCanvas');
    var context = canvas.getContext('2d');
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI*2, true);
    context.stroke();
}

function drawNeck() {
    drawLine(60,35,60,40);
}

function drawTorso() {
    drawLine(60,40,60,60);
}

function drawLeftArm() {
    drawLine(60,40,40,55);
}

function drawRightArm() {
    drawLine(60,40,80,55);
}

function drawLeftLeg() {
    drawLine(60,60,40,90);
}

function drawRightLeg() {
    drawLine(60,60,80,90);
}

var drawSequence = [ drawGallows, drawHead, drawNeck, drawTorso, drawLeftArm, drawRightArm, drawLeftLeg, drawRightLeg ];

function wrongLetter ( letter ) {
    $('#wrong-letters').append(
        $('<span/>').addClass('guessed-letter').text(letter));
}

function resetUI () {
    $('.guessed-letter').remove();
    $('.shown-letter').remove();
}

function drawMovieTitle( answer ) {
    for ( i in answer ) {
	$('.movie-title-display').append($('<span/>').addClass('shown-letter').html('&nbsp;'));
    }
}

// show _ for unguessed letters and spaces, else remove
function updateMovieTitle( answer ) {
    $k = $('.shown-letter:first');
    for ( i in answer ) {
	if ( answer.charAt(i) != '_' ) {
	    $k.addClass('shown-space').text( answer.charAt(i) );
	} else { 
	    $k.addClass('shown-letter').html('&nbsp;');
	}
	$k = $k.next();
    }
}
