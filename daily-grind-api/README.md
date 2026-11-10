# lab12.2
Server experimentation with express etc.

Express.js server built for a fictional coffee shop

## What It Does

when you go to the `/api/fun/fact` endpoint, the server fetches a random fact from the [Use;ess Facts API](https://uselessfacts.jsph.pl/) and returns it in a clean, simple format.

## Built With

- **node.js** - runs JavaScript outside the browser
- **Express** - a lightweight framework for building servers
- **fetch** - built into Node
- **Git + GitHub** - for version control and submit
- npm install
- node server.js

## Reflections

lab12.2

A basic Express.js server for a fictional coffee shop, "The Daily Grind."

What It Does
Route and Response
via public/index.html (homepage)
/contact whichServes public/contact.html (contact page)
/api/fun-fact is an Extra: fetches a random fact from the Useless Facts API and returns it as JSON


Then visit http://localhost:3000/ and http://localhost:3000/contact.
Reflections

What's the difference between res.send() and res.sendFile()? res.send() sends whatever you give it, like a string or an object. res.sendFile() sends a file from the computer and sets the right content type for it. I'd use send for short messages and sendFile for things like HTML pages. sendFile needs an absolute path.

Why use the path module? A relative path like 'public/index.html' depends on the folder you start the server from, so it can break if you run it from somewhere else. path.join builds the full path from where server.js is, so it works either way. Since I'm using ES modules, __dirname isn't available, so I get it with fileURLToPath(import.meta.url).

How would I add a menu page? Make public/menu.html, add a /menu route in server.js that uses res.sendFile() like the others, then restart the server and check /menu.