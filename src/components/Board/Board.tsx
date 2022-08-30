import React, { Fragment, ReactElement, useState } from 'react';
import './Board.css';
import { Cell } from '../Cell';
import { BoardModel } from 'models/BoardModel';
import { CellModel } from 'models/CellModel';

type BoardProps = {
    board: BoardModel;
    onSetBoard: (board: BoardModel) => void;
};

export const Board = ({ board }: BoardProps): ReactElement => {
    const [selected, setSelected] = useState<CellModel>();

    const handleFigureClick = (cell: CellModel) => {
        if (cell.figure) {
            setSelected(cell);
        }
    };

    return (
        <div className="board">
            {board.cells.map((row, rowIndex) => (
                <Fragment key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                        <Cell
                            cell={cell}
                            key={cell.key}
                            rowIndex={rowIndex}
                            cellIndex={cellIndex}
                            selected={selected?.x === cell.x && selected.y === cell.y} // check if selected cell coords equal to rendered cell
                            onFigureClick={handleFigureClick}
                        />
                    ))}
                </Fragment>
            ))}
        </div>
    );
};
