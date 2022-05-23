
import Page from './page';

class LoaderSection extends Page {
    get loaderEnabled() { return $('//*[@class="eds-loader"]') }

    getLoaderAttributes(loader) {
        return {
            border: loader.getCSSProperty('border').value,
            width: loader.getCSSProperty('width').value,
            height: loader.getCSSProperty('height').value,
            borderRadius: loader.getCSSProperty('borderRadius').value,
            borderLeftColor: loader.getCSSProperty('borderLeftColor').value
        }
    }

    getInitialLoaderAttributes() {
        this.loaderEnabled.scrollIntoView();
        this.loaderEnabled.moveTo();

        return this.getLoaderAttributes(this.loaderEnabled);
    }

    open() {
        return super.open('#');
    }
}

export default new LoaderSection();
