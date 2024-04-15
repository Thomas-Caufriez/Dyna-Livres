/*____________________________________________________*/
/*----------------⇩-⇩ BLOCK CENTER ⇩-⇩----------------*/

const dataValeurs = {
  title:'Nos valeurs',
  text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

  subtitle_n1:'Social',
  subText_n1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

  subtitle_n2:'Écologie',
  subText_n2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

  subtitle_n3:'Humanitaire',
  subText_n3:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

const dataMap__nameId_center = {
  valeurs_blockCenter: dataValeurs,
};

function generateContent_center(ids) {
  let content = '';

  ids.forEach((id) => {
    const data = dataMap__nameId_center[id];
    if (data) {
      content +=`
        <div class="blockCenter">
            <div>
                <h2>${data.title}</h2>
                <hr class="underlineCenter">
                <p>${data.text}</p>
            </div>
            <div>
                <span>
                    <img src="/img/social.png" alt="Icone social">
                    <h2>${data.subtitle_n1}</h2>
                    <p>${data.subText_n1}</p>
                </span>
                <span>
                    <img src="/img/ecologique.png" alt="Icone ecologique">
                    <h2>${data.subtitle_n2}</h2>
                    <p>${data.subText_n2}</p>
                </span>
                <span>
                    <img src="/img/humanitaire.png" alt="Icone humanitaire">
                    <h2>${data.subtitle_n3}</h2>
                    <p>${data.subText_n3}</p>
                </span>
            </div>
        </div>
      `;
    }
  });

  return content;
}

// Récupère tous les éléments du HTML qui ont un ID similaire à ceux de la constante 'dataMap__nameId_center'
const allIds_center = Array.from(document.querySelectorAll('[id]')).map(
  (element) => element.id
);

// Liste des identifiants à afficher, uniquement ceux qui existent dans le HTML avec un "id=..."
const idsToShow_center = allIds_center.filter((id) => dataMap__nameId_center.hasOwnProperty(id));

// Ajoute le contenu généré à chaque élément avec les identifiants spécifiés
idsToShow_center.forEach((id) => {
  document.getElementById(id).innerHTML = generateContent_center([id]);
});
