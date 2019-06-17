import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';

const useStyles = makeStyles(
    (theme): StyleRules<string, {}> => ({
        title: {
            marginBottom: theme.spacing(2),
            fontWeight: 'bold',
        },
    }),
);

export const Title: React.FC = (): React.ReactElement => {
    const classes = useStyles();

    return (
        <Typography component="h1" variant="h2" align="center" className={classes.title}>
            TIC TAC TOE
        </Typography>
    );
};

export default Title;
