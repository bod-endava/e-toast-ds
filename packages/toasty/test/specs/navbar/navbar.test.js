
import NavbarSection from '../../pageobjects/navbar.section';
import { navbar } from '../../entities/navbar';
import { expect as expectChai } from 'chai';


describe('Navbar', () => {
    it('navbar should has the expected CSS values', () => {

        NavbarSection.open();
        let expectedValues = navbar;
        let actualValues = NavbarSection.getCTAButtonEnabledAttributes();
        expect(actualValues).toStrictEqual(expectedValues);

    });
});