/*____________________________________________________*/
/*-------------------⇩-⇩ HEADER ⇩-⇩-------------------*/

const header = `    
<nav>    
<div class="topNav"> 
    <ul>
        <a href="/pages/WIP.html">Stages</a>
        <a href="/pages/WIP.html">Newsletter</a>
    </ul>
</div>
<div class="mainNav">
    <span>
        <a href="/index.html"><img src="/img/Logo.svg" alt="Logo de Dynalivres"></a>
    </span>
    <span>
        <ul>
            <a href="/index.html">Accueil</a>
            <a href="/pages/ecoles.html">Écoles</a>
            <a href="/pages/associations.html">Associations</a>
            <a href="/pages/a_propos.html">Dyna-Livres</a>
            <a href="/pages/contact.html">Contact</a>
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
<section> <!-- tout le footer en orange -->
    <div class="panelContact"> <!-- truc en jaune chiant -->
        <p>Vous aussi, faites appel à Dyna !</p>
        <article>
            <a href="/pages/contact.html"><button type="button">Contactez-nous</button></a>
        </article>
    </div>
    <div class="info"> <!-- le contenu -->
        <div class="column" id="GoogleMaps"> <!-- google maps -->
            <img src="/img/map.png" alt="Google Maps">
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
                <h2>Horaires</h2>
                <p2>Sur rendez-vous uniquement</p2>
            </span>
            <span>
                <h2>Newsletter</h2>
                <p2>Inscrivez-vous à notre<br>Newsletter pour des<br>recommandations de lecture</p2>
                <br>
            </span>
            <span class="media">
                <a href=""><img src="/img/Instagram icon.png" alt="Logo d'Instagram"></a>
                <a href=""><img src="/img/Facebook icon.png" alt="Logo de Facebook"></a>
                <a href=""><img src="/img/Linkedin icon.png" alt="Logo de Linkedin"></a>
            </span>
        </div>
    </div>
    <div class="legalNotice">
        <a href="/pages/WIP.html">Mentions Légales</a>
        <p>|</p>
        <a href="/pages/WIP.html">Politique des cookies</a>
        <p>|</p>
        <a href="/pages/WIP.html">Politique de Vie Privées</a>
        <p>|</p>
        <a href="/pages/WIP.html">Disclaimer</a>
        <p>|</p>
        <a href="/pages/WIP.html">CGU</a>
    </div>
</section>
`;

document.getElementById('footer').insertAdjacentHTML('beforebegin', footer);