import {createClient} from '@sanity/client'
import {WishList} from '../components/WishList'

const client = createClient({
  projectId: process.env.PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: true,
})

export default function IndexPage({items}) {
  return (
    <>
      <header className="bg-cyan-900 p-10">
        <h1 className="text-5xl text-center font-serif text-stone-400">Daniels Önskelista</h1>
      </header>
      <video className="w-full min-h-v-big object-cover -z-50 absolute" loop autoPlay playsInline muted preload>
        <source src="./background.mp4" type="video/mp4" />
      </video>
      <main>
        <div className="bg-cyan-900 w-50 pl-10 pr-10 pb-0">
          <WishList items={items} />
        </div>
        {/* <div className="iframe-wrapper"> */}
        {/* <iframe
          src="https://player.vimeo.com/video/512816473?h=47498abedd&autoplay=1&autopause=0&loop=1&title=0&byline=0&portrait=0&background=1&muted=1"
          // style="position:absolute;top:0;left:0;width:100%;height:100%;"
          style={{position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vw', objectFit: "cover"}}
          frameborder="0"
          allow="autoplay"
        ></iframe> */}

        {/* </div> */}
        {/* <script src="https://player.vimeo.com/api/player.js"></script> */}
      </main>
    </>
  )
}

export async function getStaticProps() {
  const query = ` 
  *[_type == "item"] | order(_updatedAt asc)
  {
    name,
    price,
    link,
    image {
      asset -> {
        url
      }
    }
  } 
  `
  const items = await client.fetch(query)
  return {
    props: {
      items,
    },
  }
}
