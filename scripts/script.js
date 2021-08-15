const URL_OBTER_QUIZZES = "https://mock-api.bootcamp.respondeai.com.br/api/v3/buzzquizz/quizzes";
let quizzes = [];
function pegarQuizzes(){
    const promessa = axios.get(URL_OBTER_QUIZZES);
    promessa.then(CarregarQuizz);
}
pegarQuizzes();
function CarregarQuizz(resposta){
    quizzes = resposta.data;
    renderizarQuizzes();
}

function renderizarQuizzes(){
    let divQuizzes = document.querySelector(".todos-os-quizes .lista-quizz");
    divQuizzes.innerHTML = "";
    for(let i=0; i < quizzes.length; i++){
        console.log(quizzes[i].image);
        divQuizzes.innerHTML += `<li>
            <img src="${quizzes[i].image}"/>
        </li>`;
    }
}

function criarQuiz(){
    const escondendoCriar = document.querySelector(".criar-quiz");
    escondendoCriar.classList.add("escondido");

    const escondendoQuizes = document.querySelector(".todos-os-quizes");
    escondendoQuizes.classList.add("escondido");

    const escondendoTodos = document.querySelector(".Todos");
    escondendoTodos.classList.add("escondido");

    const aparecendo = document.querySelector(".screen-3");
    aparecendo.classList.remove("escondido");
}