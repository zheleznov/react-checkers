import { Labels } from 'models/Labels';
import { CellModel } from 'models/CellModel';
import pieceImgLight from 'images/light.svg';
import pieceImgDark from 'images/brown.svg';
import { FigureNames } from 'models/FigureNames';

class FigureModel {
    label: Labels;
    imageSrc: string;
    isDame: boolean;
    cell: CellModel;
    name: FigureNames;

    constructor(label: Labels, cell: CellModel) {
        this.label = label;
        this.cell = cell;
        this.cell.figure = this;
        this.isDame = false;
        this.name = FigureNames.Piece;
        this.imageSrc = label === Labels.Light ? pieceImgLight : pieceImgDark;
    }

    canMove(targetCell: CellModel): boolean {
        return this.cell.isForwardCell(targetCell, this);
    }
}

export { FigureModel };
