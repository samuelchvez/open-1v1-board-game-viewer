import { useContext, useEffect /* remove */ } from "react";

import { GlobalContext } from "../../GlobalProvider"; /* remove */
import { PlayersContext } from "../../GlobalProvider/Players"; /* remove */
import { GamesContext } from "../../GlobalProvider/Games";
import Game from "../../Game";

const Index = () => {
  const { getGames, setGame /* remove */ } = useContext(GamesContext);
  const { storeGame } = useContext(GlobalContext); /* remove */
  const { setPlayer /* remove */ } = useContext(PlayersContext); /* remove */
  const games = getGames();

  /* remove */
  useEffect(() => {
    storeGame(
      {
        game_id: 5467505121069103,
        movement_log: [
          [1, 0],
          [2, 1],
          [1, 2],
          [2, 3],
          [1, 4],
          [2, 5],
          [1, 6],
          [2, 0],
          [1, 1],
          [2, 2],
          [1, 3],
          [2, 4],
          [1, 5],
          [2, 6],
          [1, 0],
          [2, 1],
          [1, 2],
          [2, 3],
          [1, 4],
          [2, 5],
          [1, 6],
          [2, 0],
          [1, 1],
          [2, 2],
          [1, 3],
          [2, 4],
          [1, 5],
          [2, 6],
        ],
        winner_turn_id: 2,
        player_1: {
          id: 5524822000246183,
          user_name: "Gallanghof 1",
          wins: 0,
          loses: 1,
          draws: 0,
        },
        player_2: {
          id: 3593974262605687,
          user_name: "Gallanghof",
          wins: 1,
          loses: 0,
          draws: 0,
        },
      },
      setPlayer,
      setGame
    );
  }, []);

  return (
    <main>
      <h1>Games</h1>
      {games.map((game) => (
        <Game key={game.id} id={game.id} />
      ))}
    </main>
  );
};

export default Index;
