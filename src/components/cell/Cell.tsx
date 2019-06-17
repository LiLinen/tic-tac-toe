import React from 'react';
import { Button, makeStyles, Zoom } from '@material-ui/core';
import { BLANK } from '../../game/constants';

interface CellProps {
    onClick: () => void;
    symbol: string;
    disabled: boolean;
}

const useStyles = makeStyles({
    cell: {
        color: '#EFEFEF !important',
        backgroundColor: '#FF3B3F',
        height: 100,
        width: 100,
        fontSize: 48,
        margin: 10,
        transition: '0.5s',
    },
    raised: {},
});

export const Cell: React.FC<CellProps> = (props): React.ReactElement => {
    const { onClick, symbol, disabled } = props;
    const classes = useStyles();

    return (
        <Button
            href=""
            className={symbol !== BLANK ? `${classes.cell} ${classes.raised}` : `${classes.cell}`}
            disabled={disabled}
            onClick={(): void => onClick()}
        >
            <Zoom in={symbol !== BLANK}>
                <span>{symbol}</span>
            </Zoom>
        </Button>
    );
};

export default Cell;
