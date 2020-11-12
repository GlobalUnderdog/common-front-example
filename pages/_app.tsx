import { GlobalProvider } from '@globalunderdog/common-front'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'
import { theme } from '../components/theme'

const AppHead: React.FC = () => (
  <Head>
    <meta charSet='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
    <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
    <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
    <link rel='manifest' href='/site.webmanifest' />
    <link href='/icons.css' rel='stylesheet' />
    <title>Example</title>
  </Head>
)

const AppProviders: React.FC = ({ children }) => (
  <>
    <GlobalProvider theme={theme}>{children}</GlobalProvider>
  </>
)

const AppBody: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

const App: React.FC<AppProps> = (props) => {
  return (
    <>
      <AppHead />
      <AppProviders>
        <AppBody {...props} />
      </AppProviders>
    </>
  )
}

export default App
