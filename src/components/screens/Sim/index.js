import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { PlayersContext } from "../../GlobalProvider/Players";
import { GamesContext } from "../../GlobalProvider/Games";
import Connect4Board from "../../Connect4Board";
import Connect4PlayersDisplay from "../../Connect4PlayersDisplay";

const SimBack = () => (
  <Link to="/" className="border border-gray-600 text-gray-700 cursor-pointer mb-8 px-4 py-1 rounded self-center">← Back</Link>
)

const SimTitle = ({ gameId }) => (
  <h1 className="font-bold mt-8 mb-4 text-2xl text-center text-gray-900">Simulation: <span className="font-light">{gameId}</span></h1>
);

const Sim = () => {
  const { gameId } = useParams();
  const { getPlayer } = useContext(PlayersContext);
  const { getGame } = useContext(GamesContext);

  const game = getGame(gameId);
  const player1 = getPlayer(game.player1);
  const player2 = getPlayer(game.player2);
  const moves = game.moves;

  // TODO: switch for game type

  return (
    <div className="align-middle flex flex-col">
      <SimTitle gameId={gameId} />
      <SimBack />
      <Connect4Board moves={moves} stop={9} />
      <Connect4PlayersDisplay player1={player1} player2={player2} />
    </div>
  );
};

export default Sim;
