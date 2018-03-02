# ★★★★★ CACI-Admin ★★★★★

## What is this?

CACI 艺文创荟（北京）文化传媒有限公司官网的管理面板

## Architect
React and Redux, Webpack 2， Redux Form, MongoDB store in mlab.com

- components (both container/views and regular ones)
- routes
- reducers (redux)
- actions (both sync and async),
- SASS (with autoprefixer)<sup>1</sup>
- using assets (in CSS and components)
- imports relative to the app root


## Features

- [x] React
- [x] React router
- [x] Redux
- [x] Redux Thunk
- [x] Redux DevTools (you need to have [browser extension](https://github.com/zalmoxisus/redux-devtools-extension) installed)
- [ ] Immutable reducer data
- [x] Webpack 2 (development and production config)
- [x] Hot Module Replacement
- [x] Babel - static props, decorators
- [x] SASS with autoprefixing
- [x] Webpack dashboard
- [x] Linting
- [x] Included `es6-promise` and `isomorphic-fetch`
- [x] Preview production build
- [x] File imports relative to the app root
- [x] Git hooks - lint before push

## TODO
- [x] Backend
- [ ] Implement Redux Form 
- [ ] Clean code 
- [ ] Dockerize


## Setup

Tested with node 6.x and 7.x

```
$ npm install
```

## Running in dev mode

```
$ npm start
```

Visit `http://localhost:4000/`, if you run server folder visit `http://localhost:5000/`  from your browser of choice.
Server is visible from the local network as well.