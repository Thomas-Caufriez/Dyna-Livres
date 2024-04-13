/*___________________________________________________________________*/
/*----------------⇩-⇩ CAROUSEL (AFFICHAGE)-[BRUT] ⇩-⇩----------------*/

const carousel = `    
<section class="slider">
  <div class="list">
      <div class="item">
          <img src="/img/animatriceLisantLivreEnfants.png" alt="Animatrice lisant un livre à des enfants">
          <div class="bubbleInfo" >
              <p>Réveillez le goût de la lecture chez vos élèves.</p>
              <article>
                  <a href="/pages/WIP.html"><button type="button" class="buttonCTA">Contactez-nous <img src="/img/play.png" alt="icone play"></button></a>
              </article>
          </div>
      </div>
      <div class="item">
          <img src="/img/enfantsLisantLivres.jpg" alt="Enfants lisant des livres">
          <div class="bubbleInfo">
              <p>Stimulez l'apprentissage avec nos idées innovantes.</p>
              <article>
                  <a href="/pages/WIP.html"><button type="button" class="buttonCTA">Inscrivez-vous <img src="/img/play.png" alt="icone play"></button></a>
              </article>
          </div>
      </div>
      <div class="item">
          <img src="/img/murCantineDinosaures.jpg" alt="Mur d'une cantine avec des dinosaures">
          <div class="bubbleInfo">
              <p>Activités en collaboration avec nos partenaires.</p>
              <article>
                  <a href="/pages/WIP.html"><button type="button" class="buttonCTA">Inscrivez-vous <img src="/img/play.png" alt="icone play"></button></a>
              </article>
          </div>
      </div>
  </div>
  <div class="buttons">
      <button id="prev"><img src="./img/arrowLeft.svg" alt=""></button>
      <button id="next"><img src="./img/arrowRight.svg" alt=""></button>
  </div>
  <ul class="dots">
      <li class="active"></li>
      <li></li>
      <li></li>
  </ul>
</section>
`;

document.getElementById('carousel').insertAdjacentHTML('beforebegin', carousel);


/*________________________________________________________________*/
/*-------------------⇩-⇩ CAROUSEL (Logique) ⇩-⇩-------------------*/
/*------- (la logique toujours après l'affichage [BRUT] !)--------*/

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
};
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};
let refreshInterval = setInterval(() => {
  next.click();
}, 100000000);
function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + 'px';
  //

  let last_active_dot = document.querySelector('.slider .dots li.active');
  last_active_dot.classList.remove('active');
  dots[active].classList.add('active');

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 100000000);
  // ici on change le temps de rafraichissement avec le setInterval 3000 (3sec)
}

dots.forEach((li, key) => {
  li.addEventListener('click', () => {
    active = key;
    reloadSlider();
  });
});
