import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {useSelector} from "react-redux";

const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts);
    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={data => <Text>{data.item.title}</Text> }
        />
    );
};

ProductsOverviewScreen.navigationOptions = {
    headerTitle: 'Shop App',
};

const styles = StyleSheet.create({});

export default ProductsOverviewScreen;
