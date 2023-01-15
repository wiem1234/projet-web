
let questions = [
    {
        id: 1,
        question: "Qu'est ce que CSS?",
        answer:"Cascading Style Sheets",
        options: [
            "Cascading Service Sheets",
            "Cascading Style Sheets",
            "Cascading Sheets Style",
          
        ]   
    },
    {
        id: 2,
        question: "Qu'est ce que HTML",
        answer: "HyperText Markup Language",
        options: [
          "Hyperlinks Markup Language",
          "Home Tool Markup Language",
          "HyperText Markup Language",
      
   
        ]
      },
      {
        id: 3,
        question: "Qu'est ce que JS",
        answer: "JavaScript",
        options: [
          "JavaScript",
          "JavaSheet",
          "JsonScript",
    
        ]
      },
      {
        id: 4,
        question: "A quoi sert le langage CSS?",
        answer: "A ajouter du style aux documents web",
    
        options: [
          " A realiser des pages dynamiques",
          " A ajouter du style aux documents web",
          "A inserer du contenu dans une page internet",
        ]
      },
      {
        id: 5,
        question: "Citez un attribut HTML lie aux images",
        answer: "src",
        options: [
          "src",
          "href",
          "img",
          
        ]
      },
      {
        id: 6,
        question: "Comment representer une liste en HTML ?",
        answer: "ul",
        options: [
         
          "div",
          "li",
          "ul"
        ]
      },
      {
        id: 7,
        question: "Avec la regle css suivante:",
        answer: "seul le texte des paragraphes de classe bli sera rouge",
        options: [
          "le texte de tous les paragraphes sera rouge.",
          "seul le texte des paragraphes de classe bli sera rouge",
          "la couleur de fond des paragraphes de classe bli sera rouge.",
        ]
      },
      {
        id: 8,
        question: "Laquelle de ces pratiques doit etre exceptionnelle (c'est a dire tres rarement utilisee):",
        answer: "placer le css dans un attribut style de chaque element html dans la page.",
        options: [
          "placer le css dans un attribut style de chaque element html dans la page.",
          "placer le css dans un element HTML style a l'interieur de la balise head de la page.",
          "placer le css dans un fichier .css separe",
        
        ]
      },
      {
        id: 9,
        question: "Le role du CSS est de::",
        answer: "Mother board",
        options: [
          "Creer des sites e-commerce.",
          "Definir des formulaires.",
          "Mettre en forme les elements html d'une page.",
         
        ]
      },
      {
        id: 10,
        question: "Quel est le bon endroit pour inserer un code JavaScript?",
        answer: "Les deux sections head et body sont correctes",
        options: [
          "La section body",
          "Les deux sections head et body sont correctes",
          "La section head",

          
        ]
      },
];

let question_count = 0;
let points = 0;


window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
  
    </ul>`;
    toggleActive();  
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){

    if(question_count == questions.length -1){
        location.href = "final.html";
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points += 10;
    sessionStorage.setItem("points",points);
}
console.log(points);

question_count++;
show(question_count);
}