# Me ajuda? 

Como projeto final do bootcamp {reprograma}, essa API tem como proposta resolver um problema real de pessoas com alguma limitação e pessoas que querem ajudar (voluntários) em tarefas do dia a dia. 

### Instalação :woman_technologist:

Para utilizar essa API, é necessário ter instalado na sua máquina 

`Fork` esse repositório para seu github. `Clone-o` na sua máquina. Após entrar na pasta pelo PROMPT, dê `npm init` e `npm install`.

### Utilização 

Para inicialiazar o server:
```
npm run start
```

Para inicializar o server em modo desenvolvedor:
```
npm run start:dev
```

#### Rotas (CRUD)

A API está sendo escutada na `porta 3000` e hospedada no heroku, use `https://projetoagatha.herokuapp.com/`

#### GET
- `/usuarios` - visualizar todos os usuários 
- `/voluntarios` - visualizar todos os voluntários 
- `/usuarios/:id` - visualizar usuário por id
- `/voluntarios/:id` - visualizar voluntários po id

#### POST
- `/usuarios` - adicionar usuários 
- `/voluntarios` - adicionar voluntários 

#### PATCH
- `/usuarios/:usuarioId/voluntarios` - adicionar voluntário(s) ao usuário
- `/usuarios/:id` - atualizar dados do usuário por id 
- `/voluntarios/:id` - atualizar dados do voluntário por id

#### DELETE
- `/usuarios/:id` - remover usuário por id
- `/voluntarios/:id` - remover voluntários por id
