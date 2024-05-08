export class UpdatePage {
  visitar(id) {
    cy.visit(`/users/${id}`);
  }

  clicarEditar() {
    cy.get("button.sc-kpDqfm.dGvNqp").first().click();
  }
  preencherNome(nome) {
    cy.get("#userName").type(nome);
  }

  preencherEmail(email) {
    cy.get("#userEmail").clear().type(email);
  }

  clicarBotaoSalvar() {
    cy.get("button.sc-kpDqfm.dGvNqp").last().click();
  }
  inputNome() {
    cy.get("#userName").should("have.attr", "disabled");
  }

  inputEmail() {
    cy.get("#userEmail").should("have.attr", "disabled");
  }
  pegarMensagemDeSucesso() {
    return cy.get(".go3958317564");
  }
}