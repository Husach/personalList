import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
    Container,
    Grid,
    Typography,
    Box,
    CircularProgress
} from '@material-ui/core';
import { useContacts } from "./useContacts";
import { useDataViewMode } from "./useDataViewMode";
import { ContactsTable } from "./ContactsTable/index";
import { ToggleDataViewMode } from "./ToggleDataViewMode/index";
import { DATA_VIEW_MODES } from "./constants";

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
    const [dataViewMode, setDataViewMode] = useDataViewMode();

    return <Container className={classes.root}>
        <Grid container>
            <Grid item xs={12}>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="h4" component="h1">
                        Contacts
                    </Typography>
                    <ToggleDataViewMode
                        dataViewMode={dataViewMode}
                        setDataViewMode={setDataViewMode} />
                </Box>
            </Grid>
            <Grid item xs={12}>
                {(() => {
                    if (contacts.isLoading) {
                        return <CircularProgress />
                    }
                    if (contacts.isError) {
                        return <div>...error</div>
                    }

                    if (dataViewMode === DATA_VIEW_MODES.TABLE) {
                        return <ContactsTable data={contacts.data} />
                    }

                    if (dataViewMode === DATA_VIEW_MODES.GRID) {
                        return "grid"
                    }
                })()}
            </Grid>
        </Grid>
    </Container>
};