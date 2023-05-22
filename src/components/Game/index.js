import { useContext } from "react";
import { Link } from "react-router-dom";

import { PlayersContext } from "../GlobalProvider/Players";
import { GamesContext } from "../GlobalProvider/Games";

const GameDummy = ({ id, player1, player2, winner }) => (
  <div>
    <h2>
      <Link to={`/game-sim/${id}`}>Game: {id}</Link>
    </h2>
    <h3>Player 1: {player1}</h3>
    <h3>Player 2: {player2}</h3>
    <h3>Winner: {winner}</h3>
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
      player1={p1.username}
      player2={p2.username}
      winner={game.winner}
    />
  );
};

export default Game;
