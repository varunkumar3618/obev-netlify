import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>The Oxford Book of English Verse</title>
      </Head>

      <main>
        <Header title="The Oxford Book of English Verse, 1250 - 1900" />
      </main>

    </div>
  )
}
