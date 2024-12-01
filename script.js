

const typed= new Typed('.multiple-text',{
    strings: ['Frontend Developer','Software Devepoler'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
});


let menuicon=document.querySelector("#menu-icon");
let bar=document.querySelector(".header-right");
menuicon.onclick=()=>{
    menuicon.classList.toggle("fa-xmark");
    bar.classList.toggle("active")
}

let sections =document.querySelector("section");
let navlinks=document.querySelector("header nav a");
window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let heigth=sec.offsetHeight;
        let id=sec.getAttribute("id");

        if(top>=offset && top<offset+heigth){
            navlinks.forEach.apply(link=>{
                links.classList.remove("active");
                document.querySelector("header nav a[href*="+id+']').classList.add("active");

            });
        };
    });
}