# Notifications Service

## Descrição

Este é um projeto desenvolvido para gerenciar notificações utilizando o framework NestJS integrado ao Prisma como ORM. O objetivo é implementar um serviço backend robusto, utilizando princípios do SOLID, casos de uso bem definidos e testes automatizados.

## Funcionalidades

- Criação de notificações
- Leitura de notificações
- Cancelamento de notificações
- Marcar notificações como não lidas
- Contagem de notificações por destinatário
- Consulta de notificações por destinatário

## Tecnologias Utilizadas

- **NestJS**: Framework para aplicações Node.js
- **Prisma**: ORM para interação com o banco de dados
- **TypeScript**: Linguagem principal do projeto
- **Jest**: Testes automatizados

## Instalação

1. Clone o repositório:
   ```bash
   git clone no repositório
   cd notifications-service
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure o banco de dados Prisma:
   - Certifique-se de que o arquivo `.env` está configurado corretamente.
   - Rode o comando:
     ```bash
     npx prisma migrate dev
     ```

## Scripts Disponíveis

- **Iniciar o projeto**:
  ```bash
  npm start
  ```
- **Iniciar o projeto em modo de desenvolvimento**:
  ```bash
  npm run start:dev
  ```
- **Executar testes**:
  ```bash
  npm test
  ```
- **Construir o projeto**:
  ```bash
  npm run build
  ```

## Estrutura do Projeto

- **src/app**: Contém as entidades, casos de uso e regras de negócio.
- **src/infra**: Infraestrutura do projeto, incluindo o Prisma e repositórios.
- **src/http**: Rotas, controllers e validações HTTP.
- **test**: Testes automatizados para os casos de uso e demais componentes.

## Rotas Disponíveis

### POST `/notifications`

Cria uma nova notificação.

- **Corpo da requisição:**
  ```json
  {
    "recipientId": "string",
    "content": "string",
    "category": "string"
  }
  ```
- **Exemplo de resposta:**
  ```json
  {
    "id": "string",
    "recipientId": "string",
    "content": "string",
    "category": "string",
    "createdAt": "string"
  }
  ```

### PATCH `/notifications/:id/cancel`

Cancela uma notificação.

### PATCH `/notifications/:id/read`

Marca uma notificação como lida.

### PATCH `/notifications/:id/unread`

Marca uma notificação como não lida.

### GET `/notifications/count/from/:recipientId`

Obtém a contagem de notificações de um destinatário.

### GET `/notifications/from/:recipientId`

Obtém as notificações de um destinatário.

## Contribuição

1. Crie uma branch para suas alterações:
   ```bash
   git checkout -b minha-feature
   ```
2. Faça commit das suas alterações:
   ```bash
   git commit -m "Minha nova funcionalidade"
   ```
3. Envie as alterações:
   ```bash
   git push origin minha-feature
   ```
4. Abra um Pull Request no GitHub.

## Licença

Este projeto está sob a licença **UNLICENSED.**
