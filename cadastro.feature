

Feature: Cadastro de Usuário
  Como visitante do sistema
  Quero me cadastrar com Nome, E-mail e Senha
  Para acessar as funcionalidades disponíveis

    Scenario: E-mail já cadastrado
        Given que estou na página de cadastro
        And preencho o nome "ney santos" 
        And preencho e-mail "tester123@gmail.com" já existe no sistema 
        And preencho a senha "123456"      
        When clico no botão "Cadastrar"   
        Then devo ver a mensagem "E-mail já cadastrado"

     Scenario: Erro de servidor
        Given que estou na página de cadastro
        And preencho o nome "ney" 
        And preencho e-mail "ney123@gmail.com"
        And preencho a senha "123456"      
        When clico no botão "Cadastrar"   
        Then devo ver a mensagem "Erro no servidor, tente novamente mais tarde"
    
    Scenario: Responsividade
    Given que acesso a página de cadastro em um dispositivo mobile
    Then o formulário deve estar centralizado e visível sem necessidade de rolagem vertical

    

    Scenario Outline: Fazer cadastro
        Given que estou na página de cadastro
        And preencho o campo "<nome>", "<e-mail>", "<senha>"      
        When clico no botão "Cadastrar"   
        Then devo ver a mensagem "<mensagem>"


    Example: Cadastro de Usuário
        | nome        | e-mail               | senha     | mensagem                                     |
        | ney         | neyteste@gmail.com   | 123456    | Cadastro realizado com sucesso               |
        | ney         | ney$#_gmail.com      | 123456    | E-mail digitado é inválido                   | 
        | n           | neyteste@gmail.com   | 123456    | O nome tem que ter no mínimo 3 caracteres    | 
        | ney         | neyteste@gmail.com   | 123       | A Senha tem que ter no mínimo 6 caracteres   | 



Scenario Outline: Fazer cadastro com botao desabilitado
        Given que estou na página de cadastro
        And preencho o campo "<nome>", "<e-mail>", "<senha>"      
        When clico no botão "Cadastrar"   
        Then devo ver a mensagem "<mensagem>"


    Example: Cadastro de Usuário
        | nome        | e-mail               | senha     | mensagem                                     |
        | ney         | neyteste@gmail.com   | 123456    | Cadastro realizado com sucesso               |
        | ney         | ney$#_gmail.com      | 123456    | E-mail digitado é inválido                   | 
        | n           | neyteste@gmail.com   | 123456    | O nome tem que ter no mínimo 3 caracteres    | 
        | ney         | neyteste@gmail.com   | 123       | A Senha tem que ter no mínimo 6 caracteres   | 


    
       

    



