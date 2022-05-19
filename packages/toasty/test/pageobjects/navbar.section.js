import Page from './page';
class NavbarSection extends Page {
    get navbarEnabled() { return $('//*[@class="eds-navbar"]') }

    getNavbarAttributes(navbar) {
        return {
            display: navbar.getCSSProperty('display').value,
            justifyContent: navbar.getCSSProperty('justifyContent').value,
            fontFamily: navbar.getCSSProperty('font-family').value
        }
    }

    getInitialNavbarAttributes() {
        this.navbarEnabled.scrollIntoView();
        this.navbarEnabled.moveTo();

        return this.getNavbarAttributes(this.navbarEnabled);
    }

    open() {
        return super.open('#');
    }
}

export default new NavbarSection();
