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
}

export { CellModel };
