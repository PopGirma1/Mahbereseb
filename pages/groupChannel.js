import Head from 'next/head'
import dynamic from 'next/dynamic'

const AblyChatComponent = dynamic(() => import('../components/AblyChatComponent'), { ssr: false });

export default function GroupChannel() {
  return (
    <div className="groupChannelContainer">
      <Head>
        <title>Channel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='ablyChatComponent'>
        <h1 className="title"> Mahbereseb Channel</h1>
        <AblyChatComponent />
      </main>
    </div>
  )
}
