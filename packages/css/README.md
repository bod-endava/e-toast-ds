
# 💅 @e-toast/css
Starting using e-toast is straight forward. We provide resources such as best practices, component documentation, sketch and Figma files, and more.

# 🏗️ Build

1. Install dependencies for the css project

```zsh
npm install
```

2. Build the css package:

```zsh
npm run build
```
# 📁 Folder Structure
This repository use [lerna](https://github.com/lerna/lerna) a tool for manage JavaScript projects with multiple packages. In that case the recommendation is follow the resources in the `/packages` folder that have the next contents:

- `/docs`: folder to store the docs of the css project
- `/sass`: compiled folder with the contents of the `src` folder
- `/scripts`: folder with the script to consume themes for e-toast
- `/src`: main folder
- `/src/atoms`: folder with the e-toast atoms
- `/src/globals`: folder with the e-toast globals
- `/src/themes`: folder with the customizable themes for e-toast
- `/src/utility`: folder for the elements that complement e-toast

For more information, please read the respective `README.md` files for each project.

# 🧰 Tech Stack

- <img src="https://camo.githubusercontent.com/7436ecde5696a856dd865d3fc81fa2612054f468e12fdb5d591e7a19a46fc9f7/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d5361737326636f6c6f723d434336363939266c6f676f3d53617373266c6f676f436f6c6f723d464646464646266c6162656c3d" alt="Sass" data-canonical-src="https://img.shields.io/static/v1?style=for-the-badge&amp;message=Sass&amp;color=CC6699&amp;logo=Sass&amp;logoColor=FFFFFF&amp;label=" style="max-width: 100%;">
- Dart-sass for sass compilation
- <img src="https://camo.githubusercontent.com/f6eaf59e300abf5e7a4a9bf6b6547bbbac7d714c0b568ca4b51e6e20223dcff8/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d67756c7026636f6c6f723d434634363437266c6f676f3d67756c70266c6f676f436f6c6f723d464646464646266c6162656c3d" alt="gulp" data-canonical-src="https://img.shields.io/static/v1?style=for-the-badge&amp;message=gulp&amp;color=CF4647&amp;logo=gulp&amp;logoColor=FFFFFF&amp;label=" style="max-width: 100%;">Gulp as task runner
- <img src="https://camo.githubusercontent.com/faec9d89bd2c7d47b91d988dcd0f27011c27e8191d45836cfa36bf2b3c2a92bd/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4e6f64652e6a7326636f6c6f723d333339393333266c6f676f3d4e6f64652e6a73266c6f676f436f6c6f723d464646464646266c6162656c3d" alt="Node.js" data-canonical-src="https://img.shields.io/static/v1?style=for-the-badge&amp;message=Node.js&amp;color=339933&amp;logo=Node.js&amp;logoColor=FFFFFF&amp;label=" style="max-width: 100%;">Node for some pre compilation scripts

# 🎨 Custom Themes

The customization of the design system is possible thank to the group for these tokens:

- Colors
- Fonts
- Shapes

To create your own theme, please follow the next steps

1. Go to `/src/themes`
2. Duplicate the  `/src/themes/default` and rename with your theme name (e.g. `src/themes/my-theme/`)
3.  Update the values in the `src/themes/my-theme/constants/colors.scss` if you want to customize the colors of your theme. We can replicate the same process for update fonts and shapes.
4. In the `/src/theme.config` file update the value of the component that you want to consume with a customize theme from `default` to `my-theme`, in this case.
5. Save your changes and review the updates in the sandbox project

# ✈️ CSS Release

> TODO: Complete release guide

To do a release run `npm run release:css`. Keep in mind this process will create a release branch and build the release artifact on your local repo. **Save your progress before running this command**. After finishing your release simply `git stash` and move to the development branch (`git checkout develop`), deleting any remaining release files afterwards.
