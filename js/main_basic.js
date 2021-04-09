// FONCTION PRINCIPALE :
	let sentenceTab2 = new Sentence(tabType2.adverbs, tabType2.subjects, tabType2.verbs, tabType2.complements); /* instancie le tableau 2 */
	let sentenceTab1 = new Sentence(tabType1.adverbs, tabType1.subjects, tabType1.verbs, tabType1.complements); /* instancie le tableau 1 */
	sentenceTab2.event(); // instancie la fonction event pour le tableau2
	sentenceTab1.event(); // instancie la fonction event pour le tableau1
	
	