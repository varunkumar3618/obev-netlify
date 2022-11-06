import { useRouter } from 'next/router'
import { getTitleByPid, getPoemStanzasByPid, getAllPids } from 'lib/api'
import Head from 'next/head'
import Header from '@components/Header'
import Poem from '@components/Poem'

const Post = ({title, poemStanzas}) => {
    const router = useRouter()
    const { pid } = router.query

    // const title = getTitleByPid(pid)
    // const title = "This is the title."
    return (
      <div class="m-8" className='container'>
        <Head>
          <title>{title}</title>
        </Head>

        <main>
          <Header title={title} />
          <Poem poemStanzas={poemStanzas} />
        </main>
      </div>
    )
  }
  
  export default Post

  export async function getStaticProps({params}) {
    return {props: {
      title: getTitleByPid(params["pid"]),
      poemStanzas: await getPoemStanzasByPid(params["pid"])
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
