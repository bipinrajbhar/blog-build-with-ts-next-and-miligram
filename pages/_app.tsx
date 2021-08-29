import Main from '@components/Layout/Main';
import {AppProps} from 'next/app';
import '../styles/globals.css'

function App({Component, pageProps}: AppProps) {
  return (
    <Main>
      <Component {...pageProps}/>
    </Main>
  )
}

export default App;
