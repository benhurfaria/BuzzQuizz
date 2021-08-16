function irParaQuiz(){
    const escondendoCriar = document.querySelector(".criar-quiz");
    escondendoCriar.classList.add("escondido");

    const escondendoQuizes = document.querySelector(".todos-os-quizes");
    escondendoQuizes.classList.add("escondido");

    const escondendoTodos = document.querySelector(".Todos");
    escondendoTodos.classList.add("escondido");

    const aparecendo = document.querySelector(".titulo-quizz");
    aparecendo.classList.remove("escondido");

    const aparecendo2 = document.querySelector(".titulo-pergunta");
    aparecendo2.classList.remove("escondido");

    const aparecendo3 = document.querySelector(".respostas-unica");
    aparecendo3.classList.remove("escondido");
}