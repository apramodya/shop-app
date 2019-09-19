export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export const deleteProduct = (pid) => {
    return {
        type: DELETE_PRODUCT,
        pid: pid
    };
};

export const createProduct = (title, description, imageUrl, price) => {
    return {
        type: CREATE_PRODUCT,
        productData: {
            title: title,
            description: description,
            imageUrl: imageUrl,
            price: price
        }
    }
};

export const updateProduct = (pid, title, description, imageUrl) => {
    return {
        type: UPDATE_PRODUCT,
        pid: pid,
        productData: {
            title: title,
            description: description,
            imageUrl: imageUrl,
        }
    }
};
