/*____________________________________________________*/
/*----------------⇩-⇩ BLOCK CENTER ⇩-⇩----------------*/

const dataValeurs = {
  title:'Nos valeurs',
  text:`Dyna-Livres, une ASBL implantée à Liège depuis 1997, s'est donnée pour mission de promouvoir la lecture auprès d'un public large et diversifié, en particulier les enfants, les adolescents et les adultes. Au fil des années, l'association a développé un riche panel d'activités socioculturelles qui visent à éveiller la curiosité intellectuelle et le goût de la lecture dès le plus jeune âge. Développer l'imaginaire et la créativité grâce à des ateliers ludiques et stimulants. Favoriser l'expression individuelle et la confiance en soi à travers la pratique artistique. Sensibiliser aux enjeux sociétaux et environnementaux par le biais de thématiques citoyennes. Lutter contre les inégalités et l'exclusion en offrant un accès démocratique à la culture`,

  subtitle_n1:'Social',
  subText_n1:`Dyna-Livres lutte contre les inégalités en rendant la lecture accessible à tous, notamment aux publics fragilisés.`,

  subtitle_n2:'Écologie',
  subText_n2:`L'association promeut une lecture responsable en sensibilisant à la protection de l'environnement et en privilégiant des supports durables.`,

  subtitle_n3:'Humanitaire',
  subText_n3:`Dyna-Livres considère la lecture comme un outil d'émancipation et offre son soutien aux populations démunies à travers des actions concrètes.`,
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
