import React, { Fragment, ReactElement, useEffect, useState } from 'react';
import './Board.css';
import { Cell } from '../Cell';
import { BoardModel } from 'models/BoardModel';
import { CellModel } from 'models/CellModel';

type BoardProps = {
    board: BoardModel;
    onSetBoard: (board: BoardModel) => void;
};

export const Board = ({ board, onSetBoard }: BoardProps): ReactElement => {
    const [selected, setSelected] = useState<CellModel | null>(null);

    const updateBoard = () => {
        const updatedBoard = board.getNewBoard();
        onSetBoard(updatedBoard);
    };

    const highlightCells = () => {
        board.highlightCells(selected);
        updateBoard();
    };

    const handleCellClick = (cell: CellModel) => {
        if (selected && selected !== cell && selected.figure?.canMove(cell)) {
            selected.moveFigure(cell);
            setSelected(null);
            updateBoard();
        } else {
            setSelected(cell);
        }
    };

    useEffect(() => {
        highlightCells();
    }, [selected]);

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
                            onCellClick={handleCellClick}
                        />
                    ))}
                </Fragment>
            ))}
        </div>
    );
};
