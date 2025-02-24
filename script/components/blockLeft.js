/*__________________________________________________*/
/*----------------⇩-⇩ BLOCK LEFT ⇩-⇩----------------*/

const dataObjectif = {
  title: 'Objectifs',
  text: `Dyna-Livres, une ASBL active depuis 1997 située à Liège, propose des animations de lecture sur mesure aux écoles, associations et structures sociales de la région liégeoise.
  Lecture, expression artistique, création littéraire et rencontres avec des auteurs. Dyna-Livres met à votre disposition une équipe passionnée pour éveiller l'imagination, la créativité et la confiance en soi des enfants et des adultes.`,
  a_href: './pages/associations.html',
  src: './img/enfantLisantLivre.png',
  alt: 'Enfant lisant un livre',
};
const dataAssos = {
  title: 'Associations',
  text: `Dyna-Livres : ateliers lecture pour tous !
  Associations, rejoignez-nous !
  Thèmes variés, lecture et création
  Rencontres, débats et partages
  Projets sur mesure possibles
  Dyna-Livres : la lecture, un plaisir à partager !`,
  a_href: './pages/associations.html',
  src: './img/animateurLisantLivreEnfants.png',
  alt: 'Animateur lisant un livres à des enfants',
};
const dataDyna = {
  title: 'Dyna Livres',
  text: `Éveiller et cultiver par la lecture !
  L'ASBL Dyna-Livres promeut la lecture pour tous. Ils proposent des ateliers ludiques en milieu scolaire et pour tous les publics. Leurs actions favorisent la créativité, l'inclusion et l'esprit critique. Dyna-Livres utilise la lecture comme un outil d'apprentissage, de développement personnel et de citoyenneté.`,
  a_href: './pages/associations.html',
  src: './img/enfantsPeignantMur.png',
  alt: 'Enfants peignant sur un mur',
};
const dataStages = {
  title: 'Stages',
  text: `Etudiant(e) passionné(e) de lecture ? Dyna-Livres recherche des stagiaires pour animer des ateliers auprès d'enfants et d'adultes.
  Développez vos compétences pédagogiques et artistiques, contribuez à l'épanouissement personnel des bénéficiaires.
  Stage enrichissant et expérience unique !
  Dyna-Livres, donnez du sens à vos études !`,
  a_href: './pages/en_developpement.html',
  src: './img/enfantsPeignantMur.png',
  alt: 'Enfants peignant sur un mur',
};

/*id "objectifs_blockLeft" & "associations_blockLeft" & "... etc" venant de html pour être appeler et utiliser dans le js*/
const dataMap__nameId_left = {
  objectifs_blockLeft: dataObjectif,
  associations_blockLeft: dataAssos,
  dynalivres_blockLeft: dataDyna,
  stages_blockLeft: dataStages,
};

function generateContent_left(ids) {
  let content = '';

  ids.forEach((id) => {
    const data = dataMap__nameId_left[id];
    if (data) {
      content += `
        <div id="${id}" class="blockLeft"> 
            <div>
              <h2>${data.title}</h2>
              <hr class="underline">
              <p>${data.text}</p>
              <article>
                  <a href=${data.a_href}>
                  <button type="button" class="buttonInfo">
                  En savoir plus <img src="./img/play.png" alt="icone play">
                  </button>
                  </a>
              </article>
            </div>
            <div>
              <img src=${data.src} alt=${data.alt}>
            </div>  
        </div>
    `;
    }
  });

  return content;
}

// Récupère tous les éléments du HTML qui ont un ID similaire à ceux de la constante 'dataMap__nameId_left'
const allIds_left = Array.from(document.querySelectorAll('[id]')).map(
  (element) => element.id
);

// Liste des identifiants à afficher, uniquement ceux qui existent dans le HTML avec un "id=..."
const idsToShow_left = allIds_left.filter((id) => dataMap__nameId_left.hasOwnProperty(id));

// Ajoute le contenu généré à chaque élément avec les identifiants spécifiés
idsToShow_left.forEach((id) => {
  document.getElementById(id).innerHTML = generateContent_left([id]);
});
