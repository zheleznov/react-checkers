import React, { useEffect, useState } from 'react';
import './App.css';
import { Board } from 'components/Board';
import { BoardModel } from 'models/BoardModel';
import { Labels } from 'models/Labels';

function App() {
    const [board, setBoard] = useState<BoardModel>(new BoardModel());

    const restart = () => {
        const newBoard = new BoardModel();
        newBoard.createCells();
        newBoard.addFigure(Labels.Dark, 1, 2);
        newBoard.addFigure(Labels.Dark, 3, 4);
        newBoard.addFigure(Labels.Light, 5, 6);
        newBoard.addFigure(Labels.Light, 7, 2);
        setBoard(newBoard);
    };

    useEffect(() => {
        restart();
    }, []);

    return (
        <div className="app">
            <Board board={board} onSetBoard={setBoard} />
        </div>
    );
}

export default App;
