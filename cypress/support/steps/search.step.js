import {
  After,
  Before,
  Given,
  Then,
  When,
} from "@badeball/cypress-cucumber-preprocessor";
import { SearchPage } from "../pages/search.page";

const searchPage = new SearchPage();
let user;

Before({ tags: "@search" }, () => {
  cy.cadastrarUsuario().then((userData) => {
    user = userData;
  });
});

After({ tags: "@search" }, () => {
  if (user && user?.id) cy.deletarUsuario(user?.id);
});

Given("que estou na página de busca de usuários", () => {
  searchPage.visitar();
});

When("eu pesquisar pelo nome de um usuário existente {string}", (name) => {
  searchPage.inputDeBusca(name);
});

Then("devo ver o nome do usuário encontrado {string}", (name) => {
  searchPage.nomeDeUsuárioEncontrado(name);
});

When("eu pesquisar pelo email de um usuário existente {string}", (email) => {
  searchPage.inputDeBusca(email);
});

Then("devo ver o email do usuário encontrado {string}", (email) => {
  searchPage.emailDeUsuárioEncontrado(email);
});

When(
  "eu pesquisar por um nome de usuário que não existe {string}",
  (nomeInexistente) => {
    searchPage.inputDeBusca(nomeInexistente);
  },
);

Then(
  "devo ver uma mensagem indicando que nenhum usuário foi encontrado via nome",
  () => {
    searchPage.nomeDeUsuárioNaoEncontrado();
  },
);

When(
  "eu pesquisar por um email de usuário que não existe {string}",
  (emailInexistente) => {
    searchPage.inputDeBusca(emailInexistente);
  },
);

Then(
  "devo ver uma mensagem indicando que nenhum usuário foi encontrado via email",
  () => {
    searchPage.emailDeUsuárioNaoEncontrado();
  },
);
