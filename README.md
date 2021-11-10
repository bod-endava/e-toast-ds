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

2. Install all dependencies on the packages and symlink packages

```zsh
npm run bootstrap
```

3. Run all packages in dev mode

```zsh
npm start
```

5. Also, you have scripts for running individual packages

```zsh
// npm start:<package_name>
npm run start:react
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

# 📐 Architecture

The e-toast architecture is made with customization in mind. It allows for different levels of customization. Each level differs from the other based on two characteristics: scale and semantic value. Scale is defined by how many components are affected by the level. Semantic value is defined by the meaning given to values from that level. The following table describes the three levels of abstraction:

| level | scale | semantic value | where it is located |
| ----- | ----- | -------------- | ------------------- |
| global | Values altered in this level will change the design system as a whole | Values are raw values with no semantic value (e.g. orange) | src/globals |
| theme  | Values altered in this level will change groups of components in the system | Values now have a semantic value that ties them to the components (e.g. orange becomes primary). Some values may be tied to a group of components | src/themes |
| component | Values altered at this level only have an effect on a single component in the system | Values are completely tied to a single component (e.g. primary becomes idle-fill-color for the primary button). The values stored here are the tokens used in the definition of a component. | src/themes/\[atom-name]. Definitions that consumes the layer is in src/atoms/\[atom-name] |
| utility | Definitions in this layer may affect the system as a whole | All definitions in this layer are not values but rather functionalities that are not tied to a single component and can be reused system-wide | src/utils |

As a design decision, each layer may only refer to definitions and values from either the utils layer or the layer previous to it in terms of scale and semantic value. This means component layer may only use theme values and theme may only use global values and any layer may use utility definitions.

Additionally, the global layer is unique but the theme and component layer contain various themes and components. Components are connected to a theme through a file that acts as a bridge: src/theme.config. The theme layer is connected to the global layer through imports. The following diagram shows how this works:

![Architecture](./packages/css/docs/images/architecture.png "Architecture")

# 🌐 Browser coverage
- Chrome
