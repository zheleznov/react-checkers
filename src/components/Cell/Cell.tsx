import React, { ReactElement } from 'react';
import './Cell.css';
import { Labels } from 'models/Labels';
import { mergeClasses } from 'utils/utils';

type CellProps = {
    label: Labels;
};

export const Cell = ({ label }: CellProps): ReactElement => {
    return <div className={mergeClasses('cell', label)}></div>;
};
