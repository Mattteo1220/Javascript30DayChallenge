function toggleOpen(){
    this.classList.toggle("open");
}

function toggleActive(e){
    if(e.propertyName.includes("flex")){
        this.classList.toggle("open-active");
    }
}

let panels = document.querySelectorAll(".panel");

panels.forEach(p => p.addEventListener("click", toggleOpen));
panels.forEach(p => p.addEventListener("transitionend", toggleActive));