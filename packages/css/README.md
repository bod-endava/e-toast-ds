# @e-toast/css

## Getting started

First run `yarn install` to install dependencies. Then `yarn start` will watch for changes in the source code and build in development mode.

Run `yarn build` to make a production build

# 🧰 Tech Stack

- Sass as CSS preprocessor
- Dart-sass for sass compilation
- Gulp as task runner
- Node for some pre compilation scripts

### Creating CSS Releases

To do a release run `npm run release:css`. Keep in mind this process will create a release branch and build the release artifact on your local repo. **Save your progress before running this command**. After finishing your release simply `git stash` and move to the development branch (`git checkout develop`), deleting any remaining release files afterwards.
