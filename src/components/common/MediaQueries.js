import { css } from 'styled-components'

const sizes = {
  desktop: 1880,
  xlaptop: 1700,
  laptop: 1200,
  tablet: 900,
  phone: 600,
  sphone: 480,
  xsphone: 320 
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const mediaMin = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const print = (...args) => css`
    @media print {  
      ${css(...args)}
    }
  `