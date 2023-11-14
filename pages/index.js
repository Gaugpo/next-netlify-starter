import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Gautier Lassablière</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my beautiful Web App!" />
        <p className="description">
          You can modify my beautiful Web App in <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
