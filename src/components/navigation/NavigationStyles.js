import { makeStyles } from '@material-ui/core'

export const NavigationStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#E5E7EB',
        padding: '0.8rem 1rem',
        boxShadow: '2px 2px 6px #D1D5DB',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        '& ul': {
            display: 'flex',
            height: '100%',
            justifyContent: 'flex-start',
            alignItems: 'center',

            '& li': {
                margin: 'auto 4px',
                fontSize: '18px',
                padding: '4px 6px',
                borderRadius: '4px',

            },

            '& li:hover': {
                backgroundColor: '#F9FAFB',
                color: '#FFA500',
            },

        },
    },
    active: {
        fontSize: '18px',
        padding: '4px 6px',
        borderRadius: '4px',
        backgroundColor: '#F9FAFB',
        color: '#FFA500',
    },
    title: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}))