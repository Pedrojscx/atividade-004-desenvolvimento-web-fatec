# Atividade 4 - Cabeçalho compartilhado

Projeto da disciplina Desenvolvimento Web I (Prof. Arley).

## Objetivo

Definir o cabeçalho HTML (logos, título e menu de semestres) em um único arquivo e fazer o servidor Express incluí-lo em todas as páginas, eliminando a repetição de código.

## Tecnologias

- Node.js (ES Modules)
- Express
- Dotenv
- HTML5
- CSS3

## Estrutura de pastas

```txt
tarefa-0611/
├── package.json
├── package-lock.json
├── .env
├── .env.example
├── .gitignore
├── README.md
└── src/
    ├── server/
    │   ├── main.js
    │   ├── paths.js
    │   ├── engine.js
    │   ├── routes.js
    │   └── partials/
    │       └── header.html
    └── public/
        ├── index.html
        ├── pages/
        │   ├── 1dsm.html ... 6dsm.html
        └── assets/
            ├── css/index.css
            └── images/ (os três logos .png)
```

- `main.js`: configura o Express, a engine de views, os arquivos estáticos, as rotas e o 404.
- `paths.js`: caminhos da pasta `public` e do cabeçalho.
- `engine.js`: função `renderPagina`, que monta a página com o cabeçalho.
- `routes.js`: rotas da aplicação (`listRoutes`).
- `partials/header.html`: o cabeçalho compartilhado.

## Rotas

- `/` -> página inicial (`index.html`)
- `/1dsm` a `/6dsm` -> página de cada semestre (`pages/Ndsm.html`)
- qualquer outra rota -> `404` com "Página não encontrada"

## Como o cabeçalho compartilhado funciona

1. Cada página tem o marcador `<!-- shared-header -->` no lugar onde o cabeçalho deve aparecer.
2. Em `main.js`, `app.engine("html", renderPagina)` registra uma engine própria para arquivos `.html`, e `app.set("views", publicPath)` aponta para a pasta das páginas.
3. As rotas chamam `res.render("pages/1dsm.html")`; o Express então executa `renderPagina`.
4. `renderPagina` lê a página e o `header.html` com `readFile` e troca o marcador pelo cabeçalho com `replace`, devolvendo o HTML completo ao navegador.

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Crie o `.env` a partir do `.env.example`, apenas se ele ainda não existir:

```bash
[ -f .env ] || cp .env.example .env
```

3. Inicie o servidor:

```bash
npm start
```

Ou, em modo desenvolvimento (reinicia ao salvar arquivos):

```bash
npm run dev
```

4. Abra no navegador o endereço mostrado no terminal (por padrão `http://localhost:3000`, ou a porta definida em `PORT` no `.env`).
