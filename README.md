# Personal library API

I created this microservice as a requirement for [my freeCodeCamp Information Security and Quality Assurance Certification](https://www.freecodecamp.org/certification/tywmick/information-security-and-quality-assurance), using [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/), [MongoDB](https://mongodb.github.io/node-mongodb-native/), [Chai](https://www.chaijs.com/), and [Helmet](https://helmetjs.github.io/). The front end API tests on the home page also use [Bootstrap](https://getbootstrap.com/), [jQuery](https://jquery.com/), and [highlight.js](https://highlightjs.org/).

You can read the functional tests I wrote on [GitHub](https://github.com/tywmick/library/tree/glitch/tests/2_functional-tests.js) or [Glitch](https://glitch.com/edit/#!/ty-library?path=tests/2_functional-tests.js). To run the tests yourself, create a MongoDB database, fork/remix this project, create a `.env` file with `DB="{your MongoDB URI}"` and `NODE_ENV="test"`, start the server, and look at the server console logs.

This project fulfills the following user stories:

1.  Nothing from my website will be cached in my client as a security measure.
2.  I will see that the site is powered by `"PHP 4.2.0"` even though it isn't as a security measure.
3.  I can **post** a `title` to `/api/books` to add a book and returned will be the object with the `title` and a unique `_id`.
4.  I can **get** `/api/books` to retrieve an aray of all books containing `title`, `_id`, & `commentcount`.
5.  I can **get** `/api/books/{_id}` to retrieve a single object of a book containing `title`, `_id`, & an array of `comments` (empty array if no comments present).
6.  I can **post** a `comment` to `/api/books/{_id}` to add a comment to a book and returned will be the books object similar to **get** `/api/books/{_id}`.
7.  I can **delete** `/api/books/{_id}` to delete a book from the collection. Returned will be `"delete successful"` if successful.
8.  If I try to request a book that doesn't exist I will get a `"no book exists"` message.
9.  I can send a **delete** request to `/api/books` to delete all books in the database. Returned will be `"complete delete successful"` if successful.
10. All 6 functional tests required are complete and passing.
