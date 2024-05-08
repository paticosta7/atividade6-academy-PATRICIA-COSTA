# language: pt

@update
Funcionalidade: Atualização de usuario

Contexto:
  Dado que estou na página de detalhes de usuário

Cenário: Atualização com sucesso
  Quando clico em editar usuario 
  E preencho campo de nome como "Batman Begins"
  E preencho campo de email como "batmanbegins@teste.com"
  E clico no botão de salvar
  Então a atualização deve ser realizar com sucesso



# Funcionalidade: Busca e atualização de usuários

#   Cenário: Buscar usuário pelo email
#     Dado que estou na página de usuários
#     Quando eu busco pelo email "<email>"
#     Então eu devo ver os detalhes do usuário com email "<email>"

#   Cenário: Buscar usuário pelo nome
#     Dado que estou na página de usuários
#     Quando eu busco pelo nome "<nome>"
#     Então eu devo ver os detalhes do usuário com nome "<nome>"

#   Cenário: Atualizar informações do usuário
#     Dado que estou na página de usuários
#     Quando eu encontro o usuário com ID "<id>"
#     E eu atualizo as informações do usuário com:
#       | Nome       | Email          |
#       | <novoNome> | <novoEmail>    |
#     Então as informações do usuário devem ser atualizadas corretamente

