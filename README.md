# API RESTful in Node with Express
This is an example for an Api with **express.js**, this contains examples for Http verbs like *GET*, *POST*, *PUT*, *PATCH* and *DELETE*, and also HATEOAS component. Api data is getting from **mongodb** using **mongoose**. On the other hand tests are performed with **mocha** for unit tests and **SuperTest** for integration tests.  
Features in the demo includes:
- HTTP verbs: 
   - GET
   - POST
   - PUT
   - PATCH
   - DELETE
- HATEOAS
- Unit tests with Mocha
- Integration tests with SuperTest

## Getting Started
- Download zip project or clone git repository on your local workspace.
- You need to install Mongodb and run **"mongod"** in console.
- Go to the project folder and execute *npm install* in console.
- Import Book data with **"mongo bookAPI < booksJson.js"** in console.
- Finally run **npm start**.
- Routes:
   - http://localhost:4000
   - http://localhost:4000/api/books/
   - http://localhost:4000/api/books/book-id
   - http://localhost:4000/api/books/?genre=javascript
- For tests: execute *npm test* 

# Authors
* **José Martínez** - [JMartinezCL](https://gitlab.com/JMartinezCL)

