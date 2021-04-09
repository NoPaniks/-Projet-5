// CLASS servant à la création des phrases aléatoires :
class Sentence {
	constructor(adverbs, subjects, verbs, complements) {
		this.adverbs = adverbs;
		this.subjects = subjects;
		this.verbs = verbs;
		this.complements = complements;
	}
	getRandom(partOfTab) { /* floor arrondit, random fait l'aléatoire de longueur du tableau */ 
		return partOfTab[Math.floor(Math.random() * partOfTab.length)];
	}
	buildSentence() { /* Créer la phrase aléatoirement en appelant la fonction getRandom de la classe Sentence */
		return this.getRandom(this.adverbs) + " " + this.getRandom(this.subjects) + " " + this.getRandom(this.verbs) + " " + this.getRandom(this.complements);
	}
	doSentence() {
		this.citation = document.getElementById('citation');
		this.citation.innerHTML = ""; /* retire les anciennes citations dans le champs 'citation' de la page web */
		this.typeCitation = document.getElementById("typeCitation").value; /* récupère la valeur du type de phrase*/
		this.nbr = document.getElementById("nbrCitation").value; /* récupère la valeur du nombre de phrase*/
		for ( this.i = 0; this.i < this.nbr; this.i++) {
			if (this.typeCitation == 1) {
				this.citation.innerHTML += sentenceTab1.buildSentence()+'<br><br>'; /* écrit la phrase aléatoire tableau 1 à partir de la fonction buildsentence() de la classe Sentence à l'emplacement 'citation' de la page HTML*/
			}
			else {
				this.citation.innerHTML += sentenceTab2.buildSentence()+'<br><br>'; 
			}	
		}
	}
	event () {
		const element = document.getElementById("generate");
		element.addEventListener("click",this.doSentence);
	}
}
