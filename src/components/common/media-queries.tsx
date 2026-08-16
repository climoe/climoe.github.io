import { css, Interpolation } from 'styled-components';

export const mediaQueries = {
	laptop: `${1500 / 16}em`, //93.75em
	tablet: `${900 / 16}em`, //56.25em
	phone: `${650 / 16}em`, //40.625em
	sphone: `${480 / 16}em`, //30em
	sphone2: `${400 / 16}em`, //25em
	xsphone: `${320 / 16}em` //20
};

export const print = (...args: Interpolation<NoInfer<object>>[]) => css`
	@media print {
		${css({}, ...args)}
	}
`;
