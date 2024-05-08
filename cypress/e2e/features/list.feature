# language: pt

@list
Funcionalidade: Listagem de Usuários

Contexto:
    Dado que estou na página de usuários cadastrados

Cenário: Listar usuários com sucesso
    Quando possuir pelo menos um usuario
    Então deve ser possível visualizar a lista de usuários cadastrados
    
Cenário: Navegar entre páginas corretamente
    Quando possuir "2" paginas
    Então deve ser possível navegar entre as páginas de forma correta

Cenário: Não exibir paginação com menos de 6 usuários
    Quando possuir menos de "6" usuarios
    Então a paginação deve estar desabilitada

Cenário: Exibir opção para cadastrar novo usuário quando não houver usuários
    Quando não possuir usuarios
    Então o sistema deve exibir uma opção para cadastrar um novo usuário quando a lista estiver vazia
