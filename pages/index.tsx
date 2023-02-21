import { NextPage } from 'next';
import Head from 'next/head';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>PokéDex</title>
      </Head>
      <div className="grid min-h-screen place-items-center text-3xl text">
        Hello World
      </div>
    </>
  );
}

export default HomePage;
