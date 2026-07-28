import { css, Interpolation } from 'styled-components';


type FixedSizeName = 'desktop' | 'xlaptop' | 'mlaptop' | 'laptop' | 'tablet'| 'phone' | 'sphone' | 'sphone2' | 'xsphone';
type FixedSizeValue = 1880 | 1700 | 1500 | 1200 | 900 | 650 | 480 | 400 | 320;


export const mediaQueries = {
    desktop: `${1880 / 16}em`,
    xlaptop: `${1700 / 16}em`,
    mlaptop: `${1500 / 16}em`,
    laptop: `${1200 / 16}em`,
    tablet: `${900 / 16}em`,
    phone: `${650 / 16}em`,
    sphone: `${480 / 16}em`,
    sphone2: `${400 / 16}em`,
    xsphone: `${320 / 16}em`
 }


export const print = (...args : Interpolation<NoInfer<object>>[]) =>
  css`
    @media print {  
      ${css({},...args)}
    }
  `