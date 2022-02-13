# Tutorial

In order to run this outside Docker please ensure that you create a `.env` file at the root directory since this project makes use of `dotenv` NPM package.

## .env Sample

```sh
APP_PORT=3000
MONGO_DB_CONNECTION_STRING="mongodb://tutorial:tutorial@localhost:27017/tutorial"
```

## Next Steps
* Find a way to dynamically update docker volume contents without having to restart it ever so often. Similar to the `npm start` command.
