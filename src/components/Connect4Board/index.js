import useSlowCounter from "../../hooks/useSlowCounter";


const Connect4CellMask = () => (
  <div className="box-content h-20 p-2 overflow-hidden w-20">
    <div className="circleclip h-full rounded-full w-full" />
  </div>
);

const Connect4Maskboard = ({ width = 7, height = 6 }) => (
  <div className="circleclip absolute flex flex-wrap left-2 top-2" style={{ width: `${(6 * width)}rem` }}>
    {Array.from(Array(width * height), (_, index) => index).map((index) => (
      <Connect4CellMask key={index} />
    ))}
  </div>
);

const Connect4Cell = ({ player, empty = false, entering = false }) => (
  <div
    className={`h-20 m-2 rounded-full w-20 ${
      !empty && (player === 1 ? "bg-red-600" : "bg-yellow-400")
    }
    ${entering ? "animate animate-enterup" : ""}`}
  />
);

const Connect4Column = ({ height = 6, moves = [], animateLast = false }) => (
  <div className="flex flex-col-reverse">
    {moves.map((player, index) => (
      <Connect4Cell
        key={index}
        player={player}
        entering={animateLast && index === moves.length - 1}
      />
    ))}

    {Array.from(Array(height - moves.length), (_, index) => index).map(
      (index) => (
        <Connect4Cell key={index} empty />
      )
    )}
  </div>
);

const genColumns = (width, height, moves) => {
  const columns = Array.from(Array(width), () => []);
  for (const move of moves) {
    const [player, column] = move;

    if (columns[column].length === height) {
      continue;
    }

    columns[column].push(player);
  }

  return columns;
};

const Connect4BoardDummy = ({
  width = 7,
  height = 6,
  moves = [],
  stop = -1,
}) => {
  const columns = genColumns(
    width,
    height,
    stop >= 0 ? moves.slice(0, stop + 1) : moves
  );
  const last = stop >= 0 ? stop : moves.length - 1;

  return (
    <div className="flex">
      {columns.map((column, current) => (
        <Connect4Column
          key={current}
          height={height}
          moves={column}
          animateLast={moves[last][1] === current}
        />
      ))}
    </div>
  );
};

const Connect4Board = ({ width = 7, height = 6, moves = [] }) => {
  const stop = useSlowCounter(moves.length - 1, 1000);
  return (
    <div className="box-content mb-8 mx-auto overflow-hidden p-2 relative rounded-md shadow-xl" style={{ width: `${6 * width}rem` }}>
      <Connect4BoardDummy
        width={width}
        height={height}
        moves={moves}
        stop={stop}
      />
      <Connect4Maskboard />
    </div>
  );
};

export default Connect4Board;
