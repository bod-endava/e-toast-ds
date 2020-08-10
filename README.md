# E-Toast Design System

## Steps to have a fun development experience

1. Install dependencies

```zsh
yarn install
```

2. Install all dependencies on the packages and symlink packages

```zsh
yarn bootstrap
```

3. Run all packages in dev mode

```zsh
yarn start
```

4. Alternatively, move to each package and run

```zsh
yarn start
```

5. Also, you have scripts for running individual packages

```zsh
// yarn start:<package_name>
yarn start:react
```

## Things to keep in mind

- React package is not ready. It is currently only used for development of the css package. 
- react-scripts version 3.4.0 needs to be used. The 3.4.1 version introduced a bug that makes it unusable with lerna
- Local symlink is suggested due to the fact that the packages are not published yet
- Prefer the use of root scripts instead of package scripts


## On boarding

### Technologies

lerna for managing React and CSS code bases

#### CSS

sass as CSS preprocessor
node-sass for NodeJs bindings for sass

#### React

Jest for unit testing


### Setting up

#### Prerequisites

mac: if you do not have homebrew, it is adviced to install it since it makes the installation process a lot easier 
https://brew.sh/

win: if you do not have chocolatey, it is adviced to install it since it makes the installation process a lot easier 
https://chocolatey.org/docs/installation

##### NodeJs And Npm

mac: https://changelog.com/posts/install-node-js-with-homebrew-on-os-x

win: https://chocolatey.org/packages/nodejs

##### Yarn

mac: https://classic.yarnpkg.com/en/docs/install/#mac-stable

win: https://classic.yarnpkg.com/en/docs/install/#windows-stable

### Launching Project

Run command `yarn` to install dependencies

Run command `yarn bootstrap` to install all dependencies on the packages and symlink packages

Run command `yarn start` every time you want to launch proyect on your default browser

    Note you may need to refresh the browser page on the first launch because React finishes compiling before Sass

### Architecture/Philosophy

Etoast architecture is based around a 3 layer architecture with the purpose to provide different abstraction levels for customization. The first layer is global which provides raw values for the theme layer. The theme layer adds a semantic value to the global values, and provides the tokens for the component layer. Finally, the component layer uses those token to create the components.


### Browser coverage

Chrome, Firefox, Edge, Safari.