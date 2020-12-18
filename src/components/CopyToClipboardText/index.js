import { useCallback } from "react";
import PropTypes from 'prop-types';
import {useCopyToClipboard} from "react-use";
import { Button, Tooltip } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { createStyles, makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {},
        icon: {
            marginRight: theme.spacing(1)
        },
        headerContainer: {
            marginRight: theme.spacing(3)
        }
    })
);

export const CopyToClipboardText = ({ text }) => {
    const classes = useStyles();
    const [state, copyToClipboard] = useCopyToClipboard();
    const [statusCopy, setStatusCopy] = useState("copy");

    const getTooltipTitle = () => {
        switch (statusCopy) {
        case "copy": return "Copy";
        case "copied": return "Copied";
        default: return ""
        }
    };

    const onClickCopy = useCallback(() => {
        copyToClipboard(text);
        setStatusCopy("copy");
    }, [copyToClipboard, text]);

    const onMouseLeaveCopy = useCallback(() => {
        setStatusCopy("copy");
    }, [setStatusCopy]);

    return (
        <Tooltip title={getTooltipTitle()} placement="top" arrow>
            <Button className={classes.root} onClick={onClickCopy} onMouseLeave={onMouseLeaveCopy}>
                <FileCopyIcon className={classes.icon} />
                {text}
            </Button>
        </Tooltip>
    );
};

CopyToClipboardText.propTypes = {
    text: PropTypes.string.isRequired
};