import { GetServerSideProps, NextPage } from 'next';
import { PokemonList } from '@/models/pokemon';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import Pagination from '@/components/pagination';

const HomePage: NextPage<{ pokemonList: PokemonList }> = ({ pokemonList }) => {
  return (
    <>
      <Head>
        <title>PokéDex</title>
      </Head>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 xl:grid-cols-3">
        {pokemonList.results.map((pokemon) => {
          const id = pokemon.url.split('/')[6];
          return (
            <div
              key={pokemon.name}
              className="rounded-xl border-4 border-sky-200 hover:border-sky-300 hover:bg-sky-100 dark:border-slate-800 dark:hover:border-sky-700 dark:hover:bg-sky-900"
            >
              <div className="pt-2 text-center text-2xl font-semibold">
                #{id} {pokemon.name}
              </div>
              <Image
                alt={pokemon.name}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                className="aspect-square w-full"
                loading="lazy"
                width="500"
                height="500"
              />
            </div>
          );
        })}
      </div>
      <Pagination />
    </>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const pageNo = Number(query.pageNo) | 0;

  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=18&offset=${18 * pageNo}`
  );
  const data = response.data;

  return {
    props: {
      pokemonList: data,
    },
  };
};
