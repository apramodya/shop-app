import React from 'react';
import {StyleSheet, View, Text, FlatList, Image, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import colors from '../../constants/colors';
import CartItem from "../../components/shop/CartItem";
import * as cartActions from "../../store/actions/cart";
import * as orderActions from "../../store/actions/orders";

const CartScreen = props => {
    const dispatch = useDispatch();
    const cartTotalAmount = useSelector(state => state.cart.amount);
    const cartItems = useSelector(state => {
        const items = [];
        for (const key in state.cart.items) {
            let item = state.cart.items[key];
            items.push({
                productId: key,
                productPrice: item.productPrice,
                productTitle: item.productTitle,
                quantity: item.quantity,
                sum: item.sum
            })
        }

        return items.sort((a,b) => a.productId > b.productId? 1 : -1 );
    });

    return(
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText }>
                    Total: Rs <Text style={styles.amountText}>{cartTotalAmount.toFixed(2)}</Text>
                </Text>
                <Button
                    color={colors.ascent}
                    title="Order Now"
                    disabled={cartItems.length <= 0}
                    onPress={() => {
                        dispatch(orderActions.addOrder(cartItems, cartTotalAmount))
                    }}
                />
            </View>
            <View>
                <FlatList
                    data={cartItems}
                    keyExtractor={item => item.productId}
                    renderItem={itemData =>
                        <CartItem
                            quantity={itemData.item.quantity}
                            title={itemData.item.productTitle}
                            amount={itemData.item.sum}
                            onRemove={() => {
                                dispatch(cartActions.removeFromCart(itemData.item.productId))
                            }}
                            deletable
                        />
                    }
                />
            </View>
        </View>
    );
};

CartScreen.navigationOptions = {
    headerTitle: 'Your Cart'
};

const styles = StyleSheet.create({
    screen: {
        margin: 20,
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 20,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.36,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        borderRadius: 8,
        backgroundColor: 'white',
    },
    summaryText: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
    },
    amountText: {
        color: colors.primary,
    },

});

export default CartScreen;
