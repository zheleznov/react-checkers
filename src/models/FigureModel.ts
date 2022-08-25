import { Labels } from 'models/Labels';
import { CellModel } from 'models/CellModel';
import pieceImgLight from 'images/light.png';
import pieceImgDark from 'images/brown.png';
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
}

export { FigureModel };
