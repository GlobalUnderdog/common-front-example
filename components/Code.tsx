import { styled } from './theme'

export const Code = styled.code`
  color: ${(p) => p.theme.color.error.darkest};
  background-color: ${(p) => p.theme.color.canvas.light};
  font-family: 'Courier New', Courier, monospace;
`
