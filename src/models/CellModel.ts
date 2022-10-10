import { Labels } from './Labels';
import { BoardModel } from './BoardModel';
import { FigureModel } from 'models/FigureModel';

class CellModel {
    readonly x: number;
    readonly y: number;
    readonly label: Labels;
    figure: FigureModel | null; // our figure
    board: BoardModel;
    available: boolean;
    key: string;

    constructor(x: number, y: number, label: Labels, board: BoardModel) {
        this.x = x; // x coord
        this.y = y; // y coord
        this.label = label;
        this.board = board;
        this.available = false; // is it free for figure
        this.key = `${String(x)}${String(y)}`;
        this.figure = null; // null by default
    }

    isForwardCell(targetCell: CellModel, selectedFigure: FigureModel): boolean {
        const { cell, label } = selectedFigure;

        const dx = Math.abs(cell.x - targetCell.x);
        const dy = cell.y - targetCell.y;

        return label === Labels.Light ? dx === 1 && dy === 1 : dx === 1 && dy === -1;
    }

    moveFigure(targetCell: CellModel) {
        if (this.figure && this.figure.canMove(targetCell)) {
            targetCell.figure = this.figure; // set figure on target cell
            targetCell.figure.cell = targetCell; // set new cell in figure cell
            this.figure = null; // clean current cell
        }
    }
}

export { CellModel };
