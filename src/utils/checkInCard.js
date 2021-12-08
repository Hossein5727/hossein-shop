import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from 'react-router-dom'
import { Add } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { UseCartActions } from '../Providers/CartProvider';


function checkInCard(cart, product) {
    const { addProduct } = UseCartActions()

    let value = ""

    const isCard = cart.find(c => c.id === product.id)

    if (isCard) {
        value = <div>
            <Link to="/cards">
                <Typography color="orange">
                    <ShoppingCartCheckoutIcon fontSize="large" />
                </Typography>
            </Link>
        </div>
    } else {
        value = <div>
            <Typography variant="h5" color="orange" onClick={() => addProduct(product)}>
                <Add fontSize="large" />
            </Typography>
        </div>
    }

    return value
}

export default checkInCard