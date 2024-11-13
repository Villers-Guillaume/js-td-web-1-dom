// 02-DOM : PARCOUREZ LE DOM
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
 DOM - PREPA 2 : « Rêve » : compter les éléments.
 Déclarez la fonction compterElements afin que le reste du programme fonctionne correctement.
*/

// Insérez votre code ici
function compterElements(element) {
    console.log(document.querySelectorAll(element).length);
}


compterElements("p"); // Doit afficher 4
compterElements(".adjectif"); // Doit afficher 3
compterElements("p .adjectif"); // Doit afficher 3
compterElements("p > .adjectif"); // Doit afficher 2