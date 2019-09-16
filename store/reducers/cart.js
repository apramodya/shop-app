import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions/cart';
import CartItem from '../../models/cartItem';
import {ADD_ORDER} from "../actions/orders";
import {DELETE_PRODUCT} from "../actions/product";

const initialState = {
  items: {},
  amount: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const productPrice = addedProduct.price;
            const productTitle = addedProduct.title;

            let newItem;

            if (state.items[addedProduct.id]) {
                newItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1 ,
                    productPrice,
                    productTitle,
                    state.items[addedProduct.id].sum + productPrice);
            } else {
                newItem = new CartItem(1, productPrice, productTitle, productPrice);
            }

            return {
                ...state,
                items: { ...state.items, [addedProduct.id]: newItem},
                amount: state.amount + productPrice
            };
        case REMOVE_FROM_CART:
            const productId = action.pid;
            const productToRemove = state.items[productId];
            let updatedCartItems;

            if (productToRemove.quantity > 1) {
                const updatedCartItem = new CartItem(
                    productToRemove.quantity - 1,
                    productToRemove.productPrice,
                    productToRemove.productTitle,
                    productToRemove.sum - productToRemove.productPrice
                );
                updatedCartItems = {...state.items, [productId] : updatedCartItem};
            } else {
                updatedCartItems = {...state.items};
                delete updatedCartItems[productId];
            }

            return {
                ...state,
                items: updatedCartItems,
                amount: state.amount - (productToRemove.productPrice)
            };
        case ADD_ORDER:
            return initialState;
        case DELETE_PRODUCT:
            if (!state.items[action.pid]) {
                return state
            }
            const updatedItems = {...state.items};
            const itemTotal = state.items[action.pid].sum;
            delete updatedItems[action.pid];

            return {
                ...state,
                items: updatedItems,
                amount: state.amount - itemTotal
            }

    }

    return state;
}
