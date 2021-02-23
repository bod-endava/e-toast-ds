import ButtonsSection from '../pageobjects/buttons.section';
import { ctaButtonEnabled, ctaButtonDisabled, ctaButtonHover } from '../entities/buttons';
import { expect as expectChai } from 'chai';


describe('CTA Buttons', () => {
    it('cta button enabled should has the expected CSS values', () => {

        ButtonsSection.open();
        let expectedValues = ctaButtonEnabled;
        let actualValues = ButtonsSection.getCTAButtonEnabledAttributes();
        expect(actualValues).toStrictEqual(expectedValues);

    });

    it('cta button disabled should has the expected CSS values', () => {

        ButtonsSection.open();
        let expectedValues = ctaButtonDisabled;
        let actualValues = ButtonsSection.getCTAButtonDisabledAttributes();
        expect(actualValues).toStrictEqual(expectedValues);

    });

    it('cta button enabled hover should has the expected CSS values', () => {

        ButtonsSection.open();
        let expectedValues = ctaButtonHover;
        let actualValues = ButtonsSection.getCTAButtonHoverAttributes();
        expect(actualValues).toStrictEqual(expectedValues);

    });
});
