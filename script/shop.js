let i = 0;

function compte(){
    document.querySelector("#panier").classList.remove("remove");
    i = i + 1;
    document.querySelector(".nombre").innerText= i;
};

function panier(){
    document.location="panier.html";
}

document.querySelector("#produit1").addEventListener("click", function(event){
    document.querySelector("#couverture").classList.remove("remove");
    document.querySelector("#lightbox1").classList.remove("remove");
    event.stopPropagation();
});
document.querySelector("#produit2").addEventListener("click", function(event){
    document.querySelector("#couverture").classList.remove("remove");
    document.querySelector("#lightbox2").classList.remove("remove");
    event.stopPropagation();
});
document.querySelector("#produit3").addEventListener("click", function(event){
    document.querySelector("#couverture").classList.remove("remove");
    document.querySelector("#lightbox3").classList.remove("remove");
    event.stopPropagation();
});
document.querySelector("#produit4").addEventListener("click", function(event){
    document.querySelector("#couverture").classList.remove("remove");
    document.querySelector("#lightbox4").classList.remove("remove");
    event.stopPropagation();
});
document.querySelector("#produit5").addEventListener("click", function(event){
    document.querySelector("#couverture").classList.remove("remove");
    document.querySelector("#lightbox5").classList.remove("remove");
    event.stopPropagation();
});
document.querySelector("#produit6").addEventListener("click", function(event){
    document.querySelector("#couverture").classList.remove("remove");
    document.querySelector("#lightbox6").classList.remove("remove");
    event.stopPropagation();
});
document.querySelector("#couverture").addEventListener("click", function(event){
    event.stopPropagation();
    document.querySelector("#couverture").classList.add("remove");
    document.querySelector("#lightbox1").classList.add("remove");
    document.querySelector("#lightbox2").classList.add("remove");
    document.querySelector("#lightbox3").classList.add("remove");
    document.querySelector("#lightbox4").classList.add("remove");
    document.querySelector("#lightbox5").classList.add("remove");
    document.querySelector("#lightbox6").classList.add("remove");

});

document.querySelector("#vignettes1 #vignette1").addEventListener("click", function(){
    document.querySelector("#grande").innerHTML="<img src='produits/maillot_dom_front.png'>";
});
document.querySelector("#vignettes1 #vignette2").addEventListener("click", function(){
    document.querySelector("#grande").innerHTML="<img src='produits/maillot_dom_back.png'>";
});

document.querySelector("option#dom").addEventListener("click", function(){
    document.querySelector("#vignette1").setAttribute("src", "produits/maillot_dom_front.png");
    document.querySelector("#vignette2").setAttribute("src", "produits/maillot_dom_back.png");
    document.querySelector("#grande").innerHTML="<img src='produits/maillot_dom_front.png'>";

    document.querySelector("#vignette1").addEventListener("click", function(){
        document.querySelector("#grande").innerHTML="<img src='produits/maillot_dom_front.png'>";
    });
    document.querySelector("#vignette2").addEventListener("click", function(){
        document.querySelector("#grande").innerHTML="<img src='produits/maillot_dom_back.png'>";
    });
});

document.querySelector("option#ext").addEventListener("click", function(){
    document.querySelector("#vignette1").setAttribute("src", "produits/maillot_ext_front.png");
    document.querySelector("#vignette2").setAttribute("src", "produits/maillot_ext_back.png");
    document.querySelector("#grande").innerHTML="<img src='produits/maillot_ext_front.png'>";

    document.querySelector("#vignette1").addEventListener("click", function(){
        document.querySelector("#grande").innerHTML="<img src='produits/maillot_ext_front.png'>";
    });
    document.querySelector("#vignette2").addEventListener("click", function(){
        document.querySelector("#grande").innerHTML="<img src='produits/maillot_ext_back.png'>";
    });
});