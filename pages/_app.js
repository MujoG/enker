import Layout from '../components/layout';
import '../styles/globals.scss';
import ContextWrapper from '../context/ContextWrapper';

function MyApp({ Component, pageProps }) {
  return (
    <ContextWrapper>
    <Layout>
    <Component {...pageProps} />
  </Layout>
  </ContextWrapper>
  )
}

export default MyApp
