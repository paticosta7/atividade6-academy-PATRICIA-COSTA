import {
  After,
  Given,
  Then,
  When,
} from "@badeball/cypress-cucumber-preprocessor";
import RegistrationPage from "../pages/registration.page.js";

const registrationPage = new RegistrationPage();

After({ tags: "@registration" }, () => {
  registrationPage.limparUsuario();
});

Given("que estou na página de registro de usuário", () => {
  registrationPage.visitar();
});

When("preencho o nome como {string}", (nome) => {
  registrationPage.preencherNome(nome);
});

When("preencho o email como {string}", (email) => {
  registrationPage.preencherEmail(email);
});

When("clico no botão de enviar", () => {
  registrationPage.clicarBotaoEnviar();
});

Then("o registro deve ser efetuado com sucesso", () => {
  registrationPage
    .pegarMensagemDeSucesso()
    .should("be.visible")
    .and("contain", "Usuário salvo com sucesso!");
});

Then(
  "deve exibir uma mensagem de erro informando que o campo nome é obrigatório",
  () => {
    registrationPage
      .pegarMensagemErro()
      .should("be.visible")
      .and("contain", "O campo nome é obrigatório.");
  },
);

Then(
  "deve exibir uma mensagem de erro informando que o campo email é obrigatório",
  () => {
    registrationPage
      .pegarMensagemErro()
      .should("be.visible")
      .and("contain", "O campo e-mail é obrigatório.");
  },
);

Then(
  "deve exibir uma mensagem de erro informando que o nome é inválido",
  () => {
    registrationPage
      .pegarMensagemErro()
      .should("be.visible")
      .and("contain", "Formato do nome é inválido.");
  },
);

Then(
  "deve exibir uma mensagem de erro informando que o email é inválido",
  () => {
    registrationPage
      .pegarMensagemErro()
      .should("be.visible")
      .and("contain", "Formato de e-mail inválido");
  },
);

Then("deve ocorrer um erro informando que o usuário já existe", () => {
  cy.verificarMensagemAlerta("User already exists.");
});

Then(
  "deve exibir uma mensagem de erro informando que o nome é muito longo",
  () => {
    registrationPage
      .pegarMensagemErro()
      .should("be.visible")
      .and("contain", "Informe no máximo 100 caracteres para o nome");
  },
);

Then(
  "deve exibir uma mensagem de erro informando que o email é muito longo",
  () => {
    registrationPage
      .pegarMensagemErro()
      .should("be.visible")
      .and("contain", "Informe no máximo 60 caracteres para o e-mail");
  },
);

Then(
  "deve exibir uma mensagem de erro informando que o nome é muito curto",
  () => {
    registrationPage
      .pegarMensagemErroNome()
      .should("be.visible")
      .and("contain", "Informe pelo menos 4 letras para o nome.");
  },
);
