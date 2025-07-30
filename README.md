<div align="center">
  <a href="https://vinici.us.com/">
    <img src="https://www.vinici.us.com/images/logo.png" alt="Logo" width="120" height="120">
  </a>
  <h1 align="center">Meu site pessoal · vinici.us.com</h1>
  <p align="center">
    Analista fullstack certificado pela Microsoft™ com mais de 20 anos de experiência em desenvolvimento com código limpo, elegante e coeso.
    <br />
	<br />
    Veja o projeto no ar <a href="https://vinici.us.com/"><strong>clicando aqui</strong>.</a>
    <br />
    <br />
    <a href="https://github.com/vinicius-stutz/vinicius-stutz.github.io/issues">Reportar Bug</a>
    - <a href="https://github.com/vinicius-stutz/vinicius-stutz.github.io/issues">Solicitar Feature</a>
  </p>
</div>

---

**Sumário**
[TOC]

## Sobre o Projeto

Este repositório contém o código-fonte do meu portfólio pessoal, desenvolvido como um site de página única (SPA - Single Page Application) para apresentar minhas habilidades, experiência profissional e projetos. O site é construído com tecnologias web modernas, com foco em performance, design responsivo e carregamento dinâmico de conteúdo.

### ✨ Features

- **Design Responsivo**: Totalmente adaptável para desktops, tablets e dispositivos móveis.
- **Carregamento Dinâmico**: O conteúdo das seções (Sobre, Experiência, FAQ, etc.) é carregado dinamicamente a partir de arquivos HTML e de um `viewModel.json` central, tornando a manutenção do conteúdo mais simples.
- **Integrações de Terceiros**: Utiliza serviços como Google Analytics, Tawk.to (chat), Jotform (formulário de contato) e Raindrop.io (coleções).
- **CI/CD com GitHub Actions**: Processo de build e deploy automatizado. Um push na branch `release` dispara uma action que compila o projeto e publica o resultado na branch `master` para o GitHub Pages.
- **Performance**: Otimizado para um carregamento rápido, utilizando técnicas como lazy loading para imagens e iframes.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

- **Build Tool**: Vite
- **Frontend**:
  - HTML5
  - SCSS
  - JavaScript (ES Modules)
- **CI/CD**: GitHub Actions
- **Hosting**: GitHub Pages

---

## ⚙️ Rodando o Projeto Localmente

Para executar este projeto em seu ambiente de desenvolvimento local, siga os passos abaixo.

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (geralmente instalado com o Node.js)

### Instalação e Execução

1.  Clone o repositório:
    ```sh
    git clone https://github.com/vinicius-stutz/vinicius-stutz.github.io.git
    ```
2.  Navegue até o diretório do projeto:
    ```sh
    cd vinicius-stutz.github.io
    ```
3.  Instale as dependências. É recomendado usar `npm ci` para garantir que as versões exatas do `package-lock.json` sejam instaladas:
    ```sh
    npm ci
    ```
4.  Inicie o servidor de desenvolvimento:
    ```sh
    npm run dev
    ```
    O site estará disponível em `http://localhost:5173` (ou outra porta, se a 5173 estiver em uso).

### Build

Para gerar a versão de produção do site (que será colocada na pasta `dist`):

```sh
npm run build
```

---

## 📦 Deploy

O deploy é automatizado através do workflow definido em `.github/workflows/deploy.yml`. O processo funciona da seguinte forma:

1.  Todo o desenvolvimento é feito em outras branches (ex: `develop`).
2.  Quando uma nova versão está pronta para ser publicada, as alterações são mescladas na branch `release`.
3.  Um `push` na branch `release` aciona a GitHub Action.
4.  A Action executa o `npm run build` para compilar e otimizar os arquivos do projeto.
5.  O conteúdo da pasta `dist` gerada é então copiado e commitado na branch `master`, que é a branch servida pelo GitHub Pages.

Este fluxo garante que a branch `master` contenha apenas os arquivos estáticos prontos para produção.

---

## ⚖️ Licença

O conteúdo e o código-fonte deste projeto estão licenciados sob a **Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License**.

Veja o arquivo `LICENSE` para mais detalhes (se aplicável) ou os comentários de cabeçalho nos arquivos-fonte.
