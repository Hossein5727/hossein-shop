import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';

const CartContext = React.createContext()
const CartContextDispatcher = React.createContext()

function CartProvider({ children }) {

    const [card, setCard] = useState([])

    return (
        <div>
            <CartContext.Provider value={card}>
                <CartContextDispatcher.Provider value={setCard}>
                    {children}
                </CartContextDispatcher.Provider>
            </CartContext.Provider>
        </div>
    )
}

export default CartProvider


export const UseCart = () => useContext(CartContext)


export const UseCartActions = () => {
    const card = useContext(CartContext)
    const setCard = useContext(CartContextDispatcher)

    const addProduct = (product) => {
        const clone = [...card]

        const selectedIndex = clone.findIndex(p => p.id === product.id)

        if (selectedIndex < 0) {
            clone.push({ ...product, qty: 1 })
            toast.dark("added cart", { icon: "🚀" })
        }
        // else {
        //     const updatedItem = { ...clone[selectedIndex] }
        //     updatedItem.qty++
        //     clone[selectedIndex] = updatedItem
        // }

        setCard([...clone])
        // console.log(card);
    }

    const incrementQty = (id) => {
        const clone = [...card]

        const selectedIndex = clone.findIndex(product => product.id === id)
        if (selectedIndex >= 0) {
            const updatedItem = { ...clone[selectedIndex] }
            updatedItem.qty++
            clone[selectedIndex] = updatedItem
        }

        setCard([...clone])
    }

    const decrementQty = (id) => {
        const clone = [...card]

        const selectedIndex = clone.findIndex(product => product.id === id)
        if (selectedIndex >= 0) {
            const updatedItem = { ...clone[selectedIndex] }
            updatedItem.qty--
            clone[selectedIndex] = updatedItem
        }

        setCard([...clone])
    }

    const deleteCard = (id) => {
        const clone = [...card]

        const filterCard = clone.filter(c => c.id != id)

        setCard(filterCard)
    }


    return { addProduct, incrementQty, decrementQty, deleteCard }
}