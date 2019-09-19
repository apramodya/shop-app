import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Alert, Button, FlatList, StyleSheet} from 'react-native';
import ProductItem from "../../components/shop/ProductItem";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from '../../components/ui/HeaderButton';
import colors from "../../constants/colors";
import * as productActions from '../../store/actions/product';

const UserProductScreen = props => {
    const dispatch = useDispatch();
    const userProducts = useSelector(state => state.products.userProducts);

    const editItemHandler = (id) => {
        props.navigation.navigate(
            {
                routeName: 'EditProduct',
                params: {productId: id}
            }
        );
    };

    const deleteHandler = (id) => {
        Alert.alert(
            'Are you sure?',
            'Do you really need to delete this item?',
            [
                {
                    text: 'No', style: 'default'
                },
                {
                    text: 'Yes',
                    style: 'destructive',
                    onPress: () => {
                        dispatch(productActions.deleteProduct(id))
                    }
                }
            ]
        );
    };

    return (
        <FlatList
            data={userProducts}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <ProductItem
                    title={itemData.item.title}
                    price={itemData.item.price}
                    image={itemData.item.imageUrl}
                    onSelect={() => {
                        editItemHandler(itemData.item.id)
                    }}
                >
                    <Button
                        color={colors.primary}
                        title="Edit"
                        onPress={() => {
                            editItemHandler(itemData.item.id)
                        }}
                    />
                    <Button
                        color={colors.primary}
                        title="Delete"
                        onPress={deleteHandler.bind(this, itemData.item.id)}
                    />
                </ProductItem>
            )}
        />
    )
};

UserProductScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Your Products',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName="ios-create"
                    onPress={() => {
                        navData.navigation.navigate('EditProduct');
                    }}
                />
            </HeaderButtons>
        ),
    };
};

const styles = StyleSheet.create({});

export default UserProductScreen;
