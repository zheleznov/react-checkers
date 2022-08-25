import React, { Fragment, ReactElement } from 'react';
import './Board.css';
import { Cell } from '../Cell';
import { BoardModel } from 'models/BoardModel';

type BoardProps = {
    board: BoardModel;
    onSetBoard: (board: BoardModel) => void;
};

export const Board = ({ board }: BoardProps): ReactElement => {
    return (
        <div className="board">
            {board.cells.map((row, index) => (
                <Fragment key={index}>
                    {row.map((cell) => (
                        <Cell cell={cell} key={cell.key} />
                    ))}
                </Fragment>
            ))}
        </div>
    );
};
