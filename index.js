var typed = new Typed(".auto-type", {
    strings: ["Kani Karadag"],
    typeSpeed: 220,
    backSpeed: 150,
    loop: true
});  
    
 
const btns = document.querySelectorAll(".tab-btn");
const überMich = document.querySelector(".übermich");
const contents = document.querySelectorAll(".content");

überMich.addEventListener("click", function(e){ 
    const id = e.target.dataset.id;

    if(id){
        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
        });

        contents.forEach(function(content){
            content.classList.remove("active");
        });

        const element = document.getElementById(id);
        element.classList.add("active");
    }
});
