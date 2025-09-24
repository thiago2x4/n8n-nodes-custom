![Banner image](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

# n8n-nodes-custom

Esse repositorio contem um node customizado do n8n, que utiliza a API Random.org para gerar um numero aleatorio.

## Pré-requisitos

Você precisa instalar as seguinte ferramentas para rodar esse projeto:

* Node.js and npm. versão minima Node 20. Você pode achar as instruções de como instalar ambos usando nvm (Node Version Manager) para Linux, Mac, e WSL [Aqui](https://github.com/nvm-sh/nvm). E para Windows, guia da Microsoft [Instale o NodeJS no Windows](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).
* Docker e Docker compose. Você pode encontrar um guia de instalação para [Linux](https://docs.docker.com/desktop/setup/install/linux/), [Mac](https://docs.docker.com/desktop/setup/install/mac-install/). E [Windows](https://docs.docker.com/desktop/setup/install/windows-install/).
* Utilizando o terminal instale o n8n com:
  ```
  npm install n8n -g
  ```
* Aqui você pode encontrar um guia do n8n [configure seu ambiente de desenvolvimento](https://docs.n8n.io/integrations/creating-nodes/build/node-development-environment/).

## Para rodar o projeto
1. Na pasta raiz do projeto é necessario a criação de um arquivo .env nele você deve inserir as seguintes informações e alterar de acordo com as suas:
	```
	POSTGRES_USER=<seu-usuario>
	POSTGRES_PASSWORD=<senha>
	POSTGRES_DB=<nome-do-banco>

	POSTGRES_NON_ROOT_USER=<seu-usuario>
	POSTGRES_NON_ROOT_PASSWORD=<senha>
	```
2. Abra um terminal.
3. Naveque até a pasta raiz do projeto n8n-nodes-custom.
4. Para instalar as dependencias rode:
	```
	npm i
	```
5. Para compilar o projeto rode:
	```
	npm run build
	```
6. Com o Docker Desktop aberto, para criar o container rode:
	```
	docker compose up -d
	```
7. Abra o navegador e acesse (http://localhost:5678/).
8. Apos acessar, e fechar as janelas do n8n que aparecerão, va na opção "start from scratch".
9. Clicando no + no centro da tela ou a direita, busque por Random. (Sera o conector cujo o icone são duas setas que se cruzam.)
10. Insira o valor minimo e valor maximo, ou preencha os mesmos com variaveis de nodes anteriores e clique em "execute step"(botão laranja, no canto superior direto).
11. Seu numero verdadeiramente aleatorio sera gerado.
