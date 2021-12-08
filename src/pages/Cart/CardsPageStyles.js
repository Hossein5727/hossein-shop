import { makeStyles } from '@material-ui/core'

export const CardsPageStyles = makeStyles((theme) => ({
    container: {
        marginTop: '8px',
    },
    containerCard: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        background: '#F9FAFB !important',
        borderRadius: '15px !important',
        boxShadow: `1px 1px 22px #FBBF24 !important`,
        marginBottom: '12px',
    },
    descCard: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',
        padding: '4px 7px',

        '& h2': {
            fontSize: '26px'
        },

        '& hr': {
            borderTop: '2px solid #FFA500',
        }
    },
    desc: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '19px',
    },
    price: {
        display: 'flex',
        justifyContent: 'flex-end',
        fontSize: '29px'
    },
    imgCard: {
        width: '60%',

        '& img': {
            objectFit: 'contain'
        },
    },
    box: {
        marginTop: '21px',
    },
    totalCard: {
        width: '100%',
        backgroundColor: '#E5E7EB',
        padding: '3px 5px',
        borderRadius: '8px !important',
        boxShadow: '1px 1px 7px gray !important',
        margin: '9px auto'
    },
    fabOff: {
        display: 'flex !important',
        justifyContent: 'flex-end !important',
    }
}))