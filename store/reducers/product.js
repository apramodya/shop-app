import PRODUCTS from '../../data/dummy-data';
import {CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT} from "../actions/product";
import Product from "../../models/product";

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(product => product.ownerId === 'u1')
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PRODUCT:
            const newProduct = new Product(
                new Date().toString(),
                'u1',
                action.productData.title,
                action.productData.imageUrl,
                action.productData.description,
                action.productData.price
            );
            return {
                ...state,
                availableProducts: state.availableProducts.concat(newProduct),
                userProducts: state.userProducts.concat(newProduct)
            };
        case UPDATE_PRODUCT:
            const pid = action.pid;
            const productIndexInUserProducts = state.userProducts.findIndex(p => p.id === pid);
            const productIndexInAvailableProducts = state.availableProducts.findIndex(p => p.id === pid);
            const updatedProduct = new Product(
                pid,
                state.userProducts[productIndexInUserProducts].ownerId,
                action.productData.title,
                action.productData.imageUrl,
                action.productData.description,
                state.userProducts[productIndexInUserProducts].price
            );
            const updatedUserProducts = [...state.userProducts];
            updatedUserProducts[productIndexInUserProducts] = updatedProduct;
            const updatedAvailableProducts = [...state.userProducts];
            updatedAvailableProducts[productIndexInAvailableProducts] = updatedProduct;

            return {
                ...state,
                availableProducts: updatedAvailableProducts,
                userProducts: updatedUserProducts
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                availableProducts: state.availableProducts.filter(p => p.id !== action.pid),
                userProducts: state.userProducts.filter(p => p.id !== action.pid)
            };

    }
    return state;
};
