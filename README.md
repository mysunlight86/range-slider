# range-slider

1. To work with project files, download and install packages from package.json
```
npm install
```
2. Next you need to build a project
```
npm run build
```
3. Starting the web server
```
npm run dev
```
4. To run tests
```
npm run test
```

The project uses [the Karma-Jasmine-Webpack-Typescript setting](https://developerlife.com/2019/07/06/starter-project-typescript-karma-jasmine-webpack/).<br/>

The project is written in the vscode program with the eslint extension. [Eslint plugin for FSD best practices](https://github.com/lndbaryshnikov/eslint-plugin-fsd) has been added to this build.<br/>

An HTML file is created from pug files, css is compiled from scss, and js scripts are written in typescript.<br/>

To add a plugin to a page you need to create a block `<div id="range-slider"></div>`. You can change the width of this block (by default it is 300px).<br/>
