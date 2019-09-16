import PRODUCTS from '../../data/dummy-data';
import {DELETE_PRODUCT} from "../actions/product";

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(product => product.ownerId === 'u1')
};

export default (state = initialState, action) => {
    switch (action.type) {
        case DELETE_PRODUCT:
            return {
                ...state,
                availableProducts: state.availableProducts.filter(p => p.id !== action.pid),
                userProducts: state.userProducts.filter(p => p.id !== action.pid)
            }
    }
    return state;
};
