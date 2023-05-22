const Player = ({ username, wins, loses, draws, isPlayer1 = false }) => (
  <div className="flex mx-6">
    <div className={`h-4 mr-2 mt-1 rounded-full w-4 ${isPlayer1 ? 'bg-red-600': 'bg-yellow-400'}`} />
    <div className="flex flex-col">
      <div className="font-bold text-gray-900">{username}</div>
      <div className="font-light text-sm">
        <label className="font-bold text-gray-600">w/l/d:</label> {' '}
        <span>{wins} / {loses} / {draws}</span>
      </div>
    </div>
  </div>
);

const PlayersDisplay = ({ player1, player2 }) => (
  <div className="flex justify-center">
    <Player {...player1} isPlayer1 />
    <Player {...player2} />
  </div>
);

export default PlayersDisplay;