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