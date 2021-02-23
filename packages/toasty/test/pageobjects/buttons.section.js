import Page from './page';
import { primaryButtonHover, ctaButtonHover } from '../entities/buttons';



class ButtonsSection extends Page {

    get primaryButtonEnabled() { return $('//*[@class="eds-primary-button " and not(@disabled)]') }
    get primaryButtonDisabled() { return $('//*[@class="eds-primary-button " and @disabled]') }
    get outlinePrimaryButtonEnabled() { return $('//*[@class="eds-outline-button " and not(@disabled)]') }
    get outlinePrimaryButtonDisabled() { return $('//*[@class="eds-outline-button " and @disabled]') }
    get ctaButtonEnabled() { return $('//*[@class="eds-cta-button " and not(@disabled)]') }
    get ctaButtonDisabled() { return $('//*[@class="eds-cta-button " and @disabled]') }

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

    getPrimaryButtonDisabledAttributes() {
        this.primaryButtonDisabled.scrollIntoView();
        return this.getButtonAttributes(this.primaryButtonDisabled);
    }

    getPrimaryButtonHoverAttributes() {
        this.primaryButtonEnabled.scrollIntoView();
        this.primaryButtonEnabled.moveTo();
        this.primaryButtonEnabled.waitUntil(() => {
            return this.primaryButtonEnabled.getCSSProperty('background-color').parsed.hex === primaryButtonHover.background;
        }, {
            timeout: 5000,
            timeoutMsg: `Expected primary button background color to change after 5s,
            it was ${this.primaryButtonEnabled.getCSSProperty('background-color').parsed.hex}`
        });
        return this.getButtonAttributes(this.primaryButtonEnabled);
    }

    getOutlinePrimaryButtonEnabledAttributes() {
        this.outlinePrimaryButtonEnabled.scrollIntoView();
        return this.getButtonAttributes(this.outlinePrimaryButtonEnabled);
    }

    getOutlinePrimaryButtonDisabledAttributes() {
        this.outlinePrimaryButtonDisabled.scrollIntoView();
        return this.getButtonAttributes(this.outlinePrimaryButtonDisabled);
    }

    getOutlinePrimaryButtonHoverAttributes() {
        this.outlinePrimaryButtonEnabled.scrollIntoView();
        this.outlinePrimaryButtonEnabled.moveTo();
        this.outlinePrimaryButtonEnabled.waitUntil(() => {
            return this.outlinePrimaryButtonEnabled.getCSSProperty('background-color').parsed.hex === primaryButtonHover.background;
        }, {
            timeout: 5000,
            timeoutMsg: `Expected primary button background color to change after 5s,
            it was ${this.outlinePrimaryButtonEnabled.getCSSProperty('background-color').parsed.hex}`
        });
        return this.getButtonAttributes(this.outlinePrimaryButtonEnabled);
    }

    getCTAButtonEnabledAttributes() {
        this.ctaButtonEnabled.scrollIntoView();
        return this.getButtonAttributes(this.ctaButtonEnabled);
    }

    getCTAButtonDisabledAttributes() {
        this.ctaButtonDisabled.scrollIntoView();
        return this.getButtonAttributes(this.ctaButtonDisabled);
    }

    getCTAButtonHoverAttributes() {
        this.ctaButtonEnabled.scrollIntoView();
        this.ctaButtonEnabled.moveTo();
        this.ctaButtonEnabled.waitUntil(() => {
            return this.ctaButtonEnabled.getCSSProperty('background-color').parsed.hex === ctaButtonHover.background;
        }, {
            timeout: 5000,
            timeoutMsg: `Expected primary button background color to change after 5s,
            it was ${this.ctaButtonEnabled.getCSSProperty('background-color').parsed.hex}`
        });
        return this.getButtonAttributes(this.ctaButtonEnabled);
    }

    open() {
        return super.open('#');
    }
}

export default new ButtonsSection();
