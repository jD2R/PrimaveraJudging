
/**
 *  ---------------
 *	KA Judgment 3.0
 * 	(c) DR 2024
 * 	---------------
 */

// Import relevant data from ./data.js
import { Judges, Assignments, ChallengeData } from "./data.js";

// Storing references to HTML elements
let challengeSelect = document.getElementById("challengeSelect");
let judgeSelect = document.getElementById("judgeSelect");
let selectButton = document.getElementById("selectButton");
let accordions = document.getElementsByClassName("accordion");
let projects = document.getElementById("projects");
let submitButton = document.getElementById("submitJudgments");
let output = document.getElementById("judgingOutput");

Judges.forEach(judge => {
	judgeSelect.add(new Option(judge[0], judge[1]));
});

switchPage(0);

let activeJudge;
let activeChallenge;

selectButton.addEventListener("click", () => {

	loadJudgeDashboard();

});

/*
	Given a challenge number in the form of a CV and an array
	of team assignments (returned by judgeAssignments in the
	event listener), returns a JSON array of relevant projects.
*/
function getProgramData(challengeValue, teamAssignments) {

	// Final program data returned to the user
	let programData = [];
	// Relevant challenge data (project JSON array)
	let challengeData = ChallengeData[challengeValue];

	teamAssignments.forEach(teamName => {

		let team = teamName;
		let relevantTeamData = challengeData.filter(project => {
			return project.team.toLowerCase() == team.toLowerCase();
		});

		programData = programData.concat(relevantTeamData);

	});

	return programData;

}

function loadJudgeDashboard() {
	// Dynamically fill judge dashboard
	let judgeStr = judgeSelect.selectedOptions[0].text;
	activeJudge = judgeStr[judgeStr.length - 1] == "." ? judgeStr : judgeStr + ".";
	activeChallenge = challengeSelect.selectedOptions[0].text;

	// Two-character alphanumeric code representing the active judge
	let judgeCode = judgeSelect.value;
	// Number from 0 to n representing which challenge is selected
	let challengeCode = +challengeSelect.value[1] - 2;
	// Array of teams assigned to the active judge for the current challenge
	let judgeAssignments = Assignments[judgeCode][challengeCode];

	// Welcome message
	document.getElementById("welcomeMsg").textContent = `Welcome, ${activeJudge}`;
	document.getElementById("challengeMsg").textContent = `You're judging ${activeChallenge}.`;

	// JSON array
	let assignedProjects = getProgramData(challengeSelect.value, judgeAssignments);

	// Add a project node for each assigned project
	assignedProjects.forEach(project => createProjectNode(project));

	setInterval(updateScores, 100);

	// Change to the judging dashboard
	switchPage(1);
}

function createProjectNode(project) {
	let node = document.createElement("div");
	node.classList.add("project");

	let thumbnail = document.createElement("img");
	thumbnail.style.borderRadius = "20px 0px 0px 20px";
	thumbnail.width = "150";
	thumbnail.height = "150";
	thumbnail.src = "https://" + project.link + "/latest.png";
	node.appendChild(thumbnail);

	let information = document.createElement("div");
	information.classList.add("project-info");

	let title = document.createElement("h3");

	title.innerHTML = `<span>${project.name}</span><a href="https://${project.link}" target="_blank"><span class="material-icons">open_in_new</span></a>`;

	information.appendChild(title);

	let scoring = document.createElement("div");
	scoring.classList.add("scoring-info");
	scoring.innerHTML = `Creativity </label><input type="number" max=10 min=0 value=0><label> Complexity </label><input type="number" max=10 min=0 value=0><label> Efficiency </label><input type="number" max=10 min=0 value=0><label> Cleanliness </label><input type="number" max=10 min=0 value=0><label> Design </label><input type="number" max=10 min=0 value=0><label> Total </label><input type="number" max=100 min=0 name="totalScore" readonly>`;
	information.appendChild(scoring);

	node.appendChild(information);
	projects.appendChild(node);
}

// page switching
function switchPage(page) {
	let pages = document.getElementsByClassName("page");

	for (let i = 0; i < pages.length; i++) {
		pages[i].style.display = "none";
	}
	pages[page].style.display = "block";
}

submitButton.addEventListener("click", () => {
	prepareOutput();

	switchPage(2);
});

function prepareOutput() {
	let projects = document.getElementsByClassName("project");
	let projectScores = document.getElementsByClassName("scoring-info");

	for (let i = 0; i < projects.length; i++) {
		// get score
		// get team
		let name = projects[i].children[1].children[0].children[0];
		let score = +projectScores[i].getElementsByTagName("input")[5].value;

		output.textContent += `{
	name: "${name.textContent}",
	score: ${score}
},\n`;
	}
}

function updateScores() {
	let projects = document.getElementsByClassName("scoring-info");

	for (let i = 0; i < projects.length; i++) {
		let scores = projects[i].getElementsByTagName("input");
		let total = 0;

		for (let i = 0; i < scores.length - 1; i++) {
			if (i == 2 || i == 3) {
				total += +scores[i].value / 2;
			} else {
				total += +scores[i].value;
			}
		}

		scores[scores.length - 1].value = (total / 4).toFixed(2);
	}
}


(function initiateAccordions() {
	for (let i = 0; i < accordions.length; i++) {
		accordions[i].addEventListener("click", function() {
			this.classList.toggle("active");
			let panel = this.nextElementSibling;

			panel.style.maxHeight = panel.style.maxHeight ? null
				: panel.scrollHeight + "px";
		});
	}
})();