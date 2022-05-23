
import LoaderSection from '../../pageobjects/loader.section';
import { loader } from '../../entities/loader.entity';


describe('Loader', () => {
    it('should has the expected CSS values', () => {

        LoaderSection.open();
        let expectedValues = loader;
        let actualValues = LoaderSection.getInitialLoaderAttributes();

        expect(actualValues).toStrictEqual(expectedValues);
    });
});
