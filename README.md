# React frontend with simple Node/Express backend with one route

This is the minimal starting point for a basic React-frontend with Node/Express-backend. Frontend is Vite React with Sass, React Router, useContext and a CLI command to create pages (`npm run cp`), while the backend is a minimal Node/Express but with a simple MVC structure with server.ts which calls a function in model.ts. This is a good project if you want to build a multi-page application that has a backend that serves it data.

![grafik](https://starters.tanguay.eu/images/starters/reactNodeSimpleApi.png)

## features

- Node/Express API
- TypeScript
  - two interfaces: `IRawBooks`, `IBooks`
- ES6 modules
- three simple routes:
  - `/` - API instructions
  - `/books` - all books
  - `/books/3` - book with id 3
- simple MVC structure
  - `server.ts` - responsible for req/res routes
  - `model.ts` - responsible for data functions
- simple example of custom middleware (logger)
- `config.ts` has centralized data 
- `test.rest` used for manual testing (need [REST Client VSCode extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client))
- cors implemented

## install

- go to your projects directory
  - e.g. `cd ~/projects`
- in your projects directory, create your new site e.g. **backend001** by cloning this project 
  - `git clone git@github.com:edwardtanguay/backend-simple-readonly-json-api.git backend001`
- open your newly created site in VSCode
  - `code backend001`
- inside VSCode, open the VSCode terminal
  - **CTRL-`**
- delete the connection to this repository by deleting the Git repository
  - `rm -rf .git`
- create a new local Git repository
  - `git init -b main`
- install node_modules
  - `npm i`
- start your site and click given link to view website
  - `npm run dev`

## more starters, templates and frameworks

https://starters.tanguay.eu
