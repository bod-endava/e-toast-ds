# E-Toast Design System

## Steps to have a fun development experience

1. Install dependencies

```zsh
npm install
```

2. Install all dependencies on the packages and symlink packages

```zsh
npm run bootstrap
```

3. Run all packages in dev mode

```zsh
npm start
```

4. Alternatively, move to each package and run

```zsh
npm start
```

5. Also, you have scripts for running individual packages

```zsh
// npm start:<package_name>
npm run start:react
```

## If you want to Toast your application

If you want to work using E-toast as your design system, you'll need to follow these steps:

1. Get a copy of etoast on a subfolder of your application. You can get it by doing one of the following:
   1. download a release from github [releases page](https://github.com/Jkierem/e-toast-ds/releases)
   2. download it from the [npm package](https://www.npmjs.com/package/@e-toast/css). Install it and move it from the node_modules folder
2. Install e-toast dependencies running `npm install` inside the subfolder.
3. Compile the CSS running `npm run build` (or `npm run build:dev` for a watch mode)
4. If you are using e-toast in a npm project, add Toast to the dependencies with `npm install /path/to/toast/folder`.
5. Import the compiled CSS on your application: 
```javascript
  import "@e-toast/css";
  import "@e-toast/css/behaviors.js";

  // or in vanilla projects

  <link href="/toast-path/etoast.css" rel="stylesheet">
  <script src="/toast-path/behaviors.js"></script>
```
6. You're ready to go!

## Things to keep in mind

- React package was moved to a different [repo](https://github.com/Jkierem/e-toast-react)
- Local symlink is suggested for development

## On boarding for devs

### Technologies

lerna for managing React and CSS code bases

#### CSS

sass as CSS preprocessor
dart-sass for sass compilation
node for some pre compilation scripts

#### React

Jest for unit testing

### Setting up

#### Prerequisites

##### Package manager

mac: if you do not have homebrew, it is adviced to install it since it makes the installation process a lot easier 
https://brew.sh/

win: if you do not have chocolatey, it is adviced to install it since it makes the installation process a lot easier 
https://chocolatey.org/docs/installation

##### NodeJS And npm

mac: https://changelog.com/posts/install-node-js-with-homebrew-on-os-x

win: https://chocolatey.org/packages/nodejs

this project is built using node v12.17.0 and npm v7.5.2. To manage node version [nvm](https://github.com/nvm-sh/nvm) is suggested

### Launching Project

1. run `npm install` on the root of the repo to install root dependencies
2. run `npm run bootstrap` to install dependencies of packages
3. run `npm run start` to start all projects*
4. for development `npm run start:react-sandbox` or similar commands that only run some packages, is suggested*

*Note: you may need to refresh the browser page on the first launch because React finishes compiling before Sass

### Dev Troubleshooting

- If `npm run bootstrap` fails when attempting to install `@e-toast/css` or changes in `packages/css` are not reflected on react sandbox: 

  1. go to each folder in the packages folder and run `npm install`
  2. go to `packages/css` and run `npm install && npm run build && npm link`
  3. go to all other packages that have `@e-toast/css` as depency and run `npm link @e-toast/css`. 
  4. skip `npm run bootstrap` and run `npm run start` 

-  If you get an error regarding `node-gyp`: make sure you have Python v2.7 as `python2` available on your console. If not, install it and add it to your path. If it persists, try updating node and npm versions (you can do so running `npm i -g node && npm i -g npm`). Older versions of node-gyp use Python v2.7 but the versions used inside of the package should be newer and not require it.

### Architecture/Philosophy

Etoast architecture is based around a 3 layer architecture with the purpose to provide different abstraction levels for customization. The first layer is global which provides raw values for the theme layer. The theme layer adds a semantic value to the global values, and provides the tokens for the component layer. Finally, the component layer uses those token to create the components. For a more in-depth look at the architecture go to the css package README.md

### Browser coverage

Chrome, Firefox, Edge, Safari.
