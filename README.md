# React frontend with simple Node/Express backend with one route

This is the minimal starting point for a basic React-frontend with Node/Express-backend. Frontend is Vite React with Sass, React Router, useContext and a CLI command to create pages (`npm run cp`), while the backend is a minimal Node/Express but with a simple MVC structure with server.ts which calls a function in model.ts. This is a good project if you want to build a multi-page application that has a backend that serves it data.

![grafik](https://starters.tanguay.eu/images/starters/reactNodeSimpleApi.png)

## features

- **frontend:** Vite/React with Sass, TypeScript and ES6 modules
- **backend:** Node/Express with TypeScript and ES6 modules
- **database:** [Lowdb](https://www.npmjs.com/package/lowdb) (one JSON file in backend)
- **authentication:** simple PIN which is an environment variable in the backend, i.e. all POST/PATCH/DELETE backend routes are protected
- **toastify notifications**: easy-to-implement app messages that pop out with animation in e.g. upper-right-hand corner, see [react-toastify](https://www.npmjs.com/package/react-toastify)

## install

- go to your projects directory
- create a directory called `site001`

## install backend

- go to your projects directory
- `cd site001`
- `git clone git@github.com:edwardtanguay/getajob007-backend.git`
- `npm i`
- create **.env** file

```text
PORT = 3001
PIN = 1234
```

- `npm run dev`

## install frontend

- go to your projects directory
- `cd getajob`
- `git clone git@github.com:edwardtanguay/getajob007-frontend.git`
- `npm i`
- create **.env** file

```text
VITE_BACKEND_URL = http://localhost:3001
```

- `npm run dev`

## more starters, templates and frameworks

https://starters.tanguay.eu
