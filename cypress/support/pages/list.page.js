import { faker } from "@faker-js/faker";

export class ListPage {
  visitar() {
    cy.visit("/users");
  }

  listaEncontrada() {
    cy.get("#listaUsuarios").should("exist");
  }

  listaNaoEncontrada() {
    cy.get("#listaUsuarios").should("not.exist");
  }

  alertaErroServidor() {
    cy.get("p").should(
      "contain",
      "Não foi possível consultar os usuários cadastrados."
    );
  }

  mensagemErroUsuariosVazios() {
    cy.get("h3").should(
      "contain",
      "Ops! Não existe nenhum usuário para ser exibido."
    );
  }

  cadastrarNovoUsuário() {
    cy.get("p").should("contain", "Cadastre um novo usuário");
  }

  navegaEntrePaginas() {
    // Estado inicial
    cy.get("#paginacaoVoltar").should("be.disabled");
    cy.get("#paginacaoProximo").should("not.be.disabled");
    cy.get("#paginacaoAtual")
      .invoke("text")
      .then((paginacao) => {
        const dadosPaginacao = this.dadosPaginacaoAtual(paginacao);

        expect(dadosPaginacao.paginaAtual).to.equal(1);
      });

    // Ir para próxima página
    cy.get("#paginacaoProximo").click();
    cy.get("#paginacaoVoltar").should("not.be.disabled");
    cy.get("#paginacaoAtual")
      .invoke("text")
      .then((paginacao) => {
        const dadosPaginacao = this.dadosPaginacaoAtual(paginacao);

        expect(dadosPaginacao.paginaAtual).to.equal(2);
      });

    // Voltar para página anterior
    cy.get("#paginacaoVoltar").click();
    cy.get("#paginacaoVoltar").should("be.disabled");
    cy.get("#paginacaoAtual")
      .invoke("text")
      .then((paginacao) => {
        const dadosPaginacao = this.dadosPaginacaoAtual(paginacao);

        expect(dadosPaginacao.paginaAtual).to.equal(1);
      });
  }
  listaNaoPaginada() {
    cy.get("#paginacaoVoltar").should("be.disabled");
    cy.get("#paginacaoProximo").should("be.disabled");

    cy.get("#paginacaoAtual")
      .invoke("text")
      .then((paginacao) => {
        const dadosPaginacao = this.dadosPaginacaoAtual(paginacao);

        expect(dadosPaginacao.paginaAtual).to.equal(1);
        expect(dadosPaginacao.totalPaginas).to.equal(1);
      });
  }

  dadosPaginacaoAtual(paginacao) {
    let totalPaginas = 1;
    let paginaAtual = 1;
    console.log(paginacao);
    paginaAtual = Number(paginacao.split(" de ")[0]);
    totalPaginas = Number(paginacao.split(" de ")[1]);

    return { paginaAtual, totalPaginas };
  }
  listarQuantidadeDeUsuarios(numero) {
    //quantos usuarios desejo
    let mookUsers = [];
    for (let index = 0; index < numero; index++) {
      //quantidade de vezes que o usuario indicar
      const mookUser = {
        id: faker.datatype.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
      };
      mookUsers.push(mookUser); //aqui ele leva para lita de usuarios
    }

    cy.intercept("GET", "/api/v1/users", {
      statusCode: 200,
      body: mookUsers,
    });
  }
}
