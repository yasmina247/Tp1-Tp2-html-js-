  // Fonction appelée lorsqu'on clique sur le bouton "Afficher le corrigé"
function afficherCorrige() {
  //Ouverture d'une nouvelle fenetre
  // window.open() crée une nouvelle fenêtre
  let fenetre = window.open();
  // document.write() permet d’écrire directement du code HTML dans la fenêtre ouverte: fenetre
  fenetre.document.write("<h2>Corrigé du QCM</h2>");
  fenetre.document.write("<p>1. Quelle balise permet d'insérer un script JavaScript ?<br> Réponse: <u style='color:green'>&lt;script&gt;</u></p>");
  fenetre.document.write("<p>2. Quelle balise qui permet de retourner à la ligne ? <br> Réponse: <u style='color:green'>&lt;br&gt;</u></p>");
  fenetre.document.write("<p>3. Quel balise permet de créer un formulaire ? <br> Réponse: <u style='color:green'>&lt;fieldset&gt; / &lt;form&gt;</u></p>");
  fenetre.document.write("<p>4. Les mots-clés pour déclarer une variable en JavaScript sont ? <br> Réponse: <u style='color:green'>var / let</u></p>");
  fenetre.document.write("<p>5. Quelles sont les langages de programmation parmi ces propositions ?<br> Réponse: <u style='color:green'>JavaScript</u></p>");
  fenetre.document.close();
}
// Fonction appelée lorsqu'on clique sur le bouton "Afficher le résultat"
function afficherResultat(form) {
  // Initialisation du score à 0
  let score = 0;
  // Ouvrir une nouvelle fenêtre pour afficher les résultats
  let fenetre1 = window.open();
  fenetre1.document.write("<h2>Résultat du test</h2>");
  //Question 1 
  if (form.q1.value =="a") {
    fenetre1.document.write("<p style='color:green'>1. correcte</p>");
    score++;
  } else {
    fenetre1.document.write("<p style='color:red'>1. incorrecte</p>");
  }
  //Question 2
  if (form.q2.value =="a") {
    fenetre1.document.write("<p style='color:green'>2. correcte</p>");
    score++;
  } else {
    fenetre1.document.write("<p style='color:red'>2. incorrecte</p>");
  }

  //Question 3
  if (form.q3[0].checked && form.q3[1].checked && !form.q3[2].checked) {
    fenetre1.document.write("<p style='color:green'>3. correcte</p>");
    score++;
  } else {
    fenetre1.document.write("<p style='color:red'>3. incorrecte</p>");
  }
  //Question 4
  if (form.q4[0].checked && form.q4[1].checked && !form.q4[2].checked) {
    fenetre1.document.write("<p style='color:green'>4. correcte</p>");
    score++;
  } else {
    fenetre1.document.write("<p style='color:red'>4. incorrecte</p>");
  }
  //Question 5
  if (form.q5[2].checked && !form.q5[0].checked && !form.q5[1].checked) {
    fenetre1.document.write("<p style='color:green'>5. correcte</p>");
    score++;
  } else {
    fenetre1.document.write("<p style='color:red'>5. incorrecte</p>");
  }
  //Score final
  fenetre1.document.write("<h3>Score final: " + score + " / 5</h3>");
  fenetre1.document.close();
}