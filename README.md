![Banner image](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

# n8n-nodes-custom

Esse repositorio contem um node customizado do n8n, que utiliza a API Random.org para gerar um numero aleatorio.

## Pré-requisitos

Você precisa instalar as seguinte ferramentas para rodar esse projeto:

* Node.js and npm. versão minima Node 20. Você pode achar as instruções de como instalar ambos usando nvm (Node Version Manager) para Linux, Mac, e WSL [Aqui](https://github.com/nvm-sh/nvm). E para Windows, guia da Microsoft [Instale o NodeJS no Windows](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).
* Docker e Docker compose. Você pode encontrar um guia de instalação para [Linux](https://docs.docker.com/desktop/setup/install/linux/), [Mac](https://docs.docker.com/desktop/setup/install/mac-install/). E [Windows](https://docs.docker.com/desktop/setup/install/windows-install/).

## Para rodar o projeto

1. Abra um terminal.
2. Naveque até a pasta raiz do projeto n8n-nodes-custom.
3. Para instalar as dependencias rode:
	```
	npm i
	```
4. Para compilar o projeto rode:
	```
	npm run build
	```
5. Com o Docker Desktop aberto, para criar o container rode:
	```
	docker compose up -d
	```
6. Abra o navegador e acesse (http://localhost:5678/).
7. Faça o cadastro no n8n.
8. Apos acessar, e fechar as janelas do n8n que aparecerão, va na opção "start from scratch".
9. Clicando no + no centro da tela ou a direita, busque por Random. (Sera o conector cujo o icone são duas setas que se cruzam.)
10. Insira o valor minimo e valor maximo e clique em "execute step"(botão laranja, no canto superior direto).
11. Seu numero verdadeiramente aleatorio sera gerado.

Observações: 
1. Respeite a estrutura do projeto, alterar o nome da pasta/arquivos e mover pastas/arquivos para outros diretorios pode resultar no não-funcionamento do node.
2. O arquivo .env por questões praticas não foi adicionado ao .gitignore. Ja foi previamente configurado, mas pode ser editado caso necessario.
