import {
  Button,
  Checkbox,
  Col,
  Container,
  Input,
  Radio,
  Row,
  TextArea,
  useTheme,
} from '@globalunderdog/common-front'
import { useState } from 'react'
import { Code } from '../components/Code'
import { Theme } from '../components/theme'

const Index: React.FC = () => {
  const theme = useTheme<Theme>()
  console.log(theme)
  const [radio, setRadio] = useState<number>(0)

  return (
    <Container>
      <Row>
        <Col md={4}>
          <Input label='Default Input' />
          <Checkbox label='Checkbox 1' id='ch1' />
          <Checkbox label='Checkbox 2' id='ch2' />
          <Checkbox label='Checkbox 3' id='ch3' />
          <Checkbox label='Checkbox 4' id='ch4' />
          <Checkbox label='Checkbox 5' id='ch5' />
          <br />
          <Radio
            id='rd1'
            label='Radio 1'
            checked={radio === 1}
            onChange={() => setRadio(1)}
          />
          <Radio
            id='rd2'
            label='Radio 2'
            checked={radio === 2}
            onChange={() => setRadio(2)}
          />
          <Radio
            id='rd3'
            label='Radio 3'
            checked={radio === 3}
            onChange={() => setRadio(3)}
          />
          <Radio
            id='rd4'
            label='Radio 4'
            checked={radio === 4}
            onChange={() => setRadio(4)}
          />
        </Col>
        <Col md={4}>
          <TextArea label='Default TextArea' />
        </Col>
        <Col md={4} style={{ padding: '50px 0' }}>
          <Button color='primary'>Foobar</Button>
          <br />
          <br />
          <br />
          <p
            style={{ fontFamily: 'sans-serif', fontSize: 16, lineHeight: 1.6 }}
          >
            Extended button, uses <Code>Theme.color.error.darkest</Code> (which
            is not present in <Code>GUTheme</Code>) and a custom blinking
            animation also set by the App's <Code>Theme</Code>
          </p>
          <Button color='error'>Foobar</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Index
