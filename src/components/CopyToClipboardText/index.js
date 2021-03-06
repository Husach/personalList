import { useState, useCallback } from "react";
import PropTypes from 'prop-types';
import {useCopyToClipboard} from "react-use";
import { Button, Tooltip } from '@material-ui/core';
import { FileCopyOutlined } from '@material-ui/icons';
import { createStyles, makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            cursor: "pointer"
        },
        icon: {
            marginRight: theme.spacing(1)
        },
        headerContainer: {
            marginRight: theme.spacing(3)
        }
    })
);

const STATUS_COPY = {
    COPY: "copy",
    COPIED: "copied"
};

export const CopyToClipboardText = ({ text }) => {
    const classes = useStyles();
    const [, copyToClipboard] = useCopyToClipboard();
    const [statusCopy, setStatusCopy] = useState(STATUS_COPY.COPY);

    const getTooltipTitle = () => {
        switch (statusCopy) {
        case STATUS_COPY.COPY:
            return "Copy";
        case STATUS_COPY.COPIED:
            return "Copied";
        default:
            return ""
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
                <FileCopyOutlined fontSize="small" className={classes.icon} />
                {text}
            </Button>
        </Tooltip>
    );
};

CopyToClipboardText.propTypes = {
    text: PropTypes.string.isRequired
};