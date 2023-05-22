import { createContext, useCallback } from "react";

import PlayersProvider from "./Players";
import GamesProvider from "./Games";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const storeGame = useCallback((game, setPlayer, setGame) => {
    setPlayer({
      id: game.player_1.id,
      username: game.player_1.user_name,
      wins: game.player_1.wins,
      loses: game.player_1.loses,
      draws: game.player_1.draws,
    });

    setPlayer({
      id: game.player_2.id,
      username: game.player_2.user_name,
      wins: game.player_2.wins,
      loses: game.player_2.loses,
      draws: game.player_2.draws,
    });

    setGame({
      id: game.game_id,
      moves: game.movement_log,
      winner: game.winner_turn_id,
      player1: game.player_1.id,
      player2: game.player_2.id,
    });
  }, []);
  return (
    <GlobalContext.Provider value={{ storeGame }}>
      <PlayersProvider>
        <GamesProvider>{children}</GamesProvider>
      </PlayersProvider>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
