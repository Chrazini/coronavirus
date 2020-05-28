

// Roterer coronavirusserne et tilfældigt antal grader rundt om side-titlen.
document.onload = rotateVirus()
function rotateVirus() {
	const virusElement = document.getElementsByClassName("coronavirus");
	virusElement[0].style.transform = "rotate(" + Math.floor(Math.random() * 350) + 1 + "deg)"
	virusElement[1].style.transform = "rotate(" + Math.floor(Math.random() * 350) + 1 + "deg)"
}
