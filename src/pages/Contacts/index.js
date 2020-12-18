import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import { useContacts } from "./useContacts";
import { ContactsTable } from "./ContactsTable/index";


const useStyles = makeStyles((theme) =>
    createStyles(({
        root: {
            marginTop: theme.spacing(3)
        }
    }))
);

export const Contacts = () => {
    const classes = useStyles();
    const contacts = useContacts();
    
    return <Container className={classes.root}>
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h3" component="h1">
                    Contacts
                </Typography>
            </Grid>
            <Grid item xs={12}>
                {(() => {
                    if (contacts.isLoading) {
                        return <div>...loading</div>
                    }
                    if (contacts.isError) {
                        return <div>...error</div>
                    }

                    return <ContactsTable data={contacts.data} />
                })()}
            </Grid>
        </Grid>
    </Container>
};