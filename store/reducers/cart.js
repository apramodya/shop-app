import {ADD_TO_CART} from '../actions/cart';
import CartItem from '../../models/cartItem';

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
    }

    return state;
}
