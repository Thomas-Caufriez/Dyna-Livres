/*____________________________________________________*/
/*-------------------- BLOCK LEFT --------------------*/

const dataObjectif = {
    title: "Objectifs",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    a_href: "/pages/associations.html",
    src:"/img/enfantLisantLivre.png",
    alt:"Enfant lisant un livre",
};
const dataAssos = {
    title: "Associations",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    a_href: "/pages/associations.html",
    src:"/img/animateurLisantLivreEnfants.png",
    alt:"Animateur lisant un livres à des enfants",
};
const dataDyna = {
    title: "Dyna Livres",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    a_href: "/pages/associations.html",
    src:"/img/enfantsPeignantMur.png",
    alt:"Enfants peignant sur un mur",
};

const dataMap__nameId = {
    "objectifs_blockLeft": dataObjectif,
    "associations_blockLeft": dataAssos,
    "dynalivres_blockLeft": dataDyna,
};

function generateContent(ids) {
    let content = '';

    ids.forEach(id => {
        const data = dataMap__nameId[id];
        if (data) {
            content += `<section id="${id}" class="blockLeft"> 
                <div>
                    <h2>${data.title}</h2>
                    <hr class="underline">
                    <p>${data.text}</p>
                    <article>
                        <a href="${data.a_href}">
                            <button type="button" class="buttonInfo">En savoir plus <img src="/img/play.png" alt="icone play"></button>
                        </a>
                    </article>
                    <div>
                        <img src="${data.src}" alt="${data.alt}">
                    </div>
                </div>
            </section>`;
        }
    });

    return content;
}

// Récupère tous les éléments du HTML qui ont un ID similaire à ceux de la constante 'dataMap__nameId'
const allIds = Array.from(document.querySelectorAll('[id]')).map(element => element.id);

// Liste des identifiants à afficher, uniquement ceux qui existent dans le HTML avec un "id=..."
const idsToShow = allIds.filter(id => dataMap__nameId.hasOwnProperty(id));

// Ajoute le contenu généré à chaque élément avec les identifiants spécifiés
idsToShow.forEach(id => {
    document.getElementById(id).innerHTML = generateContent([id]);
});
