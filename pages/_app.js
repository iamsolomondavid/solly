import { Layout } from '../components/Layout'
import '../styles/globals.scss'
// import firebase 
import firebase from '../firebase/initFirebase'
firebase();

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
