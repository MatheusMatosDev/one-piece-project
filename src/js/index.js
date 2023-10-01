// objetivo 1 - quando clicar no botao do personagem da lista, marcar como selecionado
// passo 1 - pegar os botoes no js pra poder verificar quando o usuario clicar em cima de um deles
// passo 2 - adicionar a classe "selected" no botao que o usuário clicou
// passo 3 - verificar se ja existe um botao selecionado, se sim, devemos remover a seleçao dele

// objetivo 2 - quando clicar no botao do personagem mostrar as informaçoes do personagem
// passo 1 - pegar os personagens no js pra poder mostrar ou esconder eles

// ob1passo 1 - pegar os botoes no js pra poder verificar quando o usuario clicar em cima de um deles

const buttons = document.querySelectorAll(".button");

const characters = document.querySelectorAll(".character");

buttons.forEach((button, indice) => {
  button.addEventListener("click", () => {
    desselecionarButton();
    desselecionarCharacter();

    button.classList.add("selected");
    characters[indice].classList.add("selected");
  });
});
function desselecionarCharacter() {
  const characterSelected = document.querySelector(".character.selected");

  characterSelected.classList.remove("selected");
}

function desselecionarButton() {
  const buttonSelected = document.querySelector(".selected.button");
  buttonSelected.classList.remove("selected");
}
