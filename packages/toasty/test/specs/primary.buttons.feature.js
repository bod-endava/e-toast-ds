import ButtonsSection from '../pageobjects/buttons.section';
import { primaryButtonEnabled, primaryButtonDisabled, primaryButtonHover } from '../entities/buttons';
import { expect as expectChai } from 'chai';

describe('Primary Buttons', () => {
    it('primary button enabled should has the expected CSS values', () => {

        ButtonsSection.open();
        let expectedValues = primaryButtonEnabled;
        let actualValues = ButtonsSection.getPrimaryButtonEnabledAttributes();
        expect(actualValues).toStrictEqual(expectedValues);

    });

    it('primary button disabled should has the expected CSS values', () => {

        ButtonsSection.open();
        let expectedValues = primaryButtonDisabled;
        let actualValues = ButtonsSection.getPrimaryButtonDisabledAttributes();
        expect(actualValues).toStrictEqual(expectedValues);

    });

    it('primary button enabled hover should has the expected CSS values', () => {

        ButtonsSection.open();
        let expectedValues = primaryButtonHover;
        let actualValues = ButtonsSection.getPrimaryButtonHoverAttributes();
        expect(actualValues).toStrictEqual(expectedValues);

    });
});
