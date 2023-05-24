import { useContext } from "react";
import { Link } from "react-router-dom";

import { PlayersContext } from "../GlobalProvider/Players";
import { GamesContext } from "../GlobalProvider/Games";
import Connect4PlayersDisplay from "../Connect4PlayersDisplay";

const GameDummy = ({ id, player1, player2 }) => (
  <div className="border border-gray-400 max-w-lg p-4 rounded">
    <div className="font-bold text-lg mb-4 text-center">
      <Link to={`/game-sim/${id}`} className="font-light text-gray-800 underline">{id}</Link>
    </div>
    <Connect4PlayersDisplay player1={player1} player2={player2} />
  </div>
);

const Game = ({ id }) => {
  const { getPlayer } = useContext(PlayersContext);
  const { getGame } = useContext(GamesContext);

  const game = getGame(id);
  const p1 = getPlayer(game.player1);
  const p2 = getPlayer(game.player2);

  return (
    <GameDummy
      id={id}
      player1={p1}
      player2={p2}
    />
  );
};

export default Game;
