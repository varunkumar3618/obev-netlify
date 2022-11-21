import { useRouter } from 'next/router'
import { getTitleByPid, getPoemStanzasByPid, getAllPids, getNumPoems } from 'lib/api'
import {incrementPid, decrementPid} from 'lib/utils'
import Head from 'next/head'
import Header from '@components/Header'
import Poem from '@components/Poem'
import PoemLinks from '@components/PoemLinks'

const Post = ({title, poemStanzas, prevPid, nextPid}) => {
    const router = useRouter()
    const { pid } = router.query

    return (
      <div className='container flex justify-center'>
        <Head>
          <title>{title}</title>
        </Head>

        <main>
          <Header title={title} />
          <Poem poemStanzas={poemStanzas} />
          <PoemLinks prevPid={prevPid} nextPid={nextPid}/>
        </main>
      </div>
    )
  }
  
  export default Post

  export async function getStaticProps({params}) {
    return {props: {
      title: getTitleByPid(params["pid"]),
      poemStanzas: await getPoemStanzasByPid(params["pid"]),
      prevPid: decrementPid(params["pid"]),
      nextPid: incrementPid(params["pid"], getNumPoems())
    }}
  }

  export async function getStaticPaths() {
    const pids = getAllPids()
    return {
        paths: pids.map((pid) => {
            return {
                "params": {"pid": pid}
            }
        }),
        fallback: false
    }
  }
