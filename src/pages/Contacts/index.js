import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useContacts } from "./useContacts";

// material-ui
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

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
    
    console.warn('Contacts');
    console.log("contacts:", contacts);
    
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