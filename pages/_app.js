import '../styles/App.scss'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-5WGCCSM'
}

TagManager.initialize(tagManagerArgs)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
