import {
  Given,
  After,
  When,
  Then,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
import { UpdatePage } from "../pages/update.page";

const updatePage = new UpdatePage();
let user;

Before({ tags: "@update" }, () => {
  cy.cadastrarUsuarioFake().then((userData) => {
    user = userData;
  });
});

After({ tags: "@update" }, () => {
  if (user && user?.id) cy.deletarUsuario(user?.id);
});

Given("que estou na página de detalhes de usuário", () => {
  updatePage.visitar(user.id);
});

When("clico em editar usuario", () => {
  updatePage.clicarEditar();
});

When("preencho campo de nome como {string}", (name) => {
  updatePage.preencherNome(name);
});

When("preencho campo de email como {string}", (email) => {
  updatePage.preencherEmail(email);
});

When("clico no botão de salvar", () => {
  updatePage.clicarBotaoSalvar();
});

Then("a atualização deve ser realizar com sucesso", () => {
  updatePage
    .pegarMensagemDeSucesso()
    .should("be.visible")
    .and("contain", "Informações atualizadas com sucesso!");
});

Then("deve ser exibido mensagem de formato inválido", () => {
  updatePage
    .pegarMensagemDeErro()
    .should("be.visible")
    .and("contain", "Formato de e-mail inválido");
});

Given("o e-mail {string} já está em uso por outro usuário", () => {});
Then(
  "a operação de atualização deve ser bloqueada com a mensagem {string}",
  () => {
    updatePage
      .pegarMensagemAlerta()
      .should("be.visible")
      .and("contain", "Este e-mail já é utilizado por outro usuário.");
  }
);
