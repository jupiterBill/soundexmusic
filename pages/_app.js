import '../styles/globals.css'
import  {NavBar,Footer} from '../Elements/elements-index';
import { NFTMarketplaceProvider } from '../Context/SoundexContext';

function MyApp({ Component, pageProps }) {
  return (
  <div>
    <NFTMarketplaceProvider>
  <NavBar />
  <Component {...pageProps} />
  <Footer />
  </NFTMarketplaceProvider>
  </div>
  )
}

export default MyApp
