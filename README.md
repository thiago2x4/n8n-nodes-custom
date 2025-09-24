![Banner image](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

# n8n-nodes-custom

Esse repositorio contem um node customizado do n8n, que utiliza a API Random.org para gerar um numero aleatorio.

## Pré-requisitos

Você precisa instalar das seguinte ferramentas para rodar esse projeto.:

* Node.js and npm. versão minima Node 20. Você pode achar as instruções de como instalar abos usando nvm (Node Version Manager) para Linux, Mac, e WSL [here](https://github.com/nvm-sh/nvm). E para Windows, guia da Microsoft [Install NodeJS on Windows](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).
* Docker e Docker compose. Você pode encontrar um gui de instalação para Linux (https://docs.docker.com/desktop/setup/install/linux/). Mac (https://docs.docker.com/desktop/setup/install/mac-install/). E Windows (https://docs.docker.com/desktop/setup/install/windows-install/)
* Instale o n8n com:
  ```
  npm install n8n -g
  ```
* Aqui você pode encontrar um guia do n8n [set up your development environment](https://docs.n8n.io/integrations/creating-nodes/build/node-development-environment/).

## Para rodar o projeto
1. Abra um terminal.
2. Naveque até a pasta raiz do projeto.
3. Rode `npm i` para instalar as dependencias.
4. Rode `npm run build` para compilar o projeto.
5. Abra o navegador e acesse (http://localhost:5678/).
