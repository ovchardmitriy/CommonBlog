# CommonBlog

Allows all registered users to read and edit all existing posts, create new posts

> This is a test task for [QualiumSystems][1]


## Description

CommonBlog is a simple single page application built with AngularJS, Node.js, Express and MongoDB. 
The application is scaffolded by [Yeoman][2] and [AngularJS Full-Stack generator][3].


## Usage

Install `grunt-cli` and `bower`:
```
npm install -g grunt-cli bower
```

Install dependencies and bower components:
```
npm install
```
```
bower install
```
You need MongoDB to be installed and have the `mongod` process running.

Run `grunt` for building, `grunt serve` for preview, and `grunt serve:dist` for a preview of the built app.


## Testing

Running `grunt test` will run the client and server unit tests with karma and mocha.

Use `grunt test:server` to only run server tests.

Use `grunt test:client` to only run client tests.

**Protractor tests**

To setup protractor e2e tests, you must first run

`npm run update-webdriver`

Use `grunt test:e2e` to have protractor go through tests located in the `e2e` folder.

## TODO

* Add more unit tests
* Add more e2e tests
* Stylize UI for all pages

[1]: http://www.qualium-systems.com/
[2]: http://yeoman.io/
[3]: https://github.com/DaftMonk/generator-angular-fullstack