import { useState } from 'react';
import styles from './index.module.css';
const turns: string[] = ['', '黒の番', '白の番'];
const Home = () => {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState(
    //   [
    //   [0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 1, 2, 0, 0, 0],
    //   [0, 0, 0, 2, 1, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0, 0],
    // ]
    [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 2, 1],
      [0, 0, 0, 0, 0, 1, 2, 1],
      [0, 0, 0, 0, 2, 1, 2, 1],
      [0, 0, 0, 1, 2, 1, 2, 1],
      [0, 0, 2, 1, 2, 1, 2, 1],
      [0, 2, 1, 2, 1, 2, 1, 2],
    ]
    // [
    //   [0, 0, 0, 0, 0, 0, 0, 0],
    //   [2, 2, 1, 2, 1, 2, 1, 0],
    //   [1, 1, 2, 1, 2, 1, 2, 0],
    //   [2, 2, 1, 2, 1, 2, 1, 0],
    //   [1, 1, 2, 1, 2, 1, 2, 0],
    //   [2, 2, 1, 2, 1, 2, 1, 0],
    //   [1, 1, 2, 1, 2, 1, 2, 0],
    //   [2, 1, 2, 1, 2, 1, 2, 0]
    // ]
    //   [
    //   [0, 0, 0, 0, 0, 0, 0, 0],
    //   [1, 1, 1, 1, 1, 1, 1, 0],
    //   [1, 2, 2, 2, 2, 2, 1, 0],
    //   [1, 2, 2, 2, 2, 2, 1, 0],
    //   [1, 2, 2, 0, 2, 2, 1, 0],
    //   [1, 2, 2, 2, 2, 2, 1, 0],
    //   [1, 2, 2, 2, 2, 2, 1, 0],
    //   [1, 1, 1, 1, 1, 1, 1, 0]
    // ]
  );
  const onClick = (x: number, y: number) => {
    {
      console.log(x, y);
      const newBoard = JSON.parse(JSON.stringify(board));
      if (
        board[y + 1] !== undefined &&
        board[y + 1][x] === 3 - turnColor &&
        board[y + 1][x] !== turnColor
      ) {
        newBoard[y][x] = turnColor;
        setTurnColor(3 - turnColor);
      }
      // if (

      // )
      setBoard(newBoard);
    }
  };
  return (
    <div className={styles.container}>
      {turns[turnColor]}
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => onClick(x, y)}>
              {color !== 0 && (
                <div
                  className={styles.stone}
                  style={{ background: color === 1 ? '#000' : '#fff' }}
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
