import {
  Before,
  Given,
  Then,
  When,
} from "@badeball/cypress-cucumber-preprocessor";
import { ListPage } from "../pages/list.page";

const listPage = new ListPage();

Given("que estou na página de usuários cadastrados", () => {
  listPage.visitar();
});

Then("deve ser possível visualizar a lista de usuários cadastrados", () => {
  listPage.listaEncontrada();
});

Then("deve ser possível navegar entre as páginas de forma correta", () => {
  listPage.navegaEntrePaginas();
});

Then("a paginação deve estar desabilitada", () => {
  listPage.listaNaoPaginada();
});

Then(
  "o sistema deve exibir uma opção para cadastrar um novo usuário quando a lista estiver vazia",
  () => {
    listPage.listaNaoEncontrada();
    listPage.mensagemErroUsuariosVazios();
    listPage.cadastrarNovoUsuário();
  }
);

When("possuir menos de {string} usuarios", (quantidade) => {
  listPage.listarQuantidadeDeUsuarios(Number(quantidade));
});

When("possuir {string} paginas", (totalDePaginas) => {
  const quantidadeDeUsuarios = Number(totalDePaginas) * 6;
  listPage.listarQuantidadeDeUsuarios(quantidadeDeUsuarios);
});

When("possuir pelo menos um usuario", () => {
  listPage.listarQuantidadeDeUsuarios(1);
});

When("não possuir usuarios", () => {
  listPage.listarQuantidadeDeUsuarios(0);
});
