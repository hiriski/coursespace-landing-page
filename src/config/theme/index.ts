import { createTheme as createMuiTheme, Theme } from '@mui/material/styles'

import typography from './typography'
import paletteBase from './palette-base'
import paletteLight from './palette-light'
import paletteDark from './palette-dark'
import shadows from './shadows'

// default
const createTheme = (darkMode?: boolean): Theme => {
  const palette = darkMode ? { ...paletteBase, ...paletteDark } : { ...paletteBase, ...paletteLight }
  return createMuiTheme({
    palette,
    typography,
    shadows,
  })
}

const theme = createTheme(false)

export { paletteBase, paletteLight, paletteDark, typography, shadows }
export default theme
