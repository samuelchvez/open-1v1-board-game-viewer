import { createContext, useCallback, useState } from "react";

export const PlayersContext = createContext();

const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = useState({
    byId: {},
  });

  const setPlayer = useCallback(
    (player) => {
      if (!players.byId[player.id]) {
        setPlayers((players) => ({
          byId: {
            ...players.byId,
            [player.id]: player,
          },
        }));
      }
    },
    [players]
  );

  const getPlayer = useCallback((id) => players.byId[id], [players]);

  return (
    <PlayersContext.Provider
      value={{
        getPlayer,
        setPlayer,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};

export default PlayersProvider;
