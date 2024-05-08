export class SearchPage {
  visitar() {
    cy.visit("/users");
  }

  inputDeBusca(inputValue) {
    cy.get('input[placeholder="E-mail ou nome"]').type(inputValue);
  }

  nomeDeUsuárioEncontrado(userName) {
    cy.get('[data-test="userDataName"]')
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.include(userName);
      });
  }

  emailDeUsuárioEncontrado(emailUsuario) {
    cy.get('[data-test="userDataEmail"]')
      .invoke("text")
      .then((textoDoUsuario) => {
        expect(textoDoUsuario.trim()).to.include(emailUsuario);
      });
  }

  nomeDeUsuárioNaoEncontrado() {
    cy.get('[data-test="userDataName"]').should("not.exist");
    cy.get("h3").should(
      "contain",
      "Ops! Não existe nenhum usuário para ser exibido.",
    );
  }

  emailDeUsuárioNaoEncontrado() {
    cy.get('[data-test="userDataEmail"]').should("not.exist");
    cy.get("h3").should(
      "contain",
      "Ops! Não existe nenhum usuário para ser exibido.",
    );
  }
}
