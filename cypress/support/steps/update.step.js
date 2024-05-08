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

Then("deve ser eibido mensagem de formato inválido", () => {
  updatePage
    .pegarMensagemErro()
    .should("be.visible")
    .and("contain", "Formato de e-mail inválido");
});
