// création tableau pour la fonction Final et l'intégration à la page web
let tabFinal = [];

// fonction qui récupère le Type
function getValueOfType() {
        let gettype = document.getElementById("type");
        let choice = gettype.selectedIndex  // Récupération de l'index du <option> choisi
        let valeur_cherchee = gettype.options[choice].value; // Récupération la valeure du <option> d'index "choice"
        return valeur_cherchee;
}

// fonction qui récupère le Nbre
function getValueOfNbre() {
        let getnbre = document.getElementById("nbre");
        let choices = getnbre.selectedIndex  // Récupération de l'index du <option> choisi
        let valeur_cherchees = getnbre.options[choices].value; // Récupération du texte du <option> d'index "choice"
        return valeur_cherchees;
} 

// fonction qui génère une réponse aléatoire
function getIndexRandomReponse() {
        let indexRandomReponse = Math.floor((Math.random() * reponse.length));
        return indexRandomReponse;
} //console.log(reponse[getIndexRandomReponse()]);

// fonction qui génère une phrase aléatoire à trou
function getIndexPhrase(typeTableau) {
        let indexPhrase = Math.floor(Math.random() * typeTableau.length);
        return indexPhrase;
}//console.log(trou3[getIndexPhrase(trou3)]); => donne une phrase aléatoire dans le tableau 3 avec en paramètre la longueur du tableau 3

//fonction qui remplace les "___" par un élément alétoire du tableau réponse
function replace(typeTableau) {
        let randomComplete =    (
                                        (
                                                (typeTableau[getIndexPhrase(typeTableau)]).replace('___',reponse[getIndexRandomReponse()])
                                        ).replace('___',reponse[getIndexRandomReponse()])
                                ).replace('___',reponse[getIndexRandomReponse()]);
        return randomComplete;
} //console.log(replace(trou2)); => donne la phrase aléatoire du tableau trou2 complété par les réponses aléatoires de la fonction getIndexRandomReponse

// fonction qui rempli le tableau final par rapport au Type et Nbre choisi par l'utilisateur
function doTabFinal(tableauFinal) {
        if (getValueOfType() == 1) {
                while (tableauFinal.length < getValueOfNbre()) {
                        tableauFinal.push(replace(trou1));
                }
        } else if (getValueOfType() == 2) {
                while (tableauFinal.length < getValueOfNbre()) {
                        tableauFinal.push(replace(trou2));
                } 
        } else if (getValueOfType() == 3) {
                while (tableauFinal.length < getValueOfNbre()) {
                        tableauFinal.push(replace(trou3));
                }
        }
        return tableauFinal;  
}

// fonction qui donne la règle d'écriture des phrases dans le modal une fois les phrases générées
function logArrayELements(element) {
        document.getElementById('phrase').innerHTML += element + '<br><br>'
}

// fonction qui écrit toutes les phrases demandées
function launchPhrases() {
        doTabFinal(tabFinal).forEach(logArrayELements);
}

// fonction qui reset les champs dans la modal et qui vide le tableau
function resetTab() {
        document.getElementById('phrase').innerHTML = ""; //reset les champs
        tabFinal = []; // reset le tableau
        return tabFinal;
}
