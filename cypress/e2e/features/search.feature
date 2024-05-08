# language: pt

@search
Funcionalidade: Pesquisar Usuários

Contexto:
Dado que estou na página de busca de usuários

Cenário: Pesquisar usuário pelo nome
  Quando eu pesquisar pelo nome de um usuário existente "Bruce Wayne"
  Então devo ver o nome do usuário encontrado "Bruce Wayne"

Cenário: Pesquisar usuário pelo email
  Quando eu pesquisar pelo email de um usuário existente "brucewayne@teste.com"
  Então devo ver o email do usuário encontrado "brucewayne@teste.com"

Cenário: Pesquisar usuário por nome inexistente
  Quando eu pesquisar por um nome de usuário que não existe "Usuário Inexistente"
  Então devo ver uma mensagem indicando que nenhum usuário foi encontrado via nome

Cenário: Pesquisar usuário por email inexistente
  Quando eu pesquisar por um email de usuário que não existe "usuarioinexistente@teste.com"
  Então devo ver uma mensagem indicando que nenhum usuário foi encontrado via email
