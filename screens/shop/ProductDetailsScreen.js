import React from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Colors from '../../constants/colors';
import * as cartActions from '../../store/actions/cart';

const ProductDetailsScreen = props => {
    const dispatch = useDispatch();
    const productId = props.navigation.getParam('productId');
    const product = useSelector(state => state.products.availableProducts.find(p => p.id === productId));
    return (
        <ScrollView>
            {/*<Image style={styles.image} source={{uri: product.imageUrl}}/>*/}
            <View style={styles.actions}>
                <Button color={Colors.primary}
                        title="Add To Cart"
                        onPress={() => {
                            dispatch(cartActions.addToCart(product));
                        }}/>
            </View>
            <Text style={styles.price}>{product.price.toFixed(2)}</Text>
            <Text style={styles.desc}>{product.description}</Text>
        </ScrollView>
    );
};

ProductDetailsScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('title')
    };
};

const styles = StyleSheet.create({
    image: {
        height: '300',
        width: '100%'
    },
    actions: {
        marginVertical: 20,
        alignItems: 'center',
    },
    price: {
        fontFamily: 'open-sans',
        fontSize: 22,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20,
    },
    desc: {
        fontFamily: 'open-sans',
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 10,
    },
});

export default ProductDetailsScreen;
