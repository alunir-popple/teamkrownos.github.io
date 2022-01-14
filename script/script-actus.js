window.onload = () => {

    let observer = new IntersectionObserver(observables =>{
        for(let observable of observables){
            if(observable.intersectionRatio > 0.8){
                observable.target.classList.remove("hidden");
            }else{
                observable.target.classList.add("hidden");
            }
        }
    }, {
        threshold: [0.8]
    });

    const sections = document.querySelectorAll("main > section");

    for(let section of sections){
        section.classList.add("hidden");
        observer.observe(section);
    }
}