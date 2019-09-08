import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useSelector} from "react-redux";
import ProductItem from "../../components/shop/ProductItem";

const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts);
    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={data =>
                <ProductItem image={data.item.imageUrl}
                             title={data.item.title}
                             price={data.item.price}
                             onViewDetail={() => {
                                 props.navigation.navigate(
                                     {
                                         routeName: 'ProductDetails',
                                         params: {productId: data.item.id, title: data.item.title}
                                     },
                                 );
                             }}
                             onAddToCart={() => {
                                 props.navigation.navigate({routeName: 'Cart'});
                             }}
                />
            }
        />
    );
};

ProductsOverviewScreen.navigationOptions = {
    headerTitle: 'Shop App',
};

const styles = StyleSheet.create({});

export default ProductsOverviewScreen;
