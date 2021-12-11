import { makeStyles } from "@material-ui/core";

export const LoginStyles = makeStyles((theme) => ({
    container: {
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        flexDirection: 'column',
        marginTop: '25px',
    },
    boxInput: {
        width: '440px',
    },
    input: {
        marginBottom: '5px !important',
    },
    btn: {
        marginTop: '10px !important',
    }
}))