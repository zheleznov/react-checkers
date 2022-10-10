import React, { useEffect, useState } from 'react';
import './App.css';
import { Board } from 'components/Board';
import { BoardModel } from 'models/BoardModel';
import { PlayerModel } from 'models/PlayerModel';
import { Labels } from 'models/Labels';

function App() {
    const [board, setBoard] = useState<BoardModel>(new BoardModel());
    const lightPlayer = new PlayerModel(Labels.Light);
    const darkPlayer = new PlayerModel(Labels.Dark);
    const [currentPlayer, setCurrentPlayer] = useState<PlayerModel>(lightPlayer);

    const restart = () => {
        const newBoard = new BoardModel();
        newBoard.createCells();
        newBoard.addFigures();
        setBoard(newBoard);
        setCurrentPlayer(lightPlayer);
    };

    const changePlayer = () => {
        setCurrentPlayer(currentPlayer?.label === Labels.Light ? darkPlayer : lightPlayer);
    };

    useEffect(() => {
        restart();
    }, []);

    return (
        <div className="app">
            <div className="player">Current Player: {currentPlayer.label}</div>
            <Board
                board={board}
                currentPlayer={currentPlayer}
                onChangePlayer={changePlayer}
                onSetBoard={setBoard}
            />
        </div>
    );
}

export default App;
