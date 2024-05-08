#language: pt

@registration
Funcionalidade: Registro de Novo Usuário

Contexto:
  Dado que estou na página de registro de usuário

Cenário: Registro com sucesso
  Quando preencho o nome como "Batman Begins"
  E preencho o email como "batmanbegins@teste.com"
  E clico no botão de enviar
  Então o registro deve ser efetuado com sucesso

Cenário: Não é possível registrar sem informar um nome
  Quando preencho o email como "batmanbegins@teste.com"
  E clico no botão de enviar
  Então deve exibir uma mensagem de erro informando que o campo nome é obrigatório

Cenário: Não é possível registrar sem informar um email
  Quando preencho o nome como "Batman Begins"
  E clico no botão de enviar
  Então deve exibir uma mensagem de erro informando que o campo email é obrigatório

Cenário: Não é possível registrar com um email inválido
  Quando preencho o nome como "Bruce W"
  E preencho o email como "brucew.com"
  E clico no botão de enviar
  Então deve exibir uma mensagem de erro informando que o email é inválido

Cenário: Não deve ser possível registrar com dados já em uso
  Quando preencho o nome como "Batman"
  E preencho o email como "batmanbegins@teste.com"
  E clico no botão de enviar
  Então deve ocorrer um erro informando que o usuário já existe

Cenário: Não deve ser possível registrar deixando os campos obrigatórios em branco
  Quando clico no botão de enviar
  Então deve exibir uma mensagem de erro informando que o campo nome é obrigatório
  E deve exibir uma mensagem de erro informando que o campo email é obrigatório

Cenário: Não deve ser possível registrar com nome inválido
  Quando preencho o nome como "Bruce13"
  E preencho o email como "brucewayne@fest.com"
  E clico no botão de enviar
  Então deve exibir uma mensagem de erro informando que o nome é inválido

Cenário: Não deve ser possível registrar com um nome com mais de 100 caracteres
  Quando preencho o nome como "BruceWayneBruceWayneBruceWayneBruceWayneBruceWayneBruceWayneBruceWayneBruceWayneBruceWayneBruceWayneBruceWayneBruceWayneBruceWayneBruceWayneBruceWayneBruceWayneBruceWayneBruceWayneBruceWayne"
  E preencho o email como "bruce-wayne@qa.com"
  E clico no botão de enviar
  Então deve exibir uma mensagem de erro informando que o nome é muito longo

Cenário: Não deve ser possível registrar com um email com mais de 60 caracteres
  Quando preencho o nome como "Robin Batman"
  E preencho o email como "brucebrucebrucebrucebrucebrucebrucebrucebrucebrucebrucebrucebrucebrucebrucebrucebrucebruce@qa.com"
  E clico no botão de enviar
  Então deve exibir uma mensagem de erro informando que o email é muito longo

Cenário: Não deve ser possível registrar com um nome com menos de 4 caracteres
  Quando preencho o nome como "Bat"
  E preencho o email como "bat-man@qa.com"
  E clico no botão de enviar
  Então deve exibir uma mensagem de erro informando que o nome é muito curto
