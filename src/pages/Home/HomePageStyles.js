import { makeStyles } from "@material-ui/core";


export const HomePageStyles = makeStyles((theme) => ({
    container: {
        marginTop: '55px',
        maxWidth: '1170px',
        display: 'flex !important',
        flexWrap: 'wrap',
        justifyContent: 'center !important',
        alignItems: 'center'
    },
    cardContainer: {
        width: '350px',
        height: '350px',
        margin: '20px',
        backgroundColor: `#F3F4F6 !important`,
        borderRadius: '36px !important',
        boxShadow: '5px 5px 29px #9CA3AF !important',

        '&:hover':{
            boxShadow: '5px 5px 32px #FFA500 !important',
        }
    },
    headerProduct: {
        cursor: 'pointer'
    },
    imgProduct: {
        width: '45%',
        height: '45%',
        objectFit: 'contain'
    },
    descProduct: {
        display: 'flex',
        flexDirection: 'column',
        padding: '3px',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    disabledBtn: {
        borderRadius: '2px',
        backgroundColor: '#4B5563 !important',
        color: 'red !important'
    },

}))