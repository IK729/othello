import { useState } from 'react';
import styles from './index.module.css';
const turns: string[] = ['', '黒の番', '白の番'];
const Home = () => {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState(
      [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 2, 0, 0, 0],
      [0, 0, 0, 2, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ]
    // [
    //   [0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0, 1],
    //   [0, 0, 0, 0, 0, 0, 2, 1],
    //   [0, 0, 0, 0, 0, 1, 2, 1],
    //   [0, 0, 0, 0, 2, 1, 2, 1],
    //   [0, 0, 0, 1, 2, 1, 2, 1],
    //   [0, 0, 2, 1, 2, 1, 2, 1],
    //   [0, 2, 1, 2, 1, 2, 1, 2],
    // ]
    // [
    //   [0, 0, 0, 0, 0, 0, 0, 0],
    //   [2, 1, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0, 0],
    //   [1, 1, 0, 0, 0, 0, 0, 0],
    //   [0, 2, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0, 0],
    // ]
    // [
    //   [0, 0, 0, 0, 0, 0, 0, 0],
    //   [2, 2, 1, 2, 1, 2, 1, 0],
    //   [1, 1, 2, 1, 2, 1, 2, 0],
    //   [2, 2, 1, 2, 1, 2, 1, 0],
    //   [1, 1, 2, 1, 2, 1, 2, 0],
    //   [2, 2, 1, 2, 1, 2, 1, 0],
    //   [1, 1, 2, 1, 2, 1, 2, 0],
    //   [2, 1, 2, 1, 2, 1, 2, 0],
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
  console.table(board)
  const onClick = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = JSON.parse(JSON.stringify(board));
    let wasThrough = false
    const directions = [
      [-1,1],
      [0,1],
      [1,1],
      [1,0],
      [1,-1],
      [0,-1],
      [-1,-1],
      [-1,0]
    ]
    console.log(turnColor)
    for (const d of directions) {
      if (board[y + d[1]] !== undefined && board[y + d[1]][x + d[0]] === 3 - turnColor) {
        for (let n = 2; n < 8; n += 1) {
          if (board[y + d[1] * n] !== undefined) {
            if (board[y + d[1] * n][x + d[0]* n] === turnColor) {
              newBoard[y][x] = turnColor;
              for (let m = n; m >= 0 ; m -= 1) {
                newBoard[y + d[1] * m][x + d[0] * m] = turnColor;
              }
              wasThrough = true
              break;
            } else if (board[y + d[1]* n][x + d[0] * n] === 3 - turnColor) {
              continue;
            }
          }
        }
      }
    }
    if (wasThrough) setTurnColor(3 - turnColor)
    setBoard(newBoard);
   
    // if(
    //   board[y + 1] !== undefined &&
    //   board[y + 1][x] === 3 - turnColor
    // ) {
    //   for(let n = 2; n < 8; n += 1) {if(
    //     board[y + n] !== undefined &&
    //     board[y + n][x] === turnColor) {
    //       newBoard[y][x] = turnColor
    //       setTurnColor(3 - turnColor)

    //       for(let m = n - 1; m > 0; m -= 1) {
    //         newBoard[y + m][x] = turnColor
    //       }

    //       setBoard(newBoard);
    //       break
    //     }
    //     else if(
    //       board[y + n] !== undefined &&
    //       board[y + n][x] === 3 - turnColor
    //     ) {
    //       continue
    //     }
    //     break
    //   }
    // }

    // if (
    //   board[y + 1] !== undefined &&
    //   board[y + 1][x] === 3 - turnColor
    // ) {
    //   if (
    //     board[y + 2] !== undefined &&
    //     board[y + 2] [x] === turnColor
    //   ) {
    //     newBoard[y][x] = turnColor
    //     setTurnColor(3 - turnColor)
    //   }else if(
    //     board[y + 2] !== undefined &&
    //     board[y + 2] [x] === 3 - turnColor
    //   ) {
    //    if(
    //     board[y + 3] !== undefined &&
    //     board[y + 3] [x] === turnColor
    //    ) {
    //     newBoard[y][x] = turnColor
    //     setTurnColor(3 - turnColor)
    //    }
    //   }
    //   setBoard(newBoard);
    // }
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
