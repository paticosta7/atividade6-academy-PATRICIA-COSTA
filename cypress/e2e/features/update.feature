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


    Cenário: Tentar atualizar um usuário com email inválido
    Quando clico em editar usuario
    E preencho campo de nome como "Batman Begins"
    E preencho campo de email como "batmanbegin.com"
    E clico no botão de salvar
    Então deve ser exibido mensagem de formato inválido