import { createContext, useCallback, useState } from "react";

export const GamesContext = createContext();

const GamesProvider = ({ children }) => {
  const [games, setGames] = useState({
    byId: {},
    order: [],
  });

  const setGame = useCallback(
    (game) => {
      if (!games.byId[game.id]) {
        setGames((games) => ({
          byId: {
            ...games.byId,
            [game.id]: game,
          },
          order: games.order.includes(game.id)
            ? games.order
            : [...games.order, game.id],
        }));
      }
    },
    [games]
  );

  const getGame = useCallback((id) => games.byId[id], [games]);

  const getGames = useCallback(
    () => games.order.map((id) => games.byId[id]),
    [games]
  );

  return (
    <GamesContext.Provider
      value={{
        getGames,
        getGame,
        setGame,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export default GamesProvider;
