import { useContext } from "react";

import { GamesContext } from "../../GlobalProvider/Games";
import Game from "../../Game";

const HomeTitle = ({ title }) => (
  <h1 className="font-bold mt-8 mb-4 text-2xl text-center text-gray-900">
    { title }
  </h1>
);

const Home = () => {
  const { getGames } = useContext(GamesContext);
  const games = getGames();

  return (
    <main>
      <HomeTitle title="Recent Games" />
      <div className="flex flex-wrap gap-4 justify-center max-w-7xl mx-auto px-8">
        {
          games.length ? games.map((game) => (
            <Game key={game.id} id={game.id} />
          )) : (
            <div className="text-gray-600">Games will be shown here in a moment</div>
          )
        }
      </div>
    </main>
  );
};

export default Home;
