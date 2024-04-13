/*___________________________________________________*/
/*----------------⇩-⇩ BLOCK RIGHT ⇩-⇩----------------*/

const dataEcole = {
  title: 'Écoles',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  a_href: '/pages/ecoles.html',
  src: '/img/mainEnfantPeignant.png',
  alt: "Main d'enfant peignant",
};
const dataNewsletter = {
  title: 'Newsletter',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  a_href: '/pages/WIP.html',
  src: '/img/animatriceLisantLivreAvecEnfants.png',
  alt: 'Animatrice lisant un livre avec des enfants',
};

const dataMap__nameId_right = {
  ecoles_blockRight: dataEcole,
  newsletter_blockRight: dataNewsletter,
};

function generateContent_right(ids) {
  let content = '';

  ids.forEach((id) => {
    const data = dataMap__nameId_right[id];
    if (data) {
      content += `
        <div id="${id}" class="containerRight"> 
            <div class="blockRight">
                <div>                        
                    <img src=${data.src} alt=${data.alt}>
                </div>
                <div>
                    <h2>${data.title}</h2>
                    <hr class="underline">
                    <p>${data.text}</p>
                    <article>
                        <a href=${data.a_href}><button type="button" class="buttonCTA">Inscrivez-vous <img src="/img/play.png" alt="petite logo play"></button>
                        </a>
                    </article>                    
                </div>
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
