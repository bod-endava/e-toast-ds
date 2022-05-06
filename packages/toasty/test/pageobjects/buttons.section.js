import Page from './page';
import { primaryButtonHover, ctaButtonHover, iconButtonEnabledHover } from '../entities/buttons';

class ButtonsSection extends Page {

    get primaryButtonEnabled() { return $('//*[@class="eds-primary-button eds-button-no-size " and not(@disabled)]') }
    get primaryButtonDisabled() { return $('//*[@class="eds-primary-button eds-button-no-size " and @disabled]') }
    get outlinePrimaryButtonEnabled() { return $('//*[@class="eds-outline-button eds-button-no-size " and not(@disabled)]') }
    get outlinePrimaryButtonDisabled() { return $('//*[@class="eds-outline-button eds-button-no-size " and @disabled]') }
    get ctaButtonEnabled() { return $('//*[@class="eds-cta-button eds-button-no-size " and not(@disabled)]') }
    get ctaButtonDisabled() { return $('//*[@class="eds-cta-button eds-button-no-size " and @disabled]') }
    get primaryButtonEnabledWithIcon() { return $('//*[@class="eds-primary-button eds-button-no-size icon-announcement" and not(@disabled)]') }
    get primaryButtonDisabledWithIcon() { return $('//*[@class="eds-primary-button eds-button-no-size icon-announcement" and @disabled]') }
    get iconButtonEnabled() { return $('//*[@class="eds-icon-button eds-button-no-size icon-add" and not(@disabled)]') }
    get iconButtonDisabled() { return $('//*[@class="eds-icon-button eds-button-no-size icon-add" and @disabled]') }

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

    getIconButtonAttributes(button) {
        return {
            background: button.getCSSProperty('background-color').parsed.hex,
            height: button.getCSSProperty('height').value,
            width: button.getCSSProperty('width').value,
            fontSize: button.getCSSProperty('font-size').value,
            borderWidth: button.getCSSProperty('border-width').value,
            padding: button.getCSSProperty('padding').value,
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

    getPrimaryButtonEnabledAttributesWithIcon() {
        this.primaryButtonEnabledWithIcon.scrollIntoView();
        return this.getButtonAttributes(this.primaryButtonEnabledWithIcon);
    }

    getPrimaryButtonDisabledAttributesWithIcon() {
        this.primaryButtonDisabledWithIcon.scrollIntoView();
        return this.getButtonAttributes(this.primaryButtonDisabledWithIcon);
    }

    getPrimaryButtonHoverAttributesWithIcon() {
        this.primaryButtonEnabledWithIcon.scrollIntoView();
        this.primaryButtonEnabledWithIcon.moveTo();
        this.primaryButtonEnabledWithIcon.waitUntil(() => {
            return this.primaryButtonEnabledWithIcon.getCSSProperty('background-color').parsed.hex === primaryButtonHover.background;
        }, {
            timeout: 5000,
            timeoutMsg: `Expected primary button background color to change after 5s,
            it was ${this.primaryButtonEnabledWithIcon.getCSSProperty('background-color').parsed.hex}`
        });
        return this.getButtonAttributes(this.primaryButtonEnabledWithIcon);
    }

    getIconButtonEnabledAttributes() {
        this.iconButtonEnabled.scrollIntoView();
        return this.getIconButtonAttributes(this.iconButtonEnabled);
    }

    getIconButtonDisabledAttributes() {
        this.iconButtonDisabled.scrollIntoView();
        return this.getIconButtonAttributes(this.iconButtonDisabled);
    }

    getIconButtonHoverAttributes() {
        this.iconButtonEnabled.scrollIntoView();
        this.iconButtonEnabled.moveTo();
        this.iconButtonEnabled.waitUntil(() => {
            return this.iconButtonEnabled.getCSSProperty('background-color').parsed.hex === iconButtonEnabledHover.background;
        }, {
            timeout: 5000,
            timeoutMsg: `Expected primary button background color to change after 5s,
            it was ${this.iconButtonEnabled.getCSSProperty('background-color').parsed.hex}`
        });
        return this.getIconButtonAttributes(this.iconButtonEnabled);
    }

    open() {
        return super.open('#');
    }
}

export default new ButtonsSection();
