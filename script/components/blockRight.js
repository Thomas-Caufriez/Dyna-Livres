/*___________________________________________________*/
/*----------------⇩-⇩ BLOCK RIGHT ⇩-⇩----------------*/

const dataEcole = {
  title: `Écoles`,
  text: `Ateliers lecture ludiques et stimulants.
  De Tous les âges, du primaire au secondaire, développer le goût de lire, la créativité et l'esprit critique. Thématiques d'actualité et inclusion animés par des professionnels passionnés.
  Contactez-nous pour un projet sur mesure !`,
  a_href: `./pages/ecoles.html`,
  src: `./img/mainEnfantPeignant.png`,
  alt: `"Main d'enfant peignant"`,
};
const dataNewsletter = {
  title: `Newsletter`,
  text: `Plongez dans un univers où chaque recommandation de lecture est une invitation à renouer avec le plaisir de lire, tout en explorant des thématiques sociétales et écologiques d'actualité. Abonnez-vous dès maintenant pour ne rien manquer de nos dernières publications et pour enrichir votre boîte de réception avec des contenus inspirants et pertinents.`,
  a_href: `./pages/en_developpement.html`,
  src: `./img/animatriceLisantLivreAvecEnfants.png`,
  alt: `"Animatrice lisant un livre avec des enfants"`,
};

/*id "ecoles_blockRight" & "newsletter_blockRight" & "... etc" venant de html pour être appeler et utiliser dans le js*/
const dataMap__nameId_right = {
  ecoles_blockRight: dataEcole,
  newsletter_blockRight: dataNewsletter,
};

function generateContent_right(ids) {
  let content = ``;

  ids.forEach((id) => {
    const data = dataMap__nameId_right[id];
    if (data) {
      content += `
            <div id="${id}" class="blockRight">
                <div>                        
                    <img src=${data.src} alt=${data.alt}>
                </div>
                <div>
                    <h2>${data.title}</h2>
                    <hr class="underline">
                    <p>${data.text}</p>
                    <article>
                        <a href=${data.a_href}><button type="button" class="buttonInfo">En savoir plus <img src="./img/play.png" alt="icone play"></button>
                        </a>
                    </article>                    
                </div>
            </div>
    `;
    }
  });

  return content;
}

// Récupère tous les éléments du HTML qui ont un ID similaire à ceux de la constante 'dataMap__nameId_right'
const allIds_right = Array.from(document.querySelectorAll('[id]')).map(
  (element) => element.id
);

// Liste des identifiants à afficher, uniquement ceux qui existent dans le HTML avec un "id=..."
const idsToShow_right = allIds_right.filter((id) => dataMap__nameId_right.hasOwnProperty(id));

// Ajoute le contenu généré à chaque élément avec les identifiants spécifiés
idsToShow_right.forEach((id) => {
  document.getElementById(id).innerHTML = generateContent_right([id]);
});
