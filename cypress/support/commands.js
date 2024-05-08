import { faker } from "@faker-js/faker";

Cypress.Commands.add("cadastrarUsuario", () => {
  let createdUser;

  cy.fixture("user.json").then((user) => {
    cy.buscarUsuario(user.email).then((userFound) => {
      if (userFound) {
        return userFound;
      }

      cy.request({
        method: "POST",
        url: `${Cypress.env("apiBaseUrl")}/users`,
        body: user,
        failOnStatusCode: false,
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        expect(response.status).to.eq(201);
        createdUser = response.body;
        return createdUser;
      });
    });
  });
});

Cypress.Commands.add("cadastrarUsuarioFake", () => {
  let createdUser;

  const user = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
  };
  cy.buscarUsuario(user.email).then((userFound) => {
    if (userFound) {
      return userFound;
    }

    cy.request({
      method: "POST",
      url: `${Cypress.env("apiBaseUrl")}/users`,
      body: user,
      failOnStatusCode: false,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      createdUser = response.body;
      return createdUser;
    });
  });
});

Cypress.Commands.add("deletarUsuario", (id) => {
  cy.request({
    method: "DELETE",
    url: `${Cypress.env("apiBaseUrl")}/users/${id}`,
    failOnStatusCode: false,
  });
});

Cypress.Commands.add("buscarUsuario", (query) => {
  console.log("🚀 ~ Cypress.Commands.add ~ query:", query);
  cy.request({
    method: "GET",
    url: `${Cypress.env("apiBaseUrl")}/search?value=${query}`,
    failOnStatusCode: false,
  }).then((response) => {
    console.log("🚀 ~ Cypress.Commands.add ~ response:", response);
    expect(response.status).to.eq(200);
    expect(Array.isArray(response.body)).to.be.true;

    if (response.body?.length > 0) {
      return response.body[0];
    }

    return null;
  });
});

Cypress.Commands.add("verificarMensagemAlerta", (mensagem) => {
  cy.on("window:alert", (message) => {
    expect(message).to.equal(mensagem);
  });
});
