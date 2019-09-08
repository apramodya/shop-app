import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const ProductDetailsScreen = props => {
    const productId = props.navigation.getParam('productId');
    const product = useSelector(state => state.products.availableProducts.find(p => p.id === productId));
    return (
        <View>
            <Text>{product.title}</Text>
        </View>
    );
};

ProductDetailsScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('title')
    };
};

const styles = StyleSheet.create({});

export default ProductDetailsScreen;
