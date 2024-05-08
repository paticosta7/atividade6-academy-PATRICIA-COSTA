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

  // nomeDeUsuárioEncontrado(nomeUsuario) {
  //   cy.get('[data-test="userDataName"]')
  //     .invoke("text")
  //     .then((textoDoUsuario) => {
  //       expect(textoDoUsuario.trim()).to.include(`Nome: ${nomeUsuario}`);
  //     });
  // }

  // emailDeUsuárioEncontrado(emailUsuario) {
  //   cy.get('[data-test="userDataEmail"]')
  //     .invoke("text")
  //     .then((textoDoUsuario) => {
  //       expect(textoDoUsuario.trim()).to.include(`Email: ${emailUsuario}`);
  //     });
  // }

  // buscarUsuarioPeloEmail(emailUsuario) {
  //   this.inputDeBusca(emailUsuario);
  //   this.emailDeUsuárioEncontrado(emailUsuario);
  // }

  // buscarUsuarioPeloNome(nomeUsuario) {
  //   this.inputDeBusca(nomeUsuario);
  //   this.nomeDeUsuárioEncontrado(nomeUsuario);
  // }
  // encontrarUsuarioPeloId(idUsuario) {
  //   cy.contains(`ID: ${idUsuario}`).click();
  // }

  // atualizarInformacoesDoUsuario(novosDados) {
  //   cy.get("#name").clear().type(novosDados.nome);
  //   cy.get("#email").clear().type(novosDados.email);
  //   cy.get(".sc-kpDqfm").click();
  // }
}
