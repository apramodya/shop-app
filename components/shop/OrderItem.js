import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import colors from '../../constants/colors';
import CartItem from "./CartItem";

const OrderItem = props => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <View style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.totalAmount}>Rs. {props.amount.toFixed(2)}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <Button
                color={colors.primary}
                title={showDetails ? "Hide Details" : "Show Details"}
                onPress={() => {setShowDetails(prev => !prev)}}
            />
            {showDetails && (
                <View style={styles.details}>
                    {props.items.map(
                        cartItem => (
                            <CartItem
                                key={cartItem.productId}
                                quantity={cartItem.quantity}
                                title={cartItem.productTitle}
                                amount={cartItem.sum}
                            />
                        )
                    )}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    orderItem: {
        shadowColor: 'black',
        shadowOpacity: 0.36,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        borderRadius: 8,
        backgroundColor: 'white',
        margin: 20,
        padding: 10,
        alignItems: 'center'
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    totalAmount: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
    },
    date: {
        fontFamily: 'open-sans',
        fontSize: 14,
        color: '#888'
    },
    details: {
      width: '100%'
    },
});

export default OrderItem;
