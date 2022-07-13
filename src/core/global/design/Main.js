// Libraries
import { makeStyles } from "@mui/styles";

export const Main = makeStyles(({
    btn: {
        overflow: 'hidden',
        backgroundColor: '#2ecc71',
        borderRadius: '7px',
        padding: '4px 0 3px 0',

        '&:hover': {
            backgroundColor: '#27ae60',
            transition: 'all 0.3s ease-in-out'
        }
    }   
}));