import {
  ButtonProps,
  CreateStyled,
  css,
  GUColorTheme,
  GUTheme,
  GUThemeProps,
  Keyframes,
  keyframes,
  makeTheme,
  Palette,
  untypedStyled,
} from '@globalunderdog/common-front'

interface ExtendedColor extends Palette {
  readonly darkest: string
}

interface AppColors extends GUColorTheme {
  readonly error: ExtendedColor
}

/**
 * The basic properties comprising the theme of the app.
 *
 * GUThemeProps is related to the properties (not global styles) defined
 * at GUTheme. For example values like colors, animations, font families,
 * etc.
 */
interface AppThemeProps extends GUThemeProps {
  readonly color: AppColors
  readonly animations: {
    readonly blink: Keyframes
  }
}

// Custom animation that will be consumed by Buttons when `prop.color === 'error'`
const blink = keyframes`
  0% { background-color: red; }
  50% { background-color: white; }
  100% { background-color: red; }
`

export type Theme = GUTheme<AppThemeProps>
export const styled = untypedStyled as CreateStyled<Theme>

export const theme = makeTheme<Theme>({
  color: {
    error: {
      darkest: '#800',
    },
  },
  // We're not replacing the default style since we're extending
  // the theme, in case had a more radical change at our extended Theme
  // we would probably switch `replace` to true to avoid the default rules
  // from overlapping the custom ones.
  button: {
    css: ({ animations, color }, props?: ButtonProps) => css`
      font-family: sans-serif;
      ${props?.color === 'error' &&
      css`
        color: blue;
        animation: ${animations.blink} infinite ease 1s;
        &:hover {
          color: ${color.canvas.light} !important;
          background-color: ${color.error.darkest} !important;
        }
      `}
    `,
  },
  animations: {
    blink,
  },
})
