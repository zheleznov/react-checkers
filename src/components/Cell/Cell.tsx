import React, { ReactElement } from 'react';
import './Cell.css';
import { mergeClasses } from 'utils/utils';
import { CellModel } from 'models/CellModel';

type CellProps = {
    cell: CellModel;
};

export const Cell = ({ cell }: CellProps): ReactElement => {
    const { figure, label } = cell;
    return (
        <div className={mergeClasses('cell', label)}>
            {figure?.imageSrc && <img className="icon" src={figure.imageSrc} alt={figure.name} />}
        </div>
    );
};
