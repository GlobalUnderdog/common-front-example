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
 * at GUTheme. For example values like
 */
interface AppThemeProps extends GUThemeProps {
  readonly color: AppColors
  readonly animations: {
    readonly blink: Keyframes
  }
}

// Custom animation that will be consumed by the theme
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
