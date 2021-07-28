# @e-toast/css

## Getting started

First run `yarn install` to install dependencies. Then `yarn start` will watch for changes in the source code and build in development mode.

Run `yarn build` to make a production build

## Architecture

The toast architecture is made with customization in mind. It allows for different levels of customization. Each level differs from the other based on two characteristics: scale and semantic value. Scale is defined by how many components are affected by the level. Semantic value is defined by the meaning given to values from that level. The following table describes the three levels of abstraction:

| level | scale | semantic value | where it is located |
| ----- | ----- | -------------- | ------------------- |
| global | Values altered in this level will change the design system as a whole | Values are raw values with no semantic value (e.g. orange) | src/globals |
| theme  | Values altered in this level will change groups of components in the system | Values now have a semantic value that ties them to the components (e.g. orange becomes primary). Some values may be tied to a group of components | src/themes |
| component | Values altered at this level only have an effect on a single component in the system | Values are completely tied to a single component (e.g. primary becomes idle-fill-color for the primary button). The values stored here are the tokens used in the definition of a component. | src/themes/\[atom-name]. Definitions that consumes the layer is in src/atoms/\[atom-name] |
| utility | Definitions in this layer may affect the system as a whole | All definitions in this layer are not values but rather functionalities that are not tied to a single component and can be reused system-wide | src/utils |

As a design decision, each layer may only refer to definitions and values from either the utils layer or the layer previuos to it in terms of scale and semantic value. This means component layer may only use theme values and theme may only use global values and any layer may use utility definitions.

Additionaly, the global layer is unique but the theme and component layer contain various themes and components. Components are connected to a theme through a file that acts as a bridge: src/theme.config. The theme layer is connected to the global layer through imports. The following diagram shows how this works:

![Architecture](./docs/images/architecture.png "Architecture")