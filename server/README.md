# Requisicao na API

## Endereco
    http://localhost:4444
## Mac
    http://localhost:4444/mac
    get and post
## Log
    http://localhost:4444/log
    get and post
## binary
    http://localhost:4444/log
    get and post(multiparty-form)
           
# Funcionalidades

## Binario
    Recebe um binario e sua versao para armazenamento
    
## Log
    A cada x tempo o servidor recebe uma requisicao de um dispositivo 
        e armazena qual dispostivo fez a requisicao(MAC) e data e hora

## MAC
    Cada dispositivo tera um mac cadastrado para se retirar relatorios de
        status e qual binario/versao esta rodando atualmente

# Futuras implementacoes

## Update Logs
    Armazenar cada update feito em cada dispositivo em um log a parte 
        contendo a versao do antigo binario e a nova, a fim de roolback
