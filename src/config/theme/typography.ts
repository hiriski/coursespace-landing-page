import { TypographyOptions } from '@mui/material/styles/createTypography'

export const fontFamily = [
  '"Poppins",-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
].join(',')

const headingLineHeight = 1.4

const typography: TypographyOptions = {
  fontFamily,
  fontWeightLight: 400,
  fontWeightRegular: 500,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    fontSize: 34,
    lineHeight: headingLineHeight,
  },
  h2: {
    fontWeight: 700,
    fontSize: 30,
    lineHeight: headingLineHeight,
  },
  h3: {
    fontSize: 28,
    fontWeight: 700,
    lineHeight: headingLineHeight,
  },
  h4: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: headingLineHeight,
  },
  h5: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: headingLineHeight,
  },
  h6: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: headingLineHeight,
  },
  body1: {
    fontSize: '0.875rem',
  },
  body2: {
    fontSize: '0.875rem',
  },
  subtitle1: {
    fontSize: '0.8rem',
  },
  subtitle2: {
    fontSize: '0.75rem',
  },
}

export default typography
