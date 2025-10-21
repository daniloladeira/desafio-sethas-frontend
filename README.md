# Desafio Front-End — SETHAS
<br>
<p align="center">
  <img src="./src/assets/corp_readme.svg">
</p>
<br>
A empresa terceirizada da SETHAS, a CORP., está precisando dos seus serviços para desenvolver algumas funcionalidades em seu sistema.

---

## Stack que será usada

- **Framework**: React + TypeScript  
- **API**: Django (fornecida)  
- **Ferramentas**: Axios (services)

---

## Histórias de Usuário

### HU01 - Listar Pessoas

💬 Como usuário do sistema, quero visualizar uma tabela com todas as pessoas cadastradas para poder consultar rapidamente os dados disponíveis. 

**Critérios de Aceite:**
- A tabela deve ter colunas com:
  - Nome
  - CPF
  - E-mail
  - Telefone
  - Endereço
  - Status (ativo/inativo)
  - Ações (visualizar detalhes)
- Deve ser possível filtrar por nome, cpf ou e-mail
- Cada linha da tabela deve ter um botão ou ação para **consultar detalhes**.
- Consumir a API via Axios. **(Precisará criar um arquivo de service)**
- Exibir mensagens de erro em caso de falha.

---

### HU02 - Consultar Detalhes da Pessoa

💬 Como usuário do sistema, quero abrir um modal e consultar os detalhes completos de uma pessoa para obter todas as informações relacionadas a ela.

**Critérios de Aceite:**
- O sistema deve permitir consultar detalhes de uma pessoa.
- Deve exibir todos os dados cadastrados **em um modal**:
  - Nome completo  
  - CPF  
  - E-mail  
  - Telefone  
  - Data de nascimento  
  - Endereço  
  - Data de cadastro  
  - Status (ativo/inativo)
- Deve permitir editar ou excluir a pessoa *(opcional)*.  
- Deve validar se a pessoa existe antes de exibir os detalhes.  
- Apenas usuários autenticados podem acessar os detalhes.  
- Caso a pessoa não exista, exibir mensagem de erro.  
- Dados sensíveis apenas para perfis autorizados.

## Extras
- Sidebar com funcionalidade de abrir e fechar.
- Navegação por abas na sidebar entre 'Dashboard' e 'Tabela' utilizando o react router dom.

```OBS: Caso você não queira fazer a navegação por abas, é permitido fazer a tabela na página de dashboard.```
