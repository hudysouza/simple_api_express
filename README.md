# simple_api_express
Api simples em Typescript utilziando Express e TypeORM.

### Dependencias
* [Yarn](https://yarnpkg.com/)
* SqlServer
* Nodejs

### Instalando Dependencias

```bash
git clone https://github.com/hudysouza/simple_api_express.git
cd simple_api_express
yarn
```

### Condigurando de Banco de Dados

```typescript
// .\src\config\databaseCondif.ts

const connection = createConnection({
  type: 'mssql', // Tipo de Banco de dados (Sql Server)
  host: 'localhost', // Endereço do Banco de Dados
  port: 1433, // Porta
  username: 'sa', // Nome de Usuario
  password: 'KNLM90@admin', // Senha
  database: 'teste', // Nome do Banco de Dados
  entities: [Pessoa],
  synchronize: true,
  logging: false,
  options: {
    enableArithAbort: true
  }
})
```

É provavel que haja problemas ao conectar com o banco de dados Sql Server, caso esteja tendo dificuldades verificar link abaixo.

[mssql tedius connectionerror failed](https://stackoverflow.com/questions/25577248/node-js-mssql-tedius-connectionerror-failed-to-connect-to-localhost1433-conn?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)


É necessario criar o database no SqlServer antes de executar o projeto, as migration serão sincronizadas automaticamente pelo TypeORM

```sql
CREATE DATABASE teste
```


### Executar projeto

```
yarn server
```

### Documentação

* [Express](https://expressjs.com/pt-br/)
* [TypeORM](https://typeorm.io/#/)
