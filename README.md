# Desafio Salestime - NodeJS
## Requisitos
* NodeJS (12.X.X)
* TypeScript(3.X.X)
* NPM (6.X.X)

## Dependencias
```bash
 "dependencies": {
 "apollo-server": "^2.19.1",
 "class-validator": "^0.12.2",
 "graphql": "^15.4.0",
 "reflect-metadata": "^0.1.13",
 "sqlite3": "^5.0.0",
 "type-graphql": "^1.1.1",
 "typeorm": "^0.2.29",
 "typeorm-encrypted": "^0.5.6"
 }
```

## Como Rodar o programa
- Primeiro, instale todos os pacotes utilizando:
```bash
npm install
```
- Depois, rode o codigo utilizando:
```bash 
npm start
```
## Exemplo de queries e mutations
- Selecionar todos os usuários:
```graphql
    query {
        users {
        id
  	    firstname
        lastname
        nickname
        email
        password
  }
}
```
Selecionar usuário por id:
    query {
        user(id: "2") {
        id
        firstname
        lastname
        nickname
        email
        password
  }
}
 Criar um usuário:
    createUser(data: {
        firstname: "Sponge"
        lastname: "Bob"
        nickname: "bobesponja"
  	    email: "sqr@pnts.com"
        password: "gary"
  })
  
  {
    id
    first name
    last name
    nickname
    email
    password
  }
}
Editar usuário:
    mutation {
        updateUser(
        id: "2", 
        data: {
    	nickname: "Patrick"
  	})

    {
        id
        firstname
        lastname
        nickname
        email
        password
    }
}

Deletar um usuário:
    mutation {
        deleteUser(id: "3")
    }
