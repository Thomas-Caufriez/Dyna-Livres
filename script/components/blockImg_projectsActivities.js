/*___________________________________________________________________*/
/*----------------⇩-⇩ BLOCKIMG_PROJECTSACTIVITIES ⇩-⇩----------------*/

const dataValeurs = {

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
        /* code à mettre une fois le figma et HTML /CSS fini */
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
