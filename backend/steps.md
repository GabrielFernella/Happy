# Pacotes

1. yarn init -y //iniciar projeto
2. yarn add express
3. yarn add @types/express -D
4. yarn add typescript -D //é necessário instalar o typescript para que o node consiga copilar
5. yarn tsc --init //arquivo gerado para as configurações do typescript
6. yarn add ts-node-dev -D //pacote que se assemelha ao nodemon
7. yarn add typeorm sqlite3 //Instalar o ORM e o sqlite3
8. yarn add multer // para manipulação de arquivos
9. yarn add @types/multer -D

# Comandos

1. yarn typeorm migration:create -n create-orphanages //Cria as migrations (Esse comando poderá ser executado depois de finalizar todas as configurações de conexão e pastas do banco)
2. yarn typeorm migration:run
3. yarn typeorm migration:revert
4. yarn typeorm migration:create -n create_images
5. yarn typeorm migration:run

# Processos

1. Criar a estrutura da aplicação
2. instalar os pacotes necessários para a aplicação
3. Criar os arquivos de conexão com o banco de dados
4. criar as migrations do banco
5. criar o script para rodar typescript com o typeorm

# Notas

1:31min
