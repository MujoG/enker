import Head from 'next/head'
import Formcomponent from '../components/formcomponent'
import Otherbrands from '../components/otherbrands'
import Specscomponent from '../components/specscomponent'


export default function Home() {
  return (
    <div className='main-container'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="container">
          <div className="row">
              <Formcomponent/>
              <div className="container-items">
              <Specscomponent/>
              <Otherbrands/>
              </div>
          </div>
        </div>
     
    </div>
  )
}
