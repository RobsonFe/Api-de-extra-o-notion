# API de Extração de Dados do Notion com Node.js e TypeScript

Este projeto é uma API desenvolvida em Node.js com TypeScript para acessar e manipular dados da API do Notion. Atualmente, a aplicação funciona como um extrator de dados que pode ser executado para realizar operações no Notion, com planos futuros para a implementação de endpoints RESTful.

## Sumário

-   [Instalação](#instalação)
-   [Configuração](#configuração)
-   [Uso](#uso)
-   [Licença](#licença)

## Instalação

### Pré-requisitos

-   [Node.js](https://nodejs.org/) (v14 ou superior)
-   [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
-   Chave de API do Notion

### Passos

1. Clone o repositório:

    ```bash
    git clone https://github.com/RobsonFe/Api-de-extra-o-notion.git
    cd Api-de-extra-o-notion
    ```

2. Instale as dependências:

    ```bash
    npm install
    # ou
    yarn install
    ```

3. Compile o TypeScript:
    ```bash
    npm run build
    # ou
    yarn build
    ```

## Configuração

1. Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API do Notion:

    ```
    NOTION_API_KEY=sua_chave_da_api_notion
    ```

2. Configure os parâmetros necessários em `config.ts`, como IDs de bases de dados do Notion, para adequar às suas necessidades.

## Uso

### Executando o Extrator

Para executar o extrator de dados, utilize o comando:

```bash
npm start
# ou
yarn start
```

Este comando irá iniciar o processo de extração de dados conforme configurado. No momento, o projeto não possui endpoints RESTful definidos, mas eles serão adicionados em versões futuras.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
