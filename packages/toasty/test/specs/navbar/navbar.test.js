
import NavbarSection from '../../pageobjects/navbar.section';
import { navbar } from '../../entities/navbar';
import { expect as expectChai } from 'chai';


describe('Navbar', () => {
    it('should has the expected CSS values', () => {

        NavbarSection.open();
        let expectedValues = navbar;
        let actualValues = NavbarSection.getInitialNavbarAttributes();

        expect(actualValues).toStrictEqual(expectedValues);
    });
});