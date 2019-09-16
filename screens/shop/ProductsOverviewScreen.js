import React from 'react';
import {Button, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from '../../store/actions/cart';
import HeaderButton from '../../components/ui/HeaderButton';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import colors from "../../constants/colors";


const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();
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
            data={products}
            keyExtractor={item => item.id}
            renderItem={data =>
                <ProductItem
                    image={data.item.imageUrl}
                    title={data.item.title}
                    price={data.item.price}
                    onSelect={() => {
                        selectItemHandler(data.item.id, data.item.title)
                    }}
                >
                    <Button
                        color={colors.primary}
                        title="View Details"
                        onPress={() => {
                            selectItemHandler(data.item.id, data.item.title);
                        }}
                    />
                    <Button
                        color={colors.primary}
                        title="Add To Cart"
                        onPress={() => {
                            dispatch(cartActions.addToCart(data.item));
                        }}
                    />
                </ProductItem>
            }
        />
    );
};

ProductsOverviewScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Shop App',
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Cart"
                    iconName="ios-cart"
                    onPress={() => {
                        navData.navigation.navigate(
                            {
                                routeName: 'Cart',
                            }
                        );
                    }}/>
            </HeaderButtons>
        ),
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
    }
};

const styles = StyleSheet.create({});

export default ProductsOverviewScreen;
