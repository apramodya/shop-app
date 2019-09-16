import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Button, FlatList, StyleSheet} from 'react-native';
import ProductItem from "../../components/shop/ProductItem";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from '../../components/ui/HeaderButton';
import colors from "../../constants/colors";
import * as productActions from '../../store/actions/product';

const UserProductScreen = props => {
    const dispatch = useDispatch();
    const userProducts = useSelector(state => state.products.userProducts);
    const selectItemHandler = (id, item) => {
        props.navigation.navigate(
            {
                routeName: 'ProductDetails',
                params: {productId: id, title: item}
            },
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
                        selectItemHandler(itemData.item.id, itemData.item.title)
                    }}
                >
                    <Button
                        color={colors.primary}
                        title="Edit"
                        onPress={() => {
                        }}
                    />
                    <Button
                        color={colors.primary}
                        title="Delete"
                        onPress={() => {
                            dispatch(productActions.deleteProduct(itemData.item.id))
                        }}
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
    };
};

const styles = StyleSheet.create({});

export default UserProductScreen;
