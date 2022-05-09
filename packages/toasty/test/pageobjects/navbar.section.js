
import Page from './page';
import { navbar } from '../entities/navbar';

class NavbarSection extends Page {
    get navbar() { return $('//*[@class="eds-navbar " and not(@disabled)]') }

    getNavbarAttributes(button) {
        return {
            display: navbar.getCSSProperty('display').value,
            justifyContent: navbar.getCSSProperty('space-between').value,
            padding: navbar.getCSSProperty('padding').value,
            fontSize: button.getCSSProperty('font-size').value,
            fontWeight: button.getCSSProperty('font-weight').value,
            lineHeight: button.getCSSProperty('line-height').value,
            letterSpacing: button.getCSSProperty('letter-spacing').value,
            fontFamily: button.getCSSProperty('font-family').value,
        }
    }
}

export default new NavbarSection();
