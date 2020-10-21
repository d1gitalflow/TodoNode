## API (CRUD) management mini-project with MongoDB

```

The code is mostly commented itself but here's a quick TL;DR.

TodoApp - Serves to register new Todo's, update, and delete via API endpoints. These endpoints get created on a mongodb (NoSQL) database and it uses 'documents'.

Technicals:

We use 3 nodejs dependencies:
"body-parser": "^1.19.0",
"express": "^4.17.1",
"mongoose": "^5.10.9".

'body-parser' is used to parse incoming JSON to JS objects and output the values.
'express' is used to process HTTP requests with verbs.
'mongoose' is used to connect/edit/remove to the database.

'config' folder has two files (config.json and index.js), config.json has the db connection values, index.js has the connection string which is returned by a function

'controllers' folder has the setupController.js to create a dummy db example and apiController.js which is used to control the logic within the API (create if empty, update, and delete). Its a CRUD.

'models' folder stores the 'todoModel.js' for the mongodb documents, its as it follows:
const todoSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

TODO: public folder is storing the angularjs dependencias for in browser side development, but is "WIP".

'app.js' is the primary start-point of the program and puts everything together.

```
