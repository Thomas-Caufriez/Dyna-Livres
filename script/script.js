let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');
let bublleInfo = document.querySelectorAll('.slider .list item .bubbleInfo');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 100000000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 100000000);
    // ici on change le temps de rafraichissement avec le setInterval 3000 (3sec)

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})

//si active alors pas hidden
//si pas active alors hidden
  /*-------------------- HEADER --------------------*/

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
                <a href="/pages/a_propos.html">A propos</a>
                <a href="/pages/contact.html">Contact</a>
            </ul>
        </span>
    </div>   
</nav>
`
document.getElementById('header').insertAdjacentHTML('beforebegin', header) 
/* document.querySelector('header').insertAdjacentHTML('beforebegin', header) */

/*-------------------- FOOTER --------------------*/
