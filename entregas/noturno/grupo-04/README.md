# Projeto Final — Módulo 09: Banco de Dados e SQL
## Capacitação em Desenvolvimento Full Stack | Grupo 4
**Professor:** Janei Vieira Pereira

Este repositório contém a entrega do Projeto Integrador correspondente ao encerramento do ciclo de Banco de Dados. O projeto consiste em uma aplicação web funcional integrada à base de dados `escola_db`, desenvolvida para simular o atendimento a uma solicitação real de negócio realizada por um *Product Owner*.

---

## 👥 Integrantes e Divisão de Responsabilidades

Para atender às diretrizes do papel de equipe, dividimos nosso grupo nas seguintes frentes técnicas:

* **Equipe de Desenvolvimento: (Back-End)**
    * [Paulo Mesquita]() - *Estrutura da API, integração com MySQL e apoio na consulta principal.*
    * [Álefe Alves]() — *Organização da entrega, apoio no backend e validação técnica do projeto.*
    * [Luciano dos Santos]() — *Suporte à API, revisão das rotas e consistência da integração.*
* **Equipe de Desenvolvimento: (Front-End)**
    * [Amanda Barbosa]() — *Estrutura da interface e composição visual da tela principal.*
    * [Leonam Souza]() — *Componentes de filtro e refinamento da experiência de uso.*
    * [Edson Felipe]() — *Apoio na renderização da tabela e organização do frontend.*
    * [Felipe Spínola]() — *Apoio geral no frontend, ajustes de layout e validação visual.*

---

## 📐 Modelagem e Banco de Dados (`escola_db`)

O banco de dados do projeto foi estruturado a partir do arquivo padrão fornecido, mapeando todo o ecossistema escolar através de 6 tabelas principais correlacionadas por chaves estrangeiras:

### 1. Diagrama de Entidade-Relacionamento (DER)

![Diagrama de Entidade Relacionamento](./der/DER.png)

### 2. Dicionário de Dados Resumido
* **`professores`:** Armazena o corpo docente, e-mails institucionais e áreas de atuação.
* **`cursos`:** Catálogo contendo as cargas horárias e áreas de cada curso.
* **`turmas`:** Tabela intermediária que gerencia os turnos, períodos e capacidades de vagas, vinculando cursos e professores.
* **`alunos`:** Cadastro pessoal dos discentes com suas respectivas cidades de origem.
* **`matriculas`:** Entidade que conecta o aluno a uma turma, controlando o status atual (Ativa / Concluída).
* **`notas`:** Guarda as 3 notas parciais do aluno e armazena de forma persistente a média final calculada.

---

## 💻 A Aplicação Web

Conforme o escopo obrigatório solicitado pelo PO, a aplicação foca puramente em consultas rápidas para uso do corpo de coordenação acadêmica, trazendo os seguintes recursos:

### Itens Obrigatórios Implementados:
* Visualização clara contendo: Nome do Aluno, E-mail, Turma, Data de Matrícula, Notas parciais (`nota1`, `nota2`, `nota3`) e Média Final.
* Filtro de listagem dinâmica por Turma.
* Barra de pesquisa de estudantes por Nome.

---

## 🚀 Arquitetura e Como Executar o Projeto

**Tecnologias Utilizadas:**
* **Backend:** Node.js com Express e mysql2.
* **Frontend:** React com Vite e Axios.
* **Banco de Dados:** MySQL.

**Instruções para Execução Local:**
1. **Clone o repositório:**
    ```bash
   git clone https://github.com/AlefeAlvesC/bancos-de-dados-e-sql.git
    ```

2. **Suba o banco de dados:** execute o script `base/escola_db.sql` no seu MySQL local para criar e popular o banco `escola_db`.

3. **Configure as variáveis de ambiente:**
    use o arquivo `.env` dentro da pasta `entregas/noturno/grupo-04/` como base e ajuste as credenciais conforme o seu ambiente.

4. **Inicie o backend:**
    ```bash
    cd entregas/noturno/grupo-04/app/escola-api
    npm install
    npm start
    ```

5. **Inicie o frontend:**
    ```bash
    cd ../escola-web
    npm install
    npm run dev
    ```

6. **Acesse a aplicação:**
    abra o endereço informado pelo Vite no navegador.

## Estrutura técnica entregue

* **API:** rota `GET /alunos` para consulta dos registros da base.
* **Interface web:** listagem com filtros por nome e turma.
* **Integração:** consumo da API via `axios` e exibição dos dados em tabela.
* **Modelagem:** base relacional com professores, cursos, turmas, alunos, matrículas e notas.

***Projeto desenvolvido pelo Grupo 4 para o Módulo 9 de Desenvolvimento Full Stack — 2026.***