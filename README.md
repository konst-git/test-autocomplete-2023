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
  Found:
  https://www.codingthesmartway.com/how-to-fetch-api-data-with-react/

9. [13:11] Fetching basics is ready, but having a CORS issue between localhost:3000 and localhost:4000<br>
   Searching web:<br>
   "express allow all CORS"

   Found:<br>
   https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/

   Doing:
   ```
   $ npm install cors
   ```

   Adding to appBackend.js:
   app.use(cors({
     origin: 'http://localhost:3000'
   }));

   This has worked.

9. [13:17] Try reading user textbox input and supply it as arguments to the api fetching call.

10. [13:16] Fetching of suggestions according to user input basics work.

11. [13:39] On the backend, start filtering the suggestions according to user input.<br>
  The file is big, consider possible optimizations on reading from it.<br>
  For example, if possible to read only the lines having the prefix provided by user?<br>
  Searching the web:<br>
  "nodejs read text file starting from line"<br>
  "nodejs file read particular line"<br>

  Will deal with this later. For now just basic file reading:
  ```
  const fileStream = fs.createReadStream('./priv/asset/wordlist.txt');
  const rl = readline.createInterface()
  rl.on('line', (line) => {});
  ```

11. [14:09] Not getting response from api, probably synchronisation issue (ie. async-await) from the fs api.

==== To-Do:
  1. Optimize large file reading. Possibly index line numbers for certain starting characters, like:<br>
  lines 0    - 1050: starting with 'a'<br>
  lines 1051 - 3000: starting with 'b'<br>
  lines 3001 - 5000: starting with 'c',<br>
  etc<br>
  , so when the new user request input comes in, can use their input to find the related chunk in the file.
