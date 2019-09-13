import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const CartItem = props => {
    return(
        <View style={styles.cardItem}>
            <View style={styles.itemData}>
                <Text style={styles.quantity}>{props.quantity} </Text>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={styles.itemData}>
                <Text style={styles.title}>Rs. {props.amount}</Text>
                <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton}>
                    <Ionicons name="ios-trash" size={23} color="red"/>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    cardItem: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantity: {
        fontFamily: 'open-sans',
        color: '#888',
        fontSize: 16,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 16
    },
    deleteButton: {
        marginLeft: 20
    },
});

export default CartItem;