# Testing your component

The next steps are a reference to create unit tests on your components:

1 - Create an entity that represent your component in `packages/toasty/test/entities/{yourcomponent}.js`. This entity is a JavaScript Object where we consolidate the expected values of the component. The next example illustrates the entity for the button component:

```js
import { colors } from './constants/colors';
import { shapes } from './constants/shape';

const primaryButtonEnabled = {
    background: colors.primary.toLocaleLowerCase(),
    height: '40px',
    borderRadius: shapes.pill_radius,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '15px',
    letterSpacing: '0.16px',
    fontFamily: 'Roboto'.toLowerCase(),
    color: '#ffffff',
    borderColor: colors.primary.toLocaleLowerCase()
}
```

> The import of the constants `colors` and `shape` to retrieve the global tokens that use the component by default.

2 - Create a pageobject in `packages/toasty/src/pageobjects/{yourcomponent}.js`. The page objet use the class selector define to the component for add a section in a browser page. The next snippet is the case for the button:

```js
import Page from './page';
import { primaryButtonHover} from '../entities/buttons';

class ButtonsSection extends Page {

    get primaryButtonEnabled() { return $('//*[@class="eds-primary-button eds-button-no-size " and not(@disabled)]') }

    getButtonAttributes(button) {
        return {
            background: button.getCSSProperty('background-color').parsed.hex,
            height: button.getCSSProperty('height').value,
            borderRadius: button.getCSSProperty('border-radius').value,
            fontSize: button.getCSSProperty('font-size').value,
            fontWeight: button.getCSSProperty('font-weight').value,
            lineHeight: button.getCSSProperty('line-height').value,
            letterSpacing: button.getCSSProperty('letter-spacing').value,
            fontFamily: button.getCSSProperty('font-family').value,
            color: button.getCSSProperty('color').parsed.hex,
            borderColor: button.getCSSProperty('border-color').parsed.hex,
        }
    }

    getPrimaryButtonEnabledAttributes() {
        this.primaryButtonEnabled.scrollIntoView();
        return this.getButtonAttributes(this.primaryButtonEnabled);
    }
}

export default new ButtonsSection();
```
> The import of the entity and how the get function match with the css properties defined in the entity.

3 - Create your unit tests in `packages/toasty/test/specs/{yourcomponent}/{yourcomponent}.test.js`. This file will store the suite of test associated to the component. A expected test is hover the expected css values. Continue with the button example, this will be the unit test on the prymary button enabled:

```javascript
import ButtonsSection from '../pageobjects/buttons.section';
import { primaryButtonEnabled } from '../entities/buttons';

describe('Primary Buttons', () => {
    it('primary button enabled should has the expected CSS values', () => {

        ButtonsSection.open();

        let expectedValues = primaryButtonEnabled;
        let actualValues = ButtonsSection.getPrimaryButtonEnabledAttributes();
        expect(actualValues).toStrictEqual(expectedValues);
    });
});
```

4 - Open two terminals (terminal one and termina two)

5 - In terminal one, run the *sandbox* project with the next command:

```
yarn start
```

6 - In terminal two, run all the tests with the command:

```
yarn test
```

7 - In terminal two, run an specefic test with the command:

```
yarn test -- --spec ./test/specs/buttons/primary.buttons.test.js
```

> Note: replace the buttons component with the component in development.

