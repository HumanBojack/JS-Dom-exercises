// Nombre de balises <p>
console.log(document.getElementsByTagName("p").length);

// Contenu de l'élément à l'id "coucou"
console.log(document.getElementById("coucou").textContent);

// Url de la troisième balise <a> de la page
console.log(document.getElementsByTagName("a")[2].href);

// Nombre de "compte moi"
console.log(document.getElementsByClassName("compte-moi").length);

// Nombre  de balises li qui ont la class "compte-moi"
console.log(document.querySelectorAll("li.compte-moi").length);

// Nombre de balises li qui ont la class "compte-moi" et qui se trouvent dans une liste ordonnée
console.log(document.querySelectorAll("ol li.compte-moi").length);

// Jeu de piste ( div / ul(2) / li(1) )
let hidden = document.children[0].children[1].getElementsByTagName("div")[0].lastElementChild.textContent;
console.log(hidden)