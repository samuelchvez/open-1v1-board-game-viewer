import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { PlayersContext } from "../../GlobalProvider/Players";
import { GamesContext } from "../../GlobalProvider/Games";
import Connect4Board from "../../Connect4Board";

const Sim = () => {
  const { gameId } = useParams();
  const { getPlayer } = useContext(PlayersContext);
  const { getGame } = useContext(GamesContext);

  const game = getGame(gameId);
  const player1 = getPlayer(game.player1);
  const player2 = getPlayer(game.player2);
  const moves = game.moves;

  return (
    <div>
      <Link to="/">back</Link>
      <h1>Sim for game: {gameId}</h1>
      <h2>Player 1: {player1.username}</h2>
      <h2>Player 2: {player2.username}</h2>
      <h2>Winner: {game.winner}</h2>
      <Connect4Board moves={moves} stop={9} />
    </div>
  );
};

export default Sim;
