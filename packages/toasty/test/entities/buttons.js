import { colors } from './constants/colors';
import { shapes } from './constants/shape';

const primaryButtonEnabled = {
    background: colors.primary.toLocaleLowerCase(),
    height: '40px',
    borderRadius: shapes.pill_radius,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '15px',
    letterSpacing: '0.16px',
    fontFamily: 'Roboto'.toLowerCase(),
    color: '#ffffff',
    borderColor: colors.primary.toLocaleLowerCase()
}

const primaryButtonDisabled = {
    ...primaryButtonEnabled,
    background: colors.disabled.toLocaleLowerCase(),
    borderColor: colors.disabled.toLocaleLowerCase()
}

const primaryButtonHover = {
    ...primaryButtonEnabled,
    background: colors.primary_dark.toLocaleLowerCase(),
    borderColor: colors.primary_dark.toLocaleLowerCase()
}

const outlinePrimaryButtonEnabled = {
    ...primaryButtonEnabled,
    background: '#ffffff'.toLocaleLowerCase(),
    borderColor: colors.primary.toLocaleLowerCase(),
    color: colors.primary.toLocaleLowerCase(),
    height: '39px',
}

const outlinePrimaryButtonDisabled = {
    ...primaryButtonEnabled,
    background: colors.disabled.toLocaleLowerCase(),
    borderColor: colors.disabled.toLocaleLowerCase(),
    height: '39px',
}

const outlinePrimaryButtonHover = {
    ...primaryButtonEnabled,
    background: colors.primary_dark.toLocaleLowerCase(),
    borderColor: colors.primary_dark.toLocaleLowerCase(),
    height: '39px',
}

const ctaButtonEnabled = {
    ...primaryButtonEnabled,
    background: colors.cta.toLocaleLowerCase(),
    borderColor: colors.cta.toLocaleLowerCase(),
}

const ctaButtonDisabled = {
    ...primaryButtonEnabled,
    background: colors.disabled.toLocaleLowerCase(),
    borderColor: colors.disabled.toLocaleLowerCase(),

}

const ctaButtonHover = {
    ...primaryButtonEnabled,
    background: colors.cta_dark.toLocaleLowerCase(),
    borderColor: colors.cta_dark.toLocaleLowerCase(),
}


export {
    primaryButtonEnabled,
    primaryButtonDisabled,
    primaryButtonHover,
    outlinePrimaryButtonEnabled,
    outlinePrimaryButtonDisabled,
    outlinePrimaryButtonHover, 
    ctaButtonEnabled,
    ctaButtonDisabled,
    ctaButtonHover
}
