import ButtonsSection from '../pageobjects/buttons.section';
import { outlinePrimaryButtonEnabled, outlinePrimaryButtonDisabled, outlinePrimaryButtonHover } from '../entities/buttons';
import { expect as expectChai } from 'chai';


describe('Outline Buttons', () => {
    it('outline primary button enabled should has the expected CSS values', () => {

        ButtonsSection.open();
        let expectedValues = outlinePrimaryButtonEnabled;
        let actualValues = ButtonsSection.getOutlinePrimaryButtonEnabledAttributes();
        expect(actualValues).toStrictEqual(expectedValues);

    });

    it('outline primary button disabled should has the expected CSS values', () => {

        ButtonsSection.open();
        let expectedValues = outlinePrimaryButtonDisabled;
        let actualValues = ButtonsSection.getOutlinePrimaryButtonDisabledAttributes();
        expect(actualValues).toStrictEqual(expectedValues);

    });

    it('outline primary button enabled hover should has the expected CSS values', () => {

        ButtonsSection.open();
        let expectedValues = outlinePrimaryButtonHover;
        let actualValues = ButtonsSection.getOutlinePrimaryButtonHoverAttributes();
        expect(actualValues).toStrictEqual(expectedValues);

    });
});
