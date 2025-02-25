/*____________________________________________________*/
/*-------------------⇩-⇩ HEADER ⇩-⇩-------------------*/

const header = `    
<nav>    
<div class="topNav stroke"> 
    <ul class="ulTopNav">
        <li>
            <a href="./en_developpement.html"><img class="icon" src="./../img/VectorStages.svg" alt="icon stages">Stages 
            </a>
        </li>
        <li>
            <a href="./en_developpement.html"><img class="icon" src="./../img/VectorNewsletter.svg" alt="icon Newsletter">Newsletter
            </a>
        </li>
    </ul>
</div>
<div class="mainNav stroke">
    <span>
        <a href="./../index.html"><img src="./../img/Dyna-LivresLogoNEW.svg" alt="Logo de Dynalivres"></a>
    </span>
    <span>
        <ul class="ulMainNav">
            <li>
                <a href="./../index.html"><img class="icon" src="./../img/VectorAccueil.svg" alt="icon accueil">Accueil</a>
            </li>

            <li>       
                <a href="./ecoles.html"><img class="icon" src="./../img/VectorEcole.svg" alt="icon ecoles">Écoles</a>
            </li>

            <li>         
                <a href="./associations.html"><img class="icon" src="./../img/VectorAssociation.svg" alt="icon association">Associations</a>
            </li>

            <li>     
                <a href="./dynaLivres.html"><img class="icon" src="./../img/VectorDynalivre.svg" alt="icon Dynalivre">Dyna-Livres</a>
            </li>

            <li>    
                <a href="./contact.html"><img class="icon" src="./../img/VectorContact.svg" alt="icon contact">Contact</a>
            </li>
        </ul>
    </span>
</div>
</nav>
`;

document.getElementById('header').insertAdjacentHTML('beforebegin', header);
/* document.querySelector('header').insertAdjacentHTML('beforebegin', header) */

/*_____________________________________________________*/
/*-------------------⇩-⇩ FOOTER ⇩-⇩-------------------*/

const footer = `
<section class="thanks">
    <a href="https://www.provincedeliege.be/fr/culture"><img src="./../img/logoProvinceLiegeCulture.png" alt="Logo Province de Liege Culture"></a>
    <a href="https://cheneeculture.be/"><img src="./../img/logoCentreCulturelChenee.png" alt="Logo Centre Culturel Chênée"></a>
    <a href="https://www.provincedeliege.be/social"><img src="./../img/logoProvinceLiegeSocial.png" alt="Logo Province de Liege Social"></a>
</section>    
<section> <!-- tout le footer en orange -->
    <div class="panelContact"> <!-- truc en jaune chiant -->
        <p>Vous aussi, faites appel à Dyna !</p>
        <article>
            <a href="./contact.html"><button type="button">Contactez-nous</button></a>
        </article>
    </div>
    <div class="block_infoUnderlineFooter"> <!-- le contenu -->
        <div class="blockInfo"> <!-- le contenu -->
            <div class="column" id="GoogleMaps"> <!-- google maps -->
                <img src="./../img/Maps.png" alt="Google Maps">
            </div>
            <div class="column" id="element"> <!-- texte -->
                <span>
                    <h2>Coordonnées</h2>
                    <p1>Siège social :</p1>
                    <br>
                    <p2>Rue Joseph Willem, 27<br>4030 LIÈGE</p2>
                </span>
                <span>
                    <p1>Siège d'activité :</p1>
                    <br>
                    <p2>Rue des Ecoles, 5<br>4031 ANGLEUR</p2>
                </span>
            </div>
            <div class="column" id="element">
                <span>
                    <h2 class="h2Special">Horaires</h2>
                    <p2>Sur rendez-vous uniquement</p2>
                </span>
                <span>
                    <h2>Newsletter</h2>
                    <p2>Inscrivez-vous à notre Newsletter<br> pour des recommandations de lecture</p2>
                    <br>
                </span>
                <span class="media">
                    <a href="#"><img src="./../img/Instagram icon.png" alt="Logo d'Instagram"></a>
                    <a href="#"><img src="./../img/Facebook icon.png" alt="Logo de Facebook"></a>
                    <a href="#"><img src="./../img/Linkedin icon.png" alt="Logo de Linkedin"></a>
                </span>
            </div>
        </div>
        <div class="blockUnderlineFooter">
            <hr class="underlineFooter">
            <p> © 2024 | Dyna Livres Association </p>
        </div>
    </div>

    </div>
        <div class="legalNotice">
            <a href="./en_developpement.html">Mentions Légales</a>
            <p>|</p>
            <a href="./en_developpement.html">Politique des cookies</a>
            <p>|</p>
            <a href="./en_developpement.html">Politique de Vie Privées</a>
            <p>|</p>
            <a href="./en_developpement.html">Disclaimer</a>
            <p>|</p>
            <a href="./en_developpement.html">CGU</a>
        </div>
    </div>
</section>
`;

document.getElementById('footer').insertAdjacentHTML('beforebegin', footer);
