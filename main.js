// define "character" como uma constante que pega todos os elementos da classe "character", definido no arquivo html e acessado através do DOM, usando o método ".document"
const character = document.getElementsByClassName("character")[0]; 
// define um "containerCharacter" como uma constante que pega todos os elementos da clase "container-character", definindo o espaço que o personagem pode se mover
const containerCharacter = document.getElementsByClassName("container-character")[0];

// define uma constante "VELOCITY" e atribui a ela valoe 10
const VELOCITY = 10;

// define duas constantes de altura e largura; são atribuidas a elas os valores puxados da altura e largura da tela do site
const SCREEN_WIDTH = screen.width;
const SCREEN_HEIGHT = screen.height;

// define variáveis que serão as coordenadas (x e y) iniciais do personagem na tela
let xPosition = 500;
let yPosition = 300;

// array contendo as únicas teclas que o programa vai "escutar"
const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
// ?????????
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"];

// acessa a raiz do DOM e adiciona o método "addEventListener", que permite que as ações do usuário da página sejam capturadas para permitir manipulação
// nesse caso o tipo de evento a ser capturado será o "keydown", ou seja, pressionar alguma tecla
// como o objetivo é fazer o personagem se movimentar, é preciso criar uma função (nesse caso o "event")
window.addEventListener("keydown", (event) => {
    // é criada uma constante "key", a qual será atribuída a tecla que o evento capturar
    const key  = event.key;

    // cria função "keyPressedAvaiable" que tem como objetivo verificar se as teclas que foram indicadas como sendo as desejadas de serem escutadas pelo programa (keysAvaiable) são correspondentes com a tecla atual que o usuário está pressionando
    // o retorno dessa função será "true" ou "false", se alguma das "keyPressedAvaiable" for verdadeira, a função roda
    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {
        return currentKey === key;
    })

    // caso o retorno da função anterior seja falsa, nada é retornado, ou seja, a função não roda
    if(!keyPressedAvaiable) return;

    // para cada uma das direções no array, se a classe do personagem já possuir uma delas, retirar da classe
    directions.forEach((direction) => {
        if(character.classList.contains(direction)) character.classList.remove(direction);
    })

    // verifica se a constante "key" corresponde a seta apontando para cima / baixo / esqueda / direita
    // usa o "classList.add()" para adicionar a sua classe a direção que o personagem está apontando,
    // caso seja verdade, é alterado o valor cartesiano do eixo x (arrowLeft / arrowRight) ou eixo y (arrowUp / arrowDown), com o valor correspondente à "velocidade" do personagem
    // no caso da posição cartesiana dele for diferente de 0, ele pode continuar andando, e se ele atingir a distância máxima da tela também deve parar (colidir)
    if(key === "ArrowUp" && yPosition !==0){
        character.classList.add("turnUp");
        yPosition -= VELOCITY;
    }

    if(key === "ArrowDown" && yPosition < Math.max(yPosition, (SCREEN_HEIGHT-200))){
        character.classList.add("turnDown" && yPosition < 740);
        yPosition += VELOCITY;
        console.log('.')
    }

    if(key === "ArrowLeft" && xPosition !== 0){
        character.classList.add("turnLeft");
        xPosition -= VELOCITY;
    }

    if(key === "ArrowRight" && xPosition < Math.max(xPosition, (SCREEN_WIDTH-100))){
        character.classList.add("turnRight");
        xPosition += VELOCITY;
    }

    // aqui é realmente alterada a posição do personagem em relação a sua distância em relação à margem de cima e esquerda
    containerCharacter.style.top = `${yPosition}px`
    containerCharacter.style.left = `${xPosition}px`
});
