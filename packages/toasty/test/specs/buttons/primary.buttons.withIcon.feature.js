import ButtonsSection from '../pageobjects/buttons.section';
import { primaryButtonEnabled, primaryButtonDisabled, primaryButtonHover } from '../entities/buttons';
import { expect as expectChai } from 'chai';

describe('Primary Buttons with Icon', () => {
    it('primary button with icon enabled should has the expected CSS values', () => {

        ButtonsSection.open();
        let expectedValues = primaryButtonEnabled;
        let actualValues = ButtonsSection.getPrimaryButtonEnabledAttributesWithIcon();
        expect(actualValues).toStrictEqual(expectedValues);

    });

    it('primary button with icon disabled should has the expected CSS values', () => {

        ButtonsSection.open();
        let expectedValues = primaryButtonDisabled;
        let actualValues = ButtonsSection.getPrimaryButtonDisabledAttributesWithIcon();
        expect(actualValues).toStrictEqual(expectedValues);

    });

    it('primary button with icon enabled hover should has the expected CSS values', () => {

        ButtonsSection.open();
        let expectedValues = primaryButtonHover;
        let actualValues = ButtonsSection.getPrimaryButtonHoverAttributesWithIcon();
        expect(actualValues).toStrictEqual(expectedValues);

    });

});
