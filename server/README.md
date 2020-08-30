# API

## First
    Install dependencys
### Using npm  
    npm install 
### Usin yarn
    yarn

## Run Application
    For running aplication in firs moment you need run the migrations of Knex
### Run migration
    npm run knex:migrate
    or
    yarn knex:migrate
### Start Server    
    The server start in port 4444 for all requests
#### Using npm:
    npm run dev:log
#### Using yarn:
    yarn dev:log

## Database
    After running knex migrations, you database is created in src/databse/database.sqlite
    All the binaries files uploaded is present in src/database/local-storage. 
## Routes
    Application routes is mapped in src/routes.ts, using http verb for create or list registers.

## API Base Address
    http://localhost:4444
## Mac
    http://localhost:4444/mac
    get and post
## Log
    http://localhost:4444/log
    get: List all
    post: Create
## binary

### List and Create
    http://localhost:4444/log
    get: List all
    post: Create using multiparty-form body
### Download    
    http://localhost:4444/log/:id
    get: Downlaod the arquive saved in src/database/local-storage
    *OBS: The orignal name of binary is in header content
        using 'Content-disposition' key.
           
# Resources

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
