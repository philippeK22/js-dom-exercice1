
// ### 1. Met un écouteur d'événement sur le h1, rajoute la class text-blue
// ### 2. Au double clique du h3, rajoute la class text-error
// ### 3. Trouve une methode qui rajoute la class text-style sur le 1er paragraphe mais qui en meme temps vérifie si la class est déjà dessus, dans ce cas la cette methode est capable de la retirer 
// ### 4. Dans l'avant dernier paragraphe, tu as trois span, créer un programme qui met la class bolder sur le mot sur le quel on clique 
// ### 5. Dans le dernier paragraphe tu as trois span,créer un programme qui rajoute la class "bolder-red" sur le mot sur le quel on clique mais retire cette class au deux autres, si elles l'ont 

// 1

let myH1 = document.querySelector("h1");


myH1.addEventListener("click",()=>{
    
    myH1.className = "text-blue"
})

// 2

let myH3 = document.querySelector("h3");


 myH3.addEventListener("dblclick",()=>{

    myH3.classList.toggle("text-error")
    
})

// 3

let firstParagraphe = document.querySelectorAll("p")[0];
console.log(firstParagraphe);

firstParagraphe.addEventListener("click",()=>{
    

    firstParagraphe.classList.toggle("text-style");
})

// 4

let twoParagraphe = document.querySelectorAll("p")[1];
let span1 = twoParagraphe.querySelectorAll("span");

span1.forEach(element => {

    element.addEventListener("click",(e)=>{
        console.log(e);
        element.classList.toggle("bolder");

    })
    
});


//5

let mySpan  = Array.from(document.querySelectorAll("p")[2].children);
console.log(mySpan);


mySpan.forEach(el => {

    el.addEventListener("click",()=>{
        mySpan.forEach(el => {

            el.classList.remove("bolder-red");
            
        });
      
        el.classList.add("bolder-red");
    })
    
});

