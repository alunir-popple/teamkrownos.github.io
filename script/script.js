window.onload = () => {

    /*ANIMATION SECTION EQUIPE TABLETTE-1*/

    let observerr = new IntersectionObserver(observabless =>{
        for(let observablee of observabless){
            if(observablee.intersectionRatio > 0.9){
                observablee.target.classList.remove("hidden");
            }else{
                observablee.target.classList.add("hidden");
            }
        }
    }, {
        threshold: [0.3, 0.6, 0.9]
    });

    /*ANIMATION SECTION EQUIPE MOBILE-2*/

    let observer = new IntersectionObserver(observables =>{
        for(let observable of observables){
            if(observable.intersectionRatio > 0.9){
                observable.target.classList.remove("hidden");
            }else{
                observable.target.classList.add("hidden");
            }
        }
    }, {
        threshold: [0.3, 0.6, 0.9]
    });

    /*ANIMATION SECTION EQUIPE TABLETTE-1*/

    const sections = document.querySelectorAll("main > section");
    for(let section of sections){
        section.classList.add("hidden");
        observerr.observe(section);
    }

    /*ANIMATION SECTION EQUIPE MOBILE-2*/

    const lis = document.querySelectorAll("#jeux-content > li");
    for(let li of lis){
        li.classList.add("hidden");
        observer.observe(li);
    }


}

function csgo(){
    document.querySelector("#jeu-equipe").classList.toggle("team");
}
function fifa(){
    document.querySelector("#jeu-equipe-2").classList.toggle("team");
}
function rl(){
    document.querySelector("#jeu-equipe-3").classList.toggle("team");
}
function lol(){
    document.querySelector("#jeu-equipe-4").classList.toggle("team");
}

document.querySelector(".img-jeux-1").addEventListener("click", csgo);
document.querySelector(".img-jeux-2").addEventListener("click", fifa);
document.querySelector(".img-jeux-3").addEventListener("click", rl);
document.querySelector(".img-jeux-4").addEventListener("click", lol);

/*ANIMATION SECTION EQUIPE TABLETTE*/

/*ANIMATION SLIDER*/

const items = document.querySelectorAll(".slider img");
const itemss = document.querySelectorAll(".slider-p p");
const nbSlide = items.length;
const nbPlide = itemss.length;
const suivant  = document.querySelector(".bouton-nav.right");
const precedent  = document.querySelector(".bouton-nav.left");
let count = 0;
let countt = 0;

function slideSuivante(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    }else{
        count=0;
    }

    items[count].classList.add('active');
}

suivant.addEventListener("click", slideSuivante);

function pSuivant(){
    itemss[countt].classList.remove('activee');

    if(countt < nbPlide - 1){
        countt++;
    }else{
        countt=0;
    }

    itemss[countt].classList.add('activee');
}

suivant.addEventListener("click", pSuivant);

function pPrecedente(){
    itemss[countt].classList.remove('activee');

    if(countt> 0){
        countt--;
    }else{
        countt=nbPlide - 1;
    }

    itemss[countt].classList.add('activee');
}

precedent.addEventListener("click", pPrecedente);

function slidePrecedente(){
    items[count].classList.remove('active');

    if(count> 0){
        count--;
    }else{
        count=nbSlide - 1;
    }

    items[count].classList.add('active');
}

precedent.addEventListener("click", slidePrecedente);

function keypress(e){
    if(e.keyCode === 37){
        slidePrecedente();
        pPrecedente();
    }else if(e.keyCode === 39){
        slideSuivante();
        pSuivant();
    }
}
document.addEventListener('keydown', keypress);

/*ANIMATION SHOP*/

let i = 0;

function compte(){
    document.querySelector("#panier").classList.remove("remove");
    i = i + 1;
    document.querySelector(".nombre").innerText= i;
};

function panier(){
    document.location="panier.html";
}