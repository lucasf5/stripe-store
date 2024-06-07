# Loja Online com Next.js e Stripe

Bem-vindo ao repositório da Loja Online! Este projeto é uma aplicação web de e-commerce desenvolvida usando Next.js para o frontend e Stripe para o processamento de pagamentos. Este README fornece uma visão geral do projeto, instruções para configuração e desenvolvimento, e outras informações úteis.

## Sumário

- [Loja Online com Next.js e Stripe](#loja-online-com-nextjs-e-stripe)
  - [Sumário](#sumário)
  - [Visão Geral](#visão-geral)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Funcionalidades](#funcionalidades)
  - [Instalação](#instalação)
    - [Pré-requisitos](#pré-requisitos)
    - [Passos para Instalação](#passos-para-instalação)
  - [Configuração](#configuração)
    - [Configurando o Stripe](#configurando-o-stripe)
    - [Configuração Adicional](#configuração-adicional)
  - [Uso](#uso)
    - [Desenvolvimento](#desenvolvimento)
    - [Build para Produção](#build-para-produção)
  - [Contribuição](#contribuição)
  - [Licença](#licença)

## Visão Geral

Este projeto é uma aplicação de e-commerce onde os usuários podem navegar por produtos, adicioná-los ao carrinho e finalizar a compra usando Stripe para o processamento de pagamentos. O objetivo é demonstrar a integração de um sistema de pagamentos seguro e eficiente com uma interface de usuário moderna e responsiva.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização no lado do servidor e geração de sites estáticos.
- **Stripe**: Plataforma de pagamentos para gerenciar transações financeiras.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e eficiente.

## Funcionalidades

- Navegação por produtos
- Adição e remoção de produtos no carrinho
- Processamento de pagamentos com Stripe
- Confirmação de pedidos
- Interface responsiva e moderna

## Instalação

### Pré-requisitos

Certifique-se de ter o Node.js e npm instalados em sua máquina. Recomenda-se usar o Node.js na versão 14 ou superior.

### Passos para Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/lucasf5/stripe-store
   cd stripe-store
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env.local` na raiz do projeto e adicione as seguintes variáveis de ambiente:
   ```env
   PUBLIC_KEY=your-stripe-publishable-key
   SECRET_KEY=your-stripe-secret-key
   ```

## Configuração

### Configurando o Stripe

1. Crie uma conta no [Stripe](https://stripe.com).
2. Obtenha as chaves da API na seção de desenvolvedores do dashboard do Stripe.
3. Adicione as chaves no arquivo `.env.local` conforme mostrado na seção de instalação.

### Configuração Adicional

Se necessário, ajuste as configurações do projeto no arquivo `next.config.js`.

## Uso

### Desenvolvimento

Para iniciar o servidor de desenvolvimento:
```bash
npm run dev
```
Acesse `http://localhost:3000` no navegador para ver a aplicação em execução.

### Build para Produção

Para criar uma versão otimizada para produção:
```bash
npm run build
```
Para iniciar o servidor em modo de produção:
```bash
npm start
```

## Contribuição

Contribuições são bem-vindas! Por favor, siga os passos abaixo para contribuir:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature ou correção de bug:
   ```bash
   git checkout -b minha-nova-feature
   ```
3. Commit suas alterações:
   ```bash
   git commit -m 'Adiciona nova feature'
   ```
4. Envie para o branch original:
   ```bash
   git push origin minha-nova-feature
   ```
5. Crie um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
