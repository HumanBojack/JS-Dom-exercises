// Modif 1
function changeTitles(){
	let jumbotron = document.getElementsByClassName("jumbotron")[0];
	jumbotron.getElementsByTagName("h1")[0].textContent = "Ce que j'ai appris à THP";
	jumbotron.getElementsByClassName("text-muted")[0].textContent = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous ! (c'est pas insane en vrai)";
};
changeTitles();

// Modif 2
function changeCallToActions(){
	let btns = document.querySelector(".jumbotron > div").getElementsByTagName("a");
	btns[0].textContent = "Ok je veux tester !";
	btns[0].setAttribute("href", "http://www.thehackingproject.org");
	btns[1].textContent = "Non merci";
	btns[1].setAttribute("href", "https://www.pole-emploi.fr/accueil/");
};
changeCallToActions();

// Modif 3
function changeLogoName(){
 let brand = document.querySelector(".navbar-brand strong");
 brand.textContent = "The THP Experience";
 brand.style.fontSize = "2em";
};
changeLogoName();

// Modif 4
function populateImages(){
	let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
	let cardImages = document.getElementsByClassName("card-img-top");
	imagesArray.forEach(function callback(value, index) {
		cardImages[index].src = value;
	});
};
populateImages();

// Modif 5
function deleteLastCards(){
	let cards = document.getElementsByClassName("row")[1];
	let child;

	for( let i = 3; i--;){
		child = cards.lastElementChild;
		cards.removeChild(child);
	}
}
deleteLastCards();

// Modif 6
function changeCardsText(){
	let cards = document.getElementsByClassName("row")[1].children;
	let textArray = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."];
	for( let i = 3; i--;){
		cards[i].querySelector("p.card-text").textContent = textArray[i];
	}
}
changeCardsText();

// Modif 7
function changeViewButtons(){
	let cards = document.getElementsByClassName("row")[1].children;
	for (card of cards){
		let btn = card.querySelector(".btn");
		btn.classList.replace("btn-outline-secondary", "btn-success");
	}
}
changeViewButtons();

// Modif 8
function weirdThings(){
	let rows = document.getElementsByClassName("container")[3];
	let newRow = document.createElement("div");
	let js = rows.childNodes[1].childNodes[5];
	newRow.className = "row";
	js.parentElement.removeChild(js);
	newRow.appendChild(js);
	rows.appendChild(newRow);
}
weirdThings();