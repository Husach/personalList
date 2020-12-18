import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { makeStyles } from '@material-ui/core/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Typography
} from '@material-ui/core';
import { CopyToClipboardText } from "../../../components/CopyToClipboardText";


const useStyles = makeStyles({
    table: {}
});

export const ContactsTable = ({ data }) => {
    const classes = useStyles();
    
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Avatar</TableCell>
                        <TableCell>Full name</TableCell>
                        <TableCell>Birthday</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Location</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { data.map((contact) => (
                        <TableRow key={contact.login.uuid}>
                            <TableCell component="th" scope="row">
                                <Avatar alt="" src={contact.picture.thumbnail} />
                            </TableCell>
                            <TableCell>
                                {contact.name.title} {contact.name.first} {contact.name.last}
                            </TableCell>
                            <TableCell>
                                <Typography>{format(parseISO(contact.dob.date), 'MM/dd/yyyy')}</Typography>
                                <Typography>{contact.dob.age} years</Typography>
                            </TableCell>
                            <TableCell>
                                <CopyToClipboardText text={contact.phone}/>
                            </TableCell>
                            <TableCell>4</TableCell>
                            <TableCell>5</TableCell>
                        </TableRow>
                    )) }
                </TableBody>
            </Table>
        </TableContainer>
    )
};