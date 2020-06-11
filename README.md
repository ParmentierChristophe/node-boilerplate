# nodejs, docker, PostgreSQL, sequelize , API, REST

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
