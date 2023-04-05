import Head from 'next/head'
import { Container } from './Styled'
import List from './src/components/List'

function Home() {
  return (
    <>
      <Head>
        <title>Ticto</title>
        <meta name="description" content="Sua descrição aqui" />
        {/* Adicione mais tags meta, links para estilos, scripts etc. aqui */}
      </Head>
      <List />
      <Container />
    </>
  )
}

export default Home
