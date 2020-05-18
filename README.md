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