let surpriseButton = Math.floor(Math.random() * 3) + 1;

function randomWinner(button) {
    if(button == "btn" + surpriseButton) {
        alert("WINNER");
    } else {
        alert("LOSER");
    }
}