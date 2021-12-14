# Inter-Week-Backend
This is the backend part based on the "Frontend Inter Week" series. The main goal of this series is to develop a copy of the web interface from [Banco Inter](https://www.bancointer.com.br/). However, here the series is used just as an example to be based on. Everything (from Project Structure, to coding, documentation, tests) is different.

The application provides signin and signup with asymmetrical keys using JWT and JOSE (the JWT token is encrypted. So, without the private key, people can't really know which information are in there). Also, we can make money transferences between the participants (known in Brazil as PIX).

<p align="center">
➡️ 👷🚧 <b>Under Construction...</b>
 </p>

## Technologies
- Node.js
- Express
- TypeORM
- PostgreSQL
- Clean Code Architecture
- Design Patterns
- JWT
- JOSE (JSON Object Signing and Encryption)

## Project Structure
I'm using <b>Clean Code Architecture</b> for this project. The reason is because it provides a nicer and better way of changing and maintening the code, besides providing us the best out of <b>design patterns</b> and <b>S.O.L.I.D. principles</b>.

The goal is to have the code at the best readability possible and to have layers detached from each other. We must not be a slave to some library, some outside module or to some other part of our code.

Below we have the architectural names used for this project and their basic explanations.

```

├── applications
│   ├── errors
│   ├── interfaces
│   └── usecases
│       └── users
├── business
│   ├── dtos
│   │   └── users
│   ├── entities
│   ├── errors
│   └── usecases
│       └── users
├── infrastructure
│   ├── adapters
│   ├── database
│   ├── http_server
│   └── repositories
│       └── user
├── interfaces
│   ├── controllers
│   │   └── users
│   └── middlewares
├── mocks
├── routes
└── shared
    └── utils
```

- ***Applications***: this layer is used for usecases rules. What we mean by that is that here lies all business cases related to the project. If an outsider look at our usecases, they must know what our project does even though they don't undestand it. So, for example, we have inside of <code>User</code> the <b>signin</b> and <b>signup</b> usecases. An outsider will know that the User part of our project lies on getting a user signed in and signed up.

- ***Business***: here we have all things related to our intrinsic company needs. In here we define the I/O structures, the entities for the databases and so on.

- ***Infrastructure***: basically everything related to the outside lies here: a module (like `express, typeorm, logger`) and a database (like `postgres`). This is the part of our application that is using something external.

- ***Interfaces***: this is our front door of the application. All requests will be redirected to this layer before it takes time into the interior of our project. He is the frontman that gives directions for the requests coming.

- ***Mocks***: basically used for testing purposes. Here we'll have dummy mocked requests, objects, functions, classes in order to execute our unit tests.

- ***Routes***: as the name describes, all our endpoints are located here.

- ***Shared***: finally, this is the layer where we have something that can be used throughout the application, something that more than one layer will use.

## Installation
Git clone this repository
```bash
git clone https://github.com/Guilospanck/Inter-Week-Backend.git
```
and then <code>cd</code> into it
```bash
cd /Inter-Week-Backend
```
Run Yarn to install dependencies
```bash
yarn
```
Be sure to have an instance of PostgreSQL up and running with the following credentials (you can see then in the `ormconfig.json` file):
```json
{
  "name": "default",
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "123456",
  "database": "inter",
  "entities": ["src/business/entities/*.ts"],
  "logging": false,
  "synchronize": true
}
```
One simple and quick way to have it running is to run it on Docker.
Once you have [Docker](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04) installed, you can run on the terminal:
```bash
docker run --rm --name pg-docker -e POSTGRES_PASSWORD=123456 -e POSTGRES_DB=default -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres
```
Also, personally, I like [DBeaver](https://dbeaver.io/) as a Graphical Interface to the database.

Then, once the database is up and running and you already have a database there with the above configurations, you can run on the terminal:
```bash
yarn start:dev
```
to run the HTTP Server and the connection to the database.
