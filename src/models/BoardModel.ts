import { CellModel } from './CellModel';
import { Labels } from './Labels';
import { FigureModel } from 'models/FigureModel';

class BoardModel {
    cells: CellModel[][] = [];
    cellsInRow = 8;

    createCells() {
        for (let i = 0; i < this.cellsInRow; i += 1) {
            const row: CellModel[] = [];

            for (let j = 0; j < this.cellsInRow; j += 1) {
                if ((i + j) % 2 !== 0) {
                    row.push(new CellModel(i, j, Labels.Dark, this)); // black
                } else {
                    row.push(new CellModel(i, j, Labels.Light, this)); // white
                }
            }
            this.cells.push(row);
        }
    }

    getCell(x: number, y: number): CellModel {
        return this.cells[y][x];
    }

    addFigure(label: Labels, x: number, y: number) {
        new FigureModel(label, this.getCell(x, y));
    }
}

export { BoardModel };
