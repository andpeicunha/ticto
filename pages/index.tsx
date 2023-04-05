import Head from "next/head";
import List from "./src/components/Lista";

function Home() {
  return (
    <>
      <Head>
        <title>Ticto</title>
        <meta name="description" content="Sua descrição aqui" />
        {/* Adicione mais tags meta, links para estilos, scripts etc. aqui */}
      </Head>
      <List />
    </>
  );
}

export default Home;
