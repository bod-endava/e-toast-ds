import ButtonsSection from '../../pageobjects/buttons.section';
import { iconButtonEnabled, iconButtonDisabled, iconButtonEnabledHover } from '../../entities/buttons';
import { expect as expectChai } from 'chai';

describe('Icon Button', () => {
    it('icon button enabled should has the expected CSS values', () => {

        ButtonsSection.open();
        let expectedValues = iconButtonEnabled;
        let actualValues = ButtonsSection.getIconButtonEnabledAttributes();
        expect(actualValues).toStrictEqual(expectedValues);

    });

    it('icon button disabled should has the expected CSS values', () => {

        ButtonsSection.open();
        let expectedValues = iconButtonDisabled;
        let actualValues = ButtonsSection.getIconButtonDisabledAttributes();
        expect(actualValues).toStrictEqual(expectedValues);

    });

    it('icon button enabled hover should has the expected CSS values', () => {

        ButtonsSection.open();
        let expectedValues = iconButtonEnabledHover;
        let actualValues = ButtonsSection.getIconButtonHoverAttributes();
        expect(actualValues).toStrictEqual(expectedValues);

    });

});
