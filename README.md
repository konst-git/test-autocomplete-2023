Test autocomplete app


1. [11:24] Want to try creating the app within the Reac framework.<br>
   Searching the web<br>
   https://create-react-app.dev/docs/getting-started <br>

  Creating a new app using below:
  ```
  $ npx create-react-app test-autocomplete --template typescript
  ```

2. Want to create an api endpoint within my react app.<br>
   Searching the web.<br>
   "react app create api backend"<br>
   "react app how to create api"<br>
   Reading the doc:<br>
   https://medium.com/free-code-camp/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c <br>
   How to create a React frontend and a Node/Express backend and connect them

3. [12:12] Separate the project into 'client' and 'backend' folders

4. [12:16] Want to create the backend part.<br>
   Searching the web<br>
   "create node express api"<br>
   found:<br>
   https://blog.postman.com/how-to-create-a-rest-api-with-node-js-and-express/ <br>
   How to create a REST API with Node.js and Express<br>

5.
```
$ cd backend
$ npm install express
```

6. [12:38] backend node express is working: http://localhost:4000/apiWords. But it returns nothing for now.

7. [12:38] design a basic page, to have a text input

8. [12:46] start listening on the user strokes inside the text input

8. [12:51] start making api calls to the words api to show the suggestions.<br>
  Searching the web:<br>
  "react fetch api calls"

9. [13:11] Fetching basics is ready, but having a CORS issue between localhost:3000 and localhost:4000<br>
   Searching web:<br>
   "express allow all CORS"