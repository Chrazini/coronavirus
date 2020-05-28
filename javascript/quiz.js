const startButton = document.getElementById("start")
const nextButton = document.getElementById("next")

let currentQuestionIndex

const questionCount = document.getElementById("question-count")
const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answers")

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
	currentQuestionIndex++
	nextQuestion()
})

function startGame() {
	/* Skjuler Start Knappen */
	startButton.style.display = "none"

	/* Nulstiller "Spørgsmålstæller" */
	currentQuestionIndex = 0
	nextQuestion()
}

function nextQuestion() {
	while (answers.firstChild) {
		answers.removeChild(answers.firstChild)
	}
	showQuestion(questions[currentQuestionIndex])
}

function showQuestion(question) {
	questionCount.innerText = "Spørgsmål " + (currentQuestionIndex + 1) + "/" + questions.length
	questionElement.innerText = question.question
	question.answers.forEach(answer => {
		const button = document.createElement("button")
		button.innerText = answer.text
		button.classList.add(".answer")

		if (answer.correct) {
			button.dataset.correct = answer.correct
		}

		button.addEventListener("click", selectAnswer)
		answerButtons.appendChild(button)
		nextButton.style.display = "none"
	})
}

function selectAnswer(e) {
	const selectedButton = e.target
	const correct = selectedButton.dataset.correct

	Array.from(answerButtons.children).forEach( button => {
		setStatusClass(button, button.dataset.correct)
	})
	if (questions.length > currentQuestionIndex + 1) {
		nextButton.style.display = "block"
	} else {
		startButton.innerText = "Tag Testen Igen"
		startButton.style.display = "block"
	}
}

function setStatusClass(element, correct) {
	clearStatusClass(element)
	if (correct) {
		element.classList.add("correct")
	} else {
		element.classList.add("incorrect")
	}
}

function clearStatusClass(element) {
	element.classList.remove("correct")
	element.classList.remove("incorrect")
}

const questions = [
	{
		question: "Hvad er ny coronavirus eller COVID-19?",
		answers: [
			{ text: "En virus, som ødelægger din computer.", correct: false },
			{ text: "En virus, der kan forårsage milde forkølelser, men også alvorlige luftvejsinfektioner.", correct: true },
			{ text: "En virus man med sikkerhed dør af.", correct: false },
			{ text: "En virus på nethinden, som kan gøre dig blind.", correct: false }
		]
	},
	{
		question: "Er ny coronavirus luftbåren?",
		answers: [
			{ text: "Ja, det er den.", correct: false },
			{ text: "Ja, men kun indendørs.", correct: false },
			{ text: "Nej, det er den ikke.", correct: true },
			{ text: "Ja, men kun udendørs. ", correct: false }
		]
	},
	{
		question: "Hvordan smitter ny coronavirus?",
		answers: [
			{ text: "Gennem dråbe- og kontaktsmitte.", correct: true },
			{ text: "Ved hud til hud kontakt.", correct: false },
			{ text: "Ved at være i samme rum som en coronasmittet person.", correct: false },
			{ text: "Ved stik fra coronamyggen.", correct: false }
		]
	},
	{
		question: "Hvordan kommer virus ind i kroppen?",
		answers: [
			{ text: "Gennem kontakt med slimhinder i mund, næse eller øjne.", correct: true },
			{ text: "Ved mad med for få vitaminer i.", correct: false },
			{ text: "Ved indsprøjtning.", correct: false },
			{ text: "Ved indtagelse af dårlige eller for gamle madvarer.", correct: false }
		]
	},
	{
		question: "Hvad betyder 'inkubationstiden?'",
		answers: [
			{ text: "Det er et udtryk for hvor længe man har været smittet.", correct: false },
			{ text: "Det er et udtryk for tidsrummet fra man bliver smittet og til man får symptomer.", correct: true },
			{ text: "Det er et udtryk for hvor længe man bør være i karantæne ved coronasmitte.", correct: false },
			{ text: "Det er et udtryk for tidsrummet fra den først smittede til den sidst smittede.", correct: false }
		]
	},
	{
		question: "Hvad vurderer sundhedsmyndighederne er den mest effektive måde at forebygge kontaktsmitte?",
		answers: [
			{ text: "God håndhygiejne.", correct: true },
			{ text: "At bære ansigtsmaske eller mundbind.", correct: false },
			{ text: "At holde sig for munden ved host eller nys.", correct: false },
			{ text: "At indtage vitaminpiller dagligt.", correct: false }
		]
	},
	{
		question: "Hvis man har været smittet med ny Coronavirus, hvornår er man så smittefri ifølge sundhedsmyndighederne?",
		answers: [
			{ text: "Du er smittefri når du føler dig rask igen.", correct: false },
			{ text: "Du er smittefri når du har været symptomfri i 48 timer.", correct: true },
			{ text: "Du er smittefri når du har været syg i 1 uge.", correct: false },
			{ text: "Du er smittefri når du har været symptomfri i 14 dage.", correct: false }
		]
	},
	{
		question: "Hvem er blandt andet i øget risiko for et alvorligt sygdomsforløb?",
		answers: [
			{ text: "Unge mennesker under 20 år.", correct: false },
			{ text: "Folk, som anvender offentlig transport.", correct: false },
			{ text: "Folk, som arbejder i sundhedssektoren.", correct: false },
			{ text: "Personer med høj alder.", correct: true }
		]
	}
]
