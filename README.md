# TODO

- [ ] Use semantic tags in the README.md files
- [ ] Explain the git branching
- [ ] Add a change log
- [ ] Add release steps
- [ ] Explain the repo with the use cases
- [ ] Highligth the Node setup
- [ ] Add the main goal of e-toast (internal projects, accounts project)
- [ ] Consolidate tostaditas as main documentation
- [ ] Offer a documentation without technical knowledge

# 🍞 E-Toast Design System
Starting using e-toast is straight forward. We provide resources such as best practices, component documentation, Sketch and Figma files, and more.

# 🚦 Requisites

mac: https://changelog.com/posts/install-node-js-with-homebrew-on-os-x

win: https://chocolatey.org/packages/nodejs

this project is built using node v12.17.0 and npm v7.5.2. To manage node version [nvm](https://github.com/nvm-sh/nvm) is suggested
# 📁 Folder Structure
This repository use [lerna](https://github.com/lerna/lerna) a tool for manage JavaScript projects with multiple packages. In that case the recommendation is follow the resources in the `/packages` folder that have the next contents:

- `/css`: project with the core css layer of e-toast
- `/css-doc-page`: project to document the contents of the css layer of e-toast
- `/sandbox`: project to visualize the use of the css layer with React
- `/toast-icons`: project with the e-toast icons (candidate to move for his own repo)
- `/toasty`: project for apply automation toast for e-toast

For more information, please read the respective `README.md` files for each project.

# 🗂️️ External projects
- [e-toast-react](https://github.com/bod-endava/e-toast-react): A react layer with react components that consume the css layer
- [e-toast-scheduler](https://github.com/bod-endava/e-toast-scheduler): A use case for e-toast

# 🏗️ Set Up by Project (Recommended)

1. Go to the package path (e.g) `/e-toast-ds/packages/css`

```zsh
cd e-toast-des/packages/css
```

2. Install dependencies for the css project

```zsh
npm install
```

3. According the project this step will change, for the example case we just can build the css package:

```zsh
npm run build
```

Again, the recommendation is check the `README.md` file for each project, there you will find the specific steps to start each package.

# 🏗️ Global Set Up (Unstable)

1. Install dependencies from `/e-toast-ds`

```zsh
npm install
```

or

```zsh
yarn install
```


2. Install all dependencies on the packages and symlink packages

```zsh
npm run bootstrap
```

or

```zsh
yarn bootstrap
```

3. Run all packages in dev mode

```zsh
npm run start
```

or 

```zsh
yarn start
```

5. Also, you have scripts for running individual packages

```zsh
// npm start:<package_name>
npm run start:css
```

or

```zsh
yarn start:sandbox-css
```

# ✨ Using E-Toast

If you want to work using e-toast as your design system, you'll need to follow these steps:

1. Get a copy of e-toast on a subfolder of your application. You can get it by doing one of the following:
   1. Download a release from github [releases page](https://github.com/Jkierem/e-toast-ds/releases)
   2. Download it from the [npm package](https://www.npmjs.com/package/@e-toast/css). Install it and move it from the node_modules folder
2. Install e-toast dependencies running `npm install` inside the subfolder.
3. Compile the CSS running `npm run build` (or `npm run watch` for a watch mode)
4. If you are using e-toast in a npm project, add Toast to the dependencies with `npm install /path/to/toast/folder`.
5. Import the compiled CSS on your application:

```javascript
  import "@e-toast/css";
  import "@e-toast/css/behaviors.js";

  // or in vanilla projects

  <link href="/toast-path/e-toast.css" rel="stylesheet">
  <script src="/toast-path/behaviors.js"></script>
```
6. You're ready to go!

# 👨‍⚕️ On Boarding

> TODO: Add on boarding steps

- Local symlink is suggested for development

# 🧰 Tech Stack

- Lerna for managing React and CSS code bases

# 📦 Package Manager

mac: if you do not have homebrew, it is advised to install it since it makes the installation process a lot easier 
https://brew.sh/

win: if you do not have chocolatey, it is advised to install it since it makes the installation process a lot easier 
https://chocolatey.org/docs/installation

# 🤔 Dev Troubleshooting

- If `npm run bootstrap` fails when attempting to install `@e-toast/css` or changes in `packages/css` are not reflected on react sandbox: 

  1. go to each folder in the packages folder and run `npm install`
  2. go to `packages/css` and run `npm install && npm run build && npm link`
  3. go to all other packages that have `@e-toast/css` as dependency and run `npm link @e-toast/css`. 
  4. skip `npm run bootstrap` and run `npm run start` 

-  If you get an error regarding `node-gyp`: make sure you have Python v2.7 as `python2` available on your console. If not, install it and add it to your path. If it persists, try updating node and npm versions (you can do so running `npm i -g node && npm i -g npm`). Older versions of node-gyp use Python v2.7 but the versions used inside of the package should be newer and not require it.


# 🌐 Browser coverage
- Chrome
