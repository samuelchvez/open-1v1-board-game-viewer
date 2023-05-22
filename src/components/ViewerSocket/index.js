import { useEffect, useContext } from "react";
import io from "socket.io-client";

import { GlobalContext } from "../GlobalProvider";
import { PlayersContext } from "../GlobalProvider/Players";
import { GamesContext } from "../GlobalProvider/Games";

const ViewerSocket = () => {
  const { setPlayer } = useContext(PlayersContext);
  const { setGame } = useContext(GamesContext);
  const { storeGame } = useContext(GlobalContext);

  useEffect(() => {
    const socket = io.connect(process.env.REACT_APP_COORDINATOR_HOST, {
      "sync disconnect on unload": true,
    });

    socket.on("connect", () => {
      socket.emit("signin", {
        user_name: process.env.REACT_APP_VIEWER_USERNAME,
        password: process.env.REACT_APP_VIEWER_PASSWORD,
        tournament_id: parseInt(
          process.env.REACT_APP_COORDINATOR_TOURNAMENT_ID
        ),
        user_role: process.env.REACT_APP_VIEWER_ROLE,
      });
    });

    socket.on("game_finished", (data) => {
      storeGame(data, setPlayer, setGame);
    });
  }, [setPlayer, setGame, storeGame]);

  return null;
};

export default ViewerSocket;
