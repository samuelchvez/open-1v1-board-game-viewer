import useSlowCounter from "../../hooks/useSlowCounter";
// Connect4CellMask component is a blue square that has a circular mask inside letting show whatever is behind it through the circle. Using tailwind

const Connect4CellMask = () => (
  <div className="h-28 m-2 w-28 bg-blue-600 circleclip"></div>
);

const Connect4Cell = ({ player, empty = false, entering = false }) => (
  <div
    className={`h-28 m-2 rounded-full w-28 ${
      !empty && (player === 1 ? "bg-red-600" : "bg-yellow-400")
    } ${empty ? "bg-gray-200" : ""}
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
    <>
      <Connect4BoardDummy
        width={width}
        height={height}
        moves={moves}
        stop={stop}
      />
      <Connect4CellMask />
    </>
  );
};

export default Connect4Board;
