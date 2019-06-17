import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';

const useStyles = makeStyles(
    (theme): StyleRules<string, {}> => ({
        footer: {
            marginTop: 'auto',
            padding: theme.spacing(1),
        },
    }),
);

export const Footer: React.FC = (): React.ReactElement => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="xs">
                <Typography variant="body1" align="center">
                    by LL
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
