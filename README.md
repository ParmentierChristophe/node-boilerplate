# Nod.js Boilerplate

This is a boilerplate to build a starting API with Node.js, Express and PostgreSQL on ES6. It is also configured with babel.
The sequelize ORM is used on this project, authentication has also been set up with JWT (jsonwebtoken)

- [simple-nodejs-postgresql](#simple-nodejs-postgresql)

  - [Introduction](#introduction)
    - [Development mode](#development-mode)
  - [Quick Start](#quick-start)
  - [Documentation](#documentation)
  - [Endpoints](#endpoints)

    - [Folder Structure](#folder-structure)
      - [Folder database](#folder-database)
    - [Babel](#babel)
    - [Nodemon](#nodemon)
    - [Express](#express)
    - [PostgreSQL](#postgresql)
    - [Sequelize](#sequelize)
    - [Docker](#docker)

  - [Authentication](#authentication)

## Introduction

This is a starting application for create an API with a [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/), using [PostgreSQL](https://www.postgresql.org/) for database and [Sequelize](https://sequelize.org) as ORM.

### Development mode

The server side Express code will be served by a node server using [Nodemon](https://nodemon.io/) which helps in automatically restarting the server whenever server side code changes.

## Quick Start

### First Install

If you never developed in this repo before:

1. **Clone the repository:**

```sh
$ git clone git@github.com:ParmentierChristophe/node-boilerplate.git
```

2. **Build the base images:**

```sh
$ docker-compose build app
```

### Running the server

To run the server, you will have to start the database and run the migrations.

1. **Start database and run migrations in one command:**

```sh
$ make setup-db
```

2. **Or start database and run migrations separately:**

- **Start database (postgres):**

  ```sh
  $ make start-db
  ```

- **Run the migrations:**
  ```sh
  $ make migrate
  ```

3. **Then finally run the server:**

```sh
$ make app
```

### more commands

- Seeding your database :

```sh
$ make seed
```

- Undo your all migrations :

```sh
$ make migrate-undo-all
```

the server starts on port 8081:

`http://localhost:8081`

## Endpoints

### Swagger Documentation

Allows access to documentation

`GET /api-docs`

### User / Authentication

#### Register

`POST /api/register`

Example request body:

```source-json
{
  "email": "wwhite@breaking.bad",
  "password": "BlueSky"
}
```

No authentication required, returns a User

Required fields: `email`, `password`

#### Login

`POST /api/login`

Example request body:

```source-json
{
  "email": "wwhite@breaking.bad",
  "password": "BlueSky"
}
```

No authentication required, returns a JWT

Required fields: `email`, `password`

## Documentation

### Folder Structure

the entrance of the application is `server/index.js`, on folder `database` All files created by Sequelize (migrations, seeds, models, config) and on folder `server` all files for API and for server (config, modules, utils).

#### Folder Database

In the database folder you already have three models and the migration files for creating three `Item`, `List` and `User` tables with a relationship. to create these tables, make with Sequelize:

`$ make migrate`

### Babel

### Nodemon

### Express

### PostgreSQL

### Sequelize

### Docker

## Authentication

For authentication the API uses [Passport](http://www.passportjs.org/) and and token [JWT](https://jwt.io/) with [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
