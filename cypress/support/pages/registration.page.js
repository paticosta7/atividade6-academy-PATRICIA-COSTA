export class RegistrationPage {
  visitar() {
    cy.visit("/users/novo");
  }

  preencherNome(nome) {
    cy.get("#name").clear().type(nome);
  }

  preencherEmail(email) {
    cy.get("#email").clear().type(email);
  }

  clicarBotaoEnviar() {
    cy.get(".sc-kpDqfm").click();
  }

  pegarMensagemErro() {
    return cy.get(".sc-cPiKLX");
  }

  pegarMensagemErroNome() {
    return cy.get("span.sc-cPiKLX.feFrSQ");
  }

  pegarMensagemDeSucesso() {
    return cy.get(".go3958317564");
  }

  pegarMensagemAlerta() {
    return cy.on("window:alert", (message) => {
      return message;
    });
  }

  limparUsuario() {
    return cy.buscarUsuario("batmanbegins@teste.com").then((usuario) => {
      console.log(
        "🚀 ~ RegistrationPage ~ returncy.buscarUsuario ~ usuario:",
        usuario,
      );
      if (usuario?.id) {
        cy.deletarUsuario(usuario.id);
      }
    });
  }
}

export default RegistrationPage;
