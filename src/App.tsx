import React, { useEffect, useState } from 'react';
import './App.css';
import { Board } from './components/Board';
import BoardModel from './models/BoardModel';

function App() {
    const [board, setBoard] = useState<BoardModel>(new BoardModel());

    const restart = () => {
        const newBoard = new BoardModel();
        newBoard.initCells();
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
