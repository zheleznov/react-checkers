import { FigureModel } from 'models/FigureModel';
import { Labels } from 'models/Labels';
import { CellModel } from 'models/CellModel';
import pieceImgLight from 'images/light.png';
import pieceImgDark from 'images/brown.png';

class PieceModel extends FigureModel {
    constructor(label: Labels, cell: CellModel) {
        super(label, cell);
        this.imageSrc = label === Labels.Light ? pieceImgLight : pieceImgDark;
    }
}

export { PieceModel };
