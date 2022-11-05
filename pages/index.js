import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Oxford Book of English Verse</title>
      </Head>

      <main>
        <Header title="Oxford Book of English Verse" />
      </main>

    </div>
  )
}
